# Sister Bar Event Register

## Overview

The **Sister Bar Event Register** is a web-based point-of-sale (POS) application designed for managing event ticket sales (e.g., Event Tickets and VIP tickets) at Sister Bar. It allows users to log customer transactions, track sales totals, export data to Excel, update Google Sheets, generate daily reports, and close out sales. The application uses HTML, CSS, JavaScript, jQuery, IndexedDB for local storage, and integrates with Google Sheets for cloud syncing.

This project is ideal for bar or event management staff to streamline ticket sales, track attendees, and maintain records efficiently.

## Features

- **Transaction Management**: Log sales for Event Tickets ($20) and VIP tickets ($50), including customer names, quantities, totals, and cash received.
- **Real-Time Updates**: Display a transaction log with timestamps, customer names, items, totals, and attendee counts.
- **Export to Excel**: Export transaction data to an Excel file for offline analysis.
- **Google Sheets Integration**: Sync transaction data to a Google Spreadsheet (requires Google API credentials).
- **Daily Reports**: Generate HTML reports summarizing interactions and transactions by day.
- **Sales Closeout**: Summarize and reset daily sales with totals for sales, cash, attendees, and unique customers.
- **Local Storage**: Use IndexedDB to store transactions, interactions, and logs locally.
- **Responsive Design**: Mobile-friendly interface with a clean, modern UI.

## Prerequisites

To run this application, ensure you have the following:

- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local web server (e.g., Python’s `http.server` or Node.js `http-server`) to serve the file (required for Google API integration).
- Internet connection (for loading external scripts like jQuery, XLSX, and Google APIs).
- Optional: Google Cloud credentials for Google Sheets integration (Client ID and API Key).

## Installation

1. **Clone or Download the Repository**:
   - Save the `register.html` file to a local directory (e.g., `SisterBarEventRegister`).

2. **Set Up a Local Web Server**:
   - Open a terminal in the directory containing `register.html`.
   - Use Python 3 to start a local server:
     ```bash
     python3 -m http.server 8000
     ```
   - Access the app in your browser at `http://localhost:8000/register.html`.

3. **Configure Google API Credentials**:
   - Sign up for Google Cloud Console (https://console.cloud.google.com/).
   - Create a project and enable the Google Sheets API.
   - Generate an API Key and OAuth 2.0 Client ID:
     - Go to APIs & Services > Credentials.
     - Create an API Key for `API_KEY`.
     - Create an OAuth 2.0 Client ID with type "Web application", and add `http://localhost:8000` to "Authorized JavaScript origins".
   - Replace `YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com` and `YOUR_API_KEY` in the `register.html` script with your actual credentials.

## Usage

1. **Launch the Application**:
   - Open `http://localhost:8000/register.html` in your browser.

2. **Log a Sale**:
   - Enter a customer name in the "Customer Name" field.
   - Click "+" or "-" buttons to add or remove Event Tickets ($20) or VIP tickets ($50).
   - Enter the cash received in the "Cash Received" field.
   - Click "Log Cash Sale" to record the transaction. The transaction will appear in the "Transaction Log" table.

3. **Export Transactions**:
   - Click "Export to Excel" to download a `.xlsx` file containing all transactions, including totals.

4. **Sync with Google Sheets**:
   - Ensure Google API credentials are configured.
   - After logging sales, click "Export to Excel," and the data will also sync to the specified Google Spreadsheet (ID: `1J7rCLXuCOgdtUGE_37dysfx0GFS5h1t8cFvS4_vQDtc`).

5. **Generate Daily Report**:
   - Click "Debug Log & Daily Report" to download an HTML file (`daily.html`) summarizing daily interactions and transactions.

6. **Close Out Sales**:
   - Click "Close Out Sales" to reset transactions, displaying totals for sales, cash, attendees, and unique customers.

## Dependencies

- **jQuery (3.7.1)**: For DOM manipulation and event handling (loaded from `cdnjs.cloudflare.com`).
- **XLSX (0.18.5)**: For Excel file generation (loaded from `cdnjs.cloudflare.com` with a fallback to `cdn.jsdelivr.net`).
- **Google APIs**: For Google Sheets integration (loaded from `apis.google.com`).
- **IndexedDB**: For local storage of transactions and logs (browser-native).

## Development Notes

- **CSS**: Uses custom variables (`--primary`, `--success`, `--danger`, `--spacing`) for a responsive, modern design.
- **JavaScript**: Implements classes (`DatabaseManager`, `StateManager`, `Transaction`) for state management and IndexedDB storage.
- **Error Handling**: Includes user-friendly error messages via `showError` for network issues, API failures, or invalid inputs.
- **Browser Compatibility**: Designed for modern browsers with fallback mechanisms for script loading (e.g., jQuery, XLSX).

## Troubleshooting

- **Google API Errors**: If you encounter "Invalid cookiePolicy" or CORS errors, ensure you’re running the app on a web server (not `file://`) and have configured Google Cloud credentials correctly.
- **Script Loading Issues**: Check your internet connection if jQuery, XLSX, or Google APIs fail to load. Use the console (F12) to debug.
- **Local Storage**: Ensure your browser supports IndexedDB (most modern browsers do). Clear browser data if issues persist.

## Contributing

This project is open for contributions! If you’d like to improve the code, add features, or fix bugs:

1. Fork the repository or create a new branch.
2. Make changes to `register.html` or related assets (e.g., CSS, JavaScript).
3. Test locally using the steps above.
4. Submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, contact the project maintainer:
- **Email**: [your-email@example.com] (replace with your contact info)
- **GitHub**: [your-github-username] (replace with your GitHub profile)

---

### Notes:
- Replace placeholders like `YOUR_GOOGLE_CLIENT_ID`, `YOUR_API_KEY`, and contact information with actual values.
- If you have a GitHub repository or specific project structure, you can add a link to the repository in the README.
- Ensure you include a `LICENSE` file (or reference one) if you plan to open-source the project.

Save this as `README.md` in the same directory as `register.html` for easy access and documentation. Let me know if you’d like to adjust the content, add more sections, or include specific details!
