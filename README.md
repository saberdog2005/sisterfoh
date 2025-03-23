Sister Bar Event Register

A web-based point-of-sale (POS) application for managing event ticket sales at Sister Bar.


Overview
The Sister Bar Event Register is a web-based POS application designed for managing event ticket sales (e.g., Event Tickets and VIP tickets) at Sister Bar. It enables users to log customer transactions, track sales totals, export data to Excel, update Google Sheets, generate daily reports, and close out sales. Built with HTML, CSS, JavaScript, jQuery, and IndexedDB for local storage, it also integrates with Google Sheets for cloud syncing.
This tool is perfect for bar or event management staff looking to streamline ticket sales, monitor attendees, and keep accurate records efficiently.

Features:
Transaction Management: Log sales for Event Tickets ($20) and VIP tickets ($50), capturing customer names, quantities, totals, and cash received.

Real-Time Updates: Display a transaction log with timestamps, customer names, items, totals, and attendee counts.

Export to Excel: Export transaction data to an Excel file for offline analysis.

Google Sheets Integration: Sync transaction data to a Google Spreadsheet (requires Google API credentials).

Daily Reports: Generate HTML reports summarizing interactions and transactions by day.

Sales Closeout: Summarize and reset daily sales, providing totals for sales, cash, attendees, and unique customers.

Local Storage: Utilize IndexedDB to store transactions, interactions, and logs locally.

Responsive Design: Offer a mobile-friendly interface with a clean, modern UI.
        
Usage
    Launch the Application:
        Open http://localhost:8000/index.html in your browser.  Select Sales Log or Cash Register.
    Log a Sale:
        Enter a customer name in the "Customer Name" field.
        Use the "+" or "-" buttons to adjust quantities of Event Tickets ($20) or VIP tickets ($50).
        Input the cash amount in the "Cash Received" field.
        Click "Log Cash Sale" to record the transaction, which will then appear in the "Transaction Log" table.
    Export Transactions:
        Click "Export to Excel" to download a .xlsx file with all transactions and totals.
    Sync with Google Sheets:
        Ensure Google API credentials are set up.
        After logging sales, click "Export to Excel" to sync data to the Google Spreadsheet (ID: 1J7rCLXuCOgdtUGE_37dysfx0GFS5h1t8cFvS4_vQDtc).
    Generate Daily Report:
        Click "Debug Log & Daily Report" to download an HTML file (daily.html) summarizing daily interactions and transactions.
    Close Out Sales:
        Click "Close Out Sales" to reset transactions and view totals for sales, cash, attendees, and unique customers.

Dependencies

jQuery (3.7.1): DOM manipulation and event handling (loaded from cdnjs.cloudflare.com).
XLSX (0.18.5): Excel file generation (loaded from cdnjs.cloudflare.com, with a fallback to cdn.jsdelivr.net).
Google APIs: Google Sheets integration (loaded from apis.google.com).
IndexedDB: Local storage of transactions and logs (browser-native).

Development Notes

   CSS: Employs custom variables (--primary, --success, --danger, --spacing) for a responsive, modern design.
   JavaScript: Uses classes (DatabaseManager, StateManager, Transaction) for state management and IndexedDB storage.
   Error Handling: Provides user-friendly error messages via showError for network issues, API failures, or invalid inputs.
    Browser Compatibility: Targets modern browsers with fallback mechanisms for script loading (e.g., jQuery, XLSX).

Troubleshooting

   Google API Errors: For "Invalid cookiePolicy" or CORS issues, ensure the app runs on a web server (not file://) and Google Cloud credentials are correctly configured.
   Script Loading Issues: Verify your internet connection if jQuery, XLSX, or Google APIs fail to load. Use the browser console (F12) to debug.
   Local Storage: Confirm your browser supports IndexedDB (most modern browsers do). Clear browser data if problems persist.

Contributing
This project welcomes contributions! To get involved:

   Fork the repository or create a new branch.
   Modify register.html or related assets (e.g., CSS, JavaScript).
   Test changes locally using the installation steps.
   Submit a pull request with your updates.



New in Version 0.9.1
Enhanced transaction logging with additional metadata for improved tracking.

Better error handling for Google Sheets integration.

Improved UI responsiveness for mobile devices.

Fixed a bug where cash received was miscalculated in certain cases.

Added support for custom ticket types in the transaction log.


Prerequisites
To run this application, you’ll need:
A modern web browser (e.g., Chrome, Firefox, Edge).

A local web server (e.g., Python’s http.server or Node.js http-server) to serve the files (required for Google API integration).

An internet connection (for loading external scripts like jQuery, XLSX, and Google APIs).

Optional: Google Cloud credentials for Google Sheets integration (Client ID and API Key).


Installation
Clone or Download the Repository:

git clone https://github.com/saberdog2005/sisterfoh.git

Alternatively, download the register.html file and related assets to a local directory (e.g., SisterBarEventRegister).

Navigate to the Project Directory:

cd sisterfoh

Set Up a Local Web Server:
Open a terminal in the directory containing register.python3 -m http.server 8000

Access the app in your browser at http://localhost:8000/register.html.

Configure Google API Credentials:
Sign up for Google Cloud Console (https://console.cloud.google.com/).

Create a project and enable the Google Sheets API.

Generate credentials:
Go to APIs & Services > Credentials.

Create an API Key for API_KEY.

Create an OAuth 2.0 Client ID (type: "Web application") and add http://localhost:8000 to "Authorized JavaScript origins".

In register.html, replace YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com and YOUR_API_KEY with your actual credentials.

Usage
Launch the Application:
Open http://localhost:8000/register.html in your browser.

Log a Sale:
Enter a customer name in the "Customer Name" field.

Use the "+" or "-" buttons to adjust quantities of Event Tickets ($20) or VIP tickets ($50).

Input the cash amount in the "Cash Received" field.

Click "Log Cash Sale" to record the transaction, which will then appear in the "Transaction Log" table.

Export Transactions:
Click "Export to Excel" to download a .xlsx file with all transactions and totals.

Sync with Google Sheets:
Ensure Google API credentials are set up.        python3 -m http.server 8000

 Access the app in your browser at http://localhost:8000/index.html.
    Configure Google API Credentials:
        Sign up for Google Cloud Console (https://console.cloud.google.com/).
        Create a project and enable the Google Sheets API.
        Generate credentials:
            Go to APIs & Services > Credentials.
            Create an API Key for API_KEY.
            Create an OAuth 2.0 Client ID (type: "Web application") and add http://localhost:8000 to "Authorized JavaScript origins".
        In register.html, replace YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com and YOUR_API_KEY with your actual credentials.


Dependencies

jQuery (3.7.1): DOM manipulation and event handling (loaded from cdnjs.cloudflare.com).
XLSX (0.18.5): Excel file generation (loaded from cdnjs.cloudflare.com, with a fallback to cdn.jsdelivr.net).
Google APIs: Google Sheets integration (loaded from apis.google.com).
IndexedDB: Local storage of transactions and logs (browser-native).

Development Notes

CSS: Employs custom variables (--primary, --success, --danger, --spacing) for a responsive, modern design.
    JavaScript: Uses classes (DatabaseManager, StateManager, Transaction) for state management and IndexedDB storage.
    Error Handling: Provides user-friendly error messages via showError for network issues, API failures, or invalid inputs.
    Browser Compatibility: Targets modern browsers with fallback mechanisms for script loading (e.g., jQuery, XLSX).

Troubleshooting

   Google API Errors: For "Invalid cookiePolicy" or CORS issues, ensure the app runs on a web server (not file://) and Google Cloud credentials are correctly configured.
    Script Loading Issues: Verify your internet connection if jQuery, XLSX, or Google APIs fail to load. Use the browser console (F12) to debug.
    Local Storage: Confirm your browser supports IndexedDB (most modern browsers do). Clear browser data if problems persist.


License
This project is licensed under the MIT License - see the LICENSE (./LICENSE) file for details.
Contact
For questions or support, reach out to the project maintainer:

    Email: [j4sunofficia@gmail.com (mailto:j4sunofficia@gmail.com)] (replace with your contact info)
    GitHub: saberdog2005

Notes

Replace placeholders like YOUR_GOOGLE_CLIENT_ID, YOUR_API_KEY, and contact details with actual values in register.html and this README.
If hosting on GitHub, ensure the repository link (https://github.com/saberdog2005/sisterfoh) matches your setup.
        Include a LICENSE file if open-sourcing the project.

