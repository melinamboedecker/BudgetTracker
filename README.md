# BudgetTracker
App to track expensesa and deposits and ability to enter transactions when offline.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
## Description: 
This is an application that you can use to keep track of your budget.  You can enter individual named transactions to add or subtract money from your balance. This app uses indexedDB to store data while you are offline and then when you are connected again it will update your database. This application uses Node.js, an Express server, indexedDB, and Mongoose. You can install and run on a local server, or use the deployed version.     
## Table of Contents: 
* [Installation](#installation)
* [Usage](#usage) 
* [License](#license) 
* [Contributing](#contributing) 
* [Questions](#questions) 
## Installation: 
[Click here for deployed app](https://)   
   
Or to run locally:

* You will need to have Node.js and MongoDB installed. 
* After cloning the repo, run ```npm install``` in your bash terminal to install the dependencies.
* Be sure to log into mongod. 
* Run ```npm start``` to initialize the server on your local machine, then once you get the message "App is listening on PORT: 3000", go to localhost:3000 in your browser. 


 
## Usage: 
The homepage will display your total balance, a list of your individual transactions, and a grphical representation of your transactions.  To add a new transaction, enter the name and amount then click either the Add Funds button or the Subtract Funds button to update your total balance. If you are offline, your transactions will still be saved, and when you get back online and refresh the database will then be updated.  

![Screenshot](public/images/.png)


## License: 
Licensed under the [MIT](https://opensource.org/licenses/MIT) license. 
## Contributing: 
Feel free to contact me to contribute to this project. My contact information is listed below.

## Questions: 
GitHub: [melinamboedecker](https://github.com/melinamboedecker) 

If you have any additional questions, please contact me at melinamboedecker@gmail.com. 
