Sister Bar Event Register
A web-based point-of-sale (POS) application for managing event ticket sales at Sister Bar.
Overview
The Sister Bar Event Register is a web-based POS application designed to streamline event ticket sales management at Sister Bar. It provides an efficient solution for logging customer transactions, tracking sales totals, exporting data, syncing with Google Sheets, generating daily reports, and closing out sales. Built with HTML, CSS, JavaScript, jQuery, and IndexedDB for local storage, this tool integrates seamlessly with Google Sheets for cloud-based record keeping. Its responsive design ensures usability across devices, making it an ideal choice for bar and event management staff.
Features
Transaction Management: Record sales for Event Tickets ($20) and VIP Tickets ($50), including customer names, ticket quantities, totals, and cash received.

Real-Time Updates: Display a live transaction log with timestamps, customer details, items, totals, and attendee counts.

Export to Excel: Download transaction data as an Excel (.xlsx) file for offline analysis.

Google Sheets Integration: Sync transaction data to a Google Spreadsheet (requires Google API credentials).

Daily Reports: Generate HTML reports summarizing daily interactions and transactions.

Sales Closeout: Reset daily sales and view comprehensive totals for sales, cash, attendees, and unique customers.

Local Storage: Store transactions and logs locally using IndexedDB.

Responsive Design: Enjoy a modern, mobile-friendly interface with a clean UI.

New in Version 0.9.1
Enhanced transaction logging with additional metadata for improved tracking.

Improved error handling for Google Sheets integration.

Better UI responsiveness for mobile devices.

Fixed a bug where cash received was miscalculated in certain cases.

Added support for custom ticket types in the transaction log.

Prerequisites
To run the application, ensure you have:
A modern web browser (e.g., Chrome, Firefox, Edge).

A local web server (e.g., Python’s http.server or Node.js http-server) to serve the files (required for Google API integration).

An internet connection for loading external scripts (e.g., jQuery, XLSX, Google APIs).

Optional: Google Cloud credentials (Client ID and API Key) for Google Sheets integration.

Installation
Clone or Download the Repository:
bash

