Sister Bar Event Register
A web-based point-of-sale (POS) application for managing event ticket sales at Sister Bar.
![Build Status](https://travis-ci.org/saberdog2005/sisterfoh.svg?branch=master)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
Overview
The Sister Bar Event Register is a web-based POS application designed for managing event ticket sales (e.g., Event Tickets and VIP tickets) at Sister Bar. It enables users to log customer transactions, track sales totals, export data to Excel, update Google Sheets, generate daily reports, and close out sales. Built with HTML, CSS, JavaScript, jQuery, and IndexedDB for local storage, it also integrates with Google Sheets for cloud syncing.
This tool is perfect for bar or event management staff looking to streamline ticket sales, monitor attendees, and keep accurate records efficiently.
Features
Transaction Management: Log sales for Event Tickets ($20) and VIP tickets ($50), capturing customer names, quantities, totals, and cash received.

Real-Time Updates: Display a transaction log with timestamps, customer names, items, totals, and attendee counts.

Export to Excel: Export transaction data to an Excel file for offline analysis.

Google Sheets Integration: Sync transaction data to a Google Spreadsheet (requires Google API credentials).

Daily Reports: Generate HTML reports summarizing interactions and transactions by day.

Sales Closeout: Summarize and reset daily sales, providing totals for sales, cash, attendees, and unique customers.

Local Storage: Utilize IndexedDB to store transactions, interactions, and logs locally.

Responsive Design: Offer a mobile-friendly interface with a clean, modern UI.

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

