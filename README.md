<h1>Sister Bar Event Register</h1>


A web-based point-of-sale (POS) application for managing event ticket sales at Sister Bar.

<h2>Overview</h2>
The Sister Bar Event Register is a web-based POS application designed to streamline event ticket sales management at Sister Bar. It provides an efficient solution for:

    Logging customer transactions
    Tracking sales totals
    Exporting data
    Syncing with Google Sheets
    Generating daily reports
    Closing out sales

Built with HTML, CSS, JavaScript, jQuery, and IndexedDB for local storage, this tool integrates seamlessly with Google Sheets for cloud-based record keeping. Its responsive design ensures usability across devices, making it an ideal choice for bar and event management staff.

<h2>Features</h2>

    Transaction Management: Record sales for:
        Event Tickets ($20)
        VIP Tickets ($50)
        Includes customer names, ticket quantities, totals, and cash received.
    Real-Time Updates: Display a live transaction log with:
        Timestamps
        Customer details
        Items
        Totals
        Attendee counts
    Export to Excel: Download transaction data as an Excel (.xlsx) file for offline analysis.
    Google Sheets Integration: Sync transaction data to a Google Spreadsheet (requires Google API credentials).
    Daily Reports: Generate HTML reports summarizing daily interactions and transactions.
    Sales Closeout: Reset daily sales and view comprehensive totals for:
        Sales
        Cash
        Attendees
        Unique customers
    Local Storage: Store transactions and logs locally using IndexedDB.
    Responsive Design: Enjoy a modern, mobile-friendly interface with a clean UI.

<h2>New in Version 0.9.1</h2>

    Enhanced transaction logging with additional metadata for improved tracking.
    Improved error handling for Google Sheets integration.
    Better UI responsiveness for mobile devices.
    Fixed a bug where cash received was miscalculated in certain cases.
    Added support for custom ticket types in the transaction log.

<h2>Prerequisites</h2>
To run the application, ensure you have:

    A modern web browser (e.g., Chrome, Firefox, Edge).
    A local web server (e.g., Python’s http.server or Node.js http-server) to serve the files (required for Google API integration).
    An internet connection for loading external scripts (e.g., jQuery, XLSX, Google APIs).
    Optional: Google Cloud credentials (Client ID and API Key) for Google Sheets integration.

<h2>Installation</h2>

   Clone or Download the Repository:
   
   bash

    git clone https://github.com/saberdog2005/sisterfoh.git

  Alternatively, download the repository files to a local directory.
  Navigate to the Project Directory:

  bash
  
    cd sisterfoh

  Set Up a Local Web Server:
  
  Open a terminal in the project directory.
  Start a local server with Python 3:
  
        bash
        python3 -m http.server 8000
  Access the app in your browser at http://localhost:8000/index.html.
