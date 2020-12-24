# 150Birds 
> Candidate Test

### Folder Structure
```
|--src
    |--components
        |--core
            |--BillingPayment.js
            |--Console.js
            |--Invoice.js
            |--SideMenu.js
            |--Transactions.js
        |--pages
            |--SettingsPage.js
        |--sitewide
            |--Navbar.js
            |--NavItems.js
    |--DATA
        |--invoiceData.js
        |--transactionData.js
    |--hooks
        |--useToggle.js
    |--App.js
```

### Tech Stack
- React 17.0.1
- React Hooks
- React Router
- Styled Components 5.2.1
- axios 0.21.1
  
### Setup
- Fork the git repository and install the essential node packages using this command:
```
$ npm install
```

### API Call
This app uses useEffect to execute an asynchronous function and Axios to make an HTTP request. Currently, data is dynamically pulled from a local file. To use an API to retrieve data, insert the link in these locations:
- For Transactions:
```src > components > core > Transaction.js > line 89```
- For Invoices:
```src > components > core > Invoice.js > line 65```

### :pushpin: vinces.gerardo@gmail.com | www.davincescode.com
