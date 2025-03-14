const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { google } = require('googleapis');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// SQLite Database Setup
const db = new sqlite3.Database('./transactions.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the transactions database.');
    }
});

// Create transactions table
db.run(`CREATE TABLE IF NOT EXISTS transactions (
    id TEXT PRIMARY KEY,
    sessionId TEXT,
    timestamp TEXT,
    items TEXT,
    cashTotal REAL,
    doorCount INTEGER,
    sessionDoorCount INTEGER,
    eventDate TEXT,
    eventVenue TEXT,
    eventName TEXT,
    cashierName TEXT,
    note TEXT,
    synced INTEGER
)`, (err) => {
    if (err) {
        console.error('Error creating table:', err.message);
    }
});

// Google Sheets API Setup
const credentials = require('./credentials.json');
const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});
const sheets = google.sheets({ version: 'v4', auth });

// API Endpoint: Log a Transaction
app.post('/logTransaction', (req, res) => {
    const transaction = req.body;
    const sql = `INSERT INTO transactions (
        id, sessionId, timestamp, items, cashTotal, doorCount, sessionDoorCount,
        eventDate, eventVenue, eventName, cashierName, note, synced
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const params = [
        transaction.id, transaction.sessionId, transaction.timestamp, transaction.items,
        transaction.cashTotal, transaction.doorCount, transaction.sessionDoorCount,
        transaction.eventDate, transaction.eventVenue, transaction.eventName,
        transaction.cashierName, transaction.note, transaction.synced
    ];
    db.run(sql, params, function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: transaction.id });
        broadcastUpdate(); // Notify all WebSocket clients of the update
    });
});

// API Endpoint: Get Transactions
app.get('/getTransactions', (req, res) => {
    const { sessionId } = req.query;
    const sql = sessionId
        ? 'SELECT * FROM transactions WHERE sessionId = ? ORDER BY timestamp DESC'
        : 'SELECT * FROM transactions ORDER BY timestamp DESC';
    db.all(sql, sessionId ? [sessionId] : [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Sync Transactions to Google Sheets
async function syncWithGoogleSheets() {
    db.all('SELECT * FROM transactions WHERE synced = 0', [], async (err, rows) => {
        if (err) {
            console.error('Error fetching unsynced transactions:', err.message);
            return;
        }
        for (const row of rows) {
            try {
                await sheets.spreadsheets.values.append({
                    spreadsheetId: 'YOUR_SPREADSHEET_ID', // Replace with your Google Sheet ID
                    range: 'Sheet1!A:M',
                    valueInputOption: 'RAW',
                    resource: {
                        values: [[
                            row.id, row.sessionId, row.timestamp, row.items, row.cashTotal,
                            row.doorCount, row.sessionDoorCount, row.eventDate, row.eventVenue,
                            row.eventName, row.cashierName, row.note, row.synced
                        ]]
                    }
                });
                db.run('UPDATE transactions SET synced = 1 WHERE id = ?', [row.id], (err) => {
                    if (err) {
                        console.error('Error updating synced status:', err.message);
                    }
                });
            } catch (error) {
                console.error('Error syncing to Google Sheets:', error.message);
            }
        }
    });
}

setInterval(syncWithGoogleSheets, 5 * 60 * 1000);

// WebSocket connection handler
wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});

// Broadcast updates to all connected clients
function broadcastUpdate() {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send('update');
        }
    });
}

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
