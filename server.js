const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON and enable CORS
app.use(bodyParser.json());
app.use(cors());

// Initialize SQLite database
const db = new sqlite3.Database('./sales.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create transactions table if it doesn't exist
db.serialize(() => {
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
    )`);
});

// API endpoint to insert a transaction
app.post('/transactions', (req, res) => {
    const transaction = req.body;
    const stmt = db.prepare(`INSERT INTO transactions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
    stmt.run(
        transaction.id,
        transaction.sessionId,
        transaction.timestamp,
        transaction.items,
        transaction.cashTotal,
        transaction.doorCount,
        transaction.sessionDoorCount,
        transaction.eventDate,
        transaction.eventVenue,
        transaction.eventName,
        transaction.cashierName,
        transaction.note,
        transaction.synced
    );
    stmt.finalize((err) => {
        if (err) {
            res.status(500).send('Error inserting transaction');
        } else {
            res.status(201).send('Transaction inserted');
        }
    });
});

// API endpoint to get all transactions
app.get('/transactions', (req, res) => {
    db.all('SELECT * FROM transactions', [], (err, rows) => {
        if (err) {
            res.status(500).send('Error retrieving transactions');
        } else {
            res.json(rows);
        }
    });
});

// API endpoint to get transactions by sessionId
app.get('/transactions/:sessionId', (req, res) => {
    const sessionId = req.params.sessionId;
    db.all('SELECT * FROM transactions WHERE sessionId = ?', [sessionId], (err, rows) => {
        if (err) {
            res.status(500).send('Error retrieving transactions');
        } else {
            res.json(rows);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});