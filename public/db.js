let db;
let budgetVersion;

//create new db request
const request = indexedDB.open('BudgetDB', budgetVersion || 21);

request.onupgradeneeded = function (e) {
    console.log('Upgrade needed in IndexDB');

    const { oldVersion } = e;
    const newVersion = e.newVersion || db.version;

    console.log(`DB Updated from version ${oldVersion} to ${newVersion}`);

    db = e.target.result;

    if (db.objectStoreNames.length  === 0) {
        db.createObjectStore('BudgetStore', { autoIncrement: true });
    }
};

request.onerror = function(e) {
    console.log(`Woops! ${e.target.errorCode}`);
};

function checkDatabase() {
    console.log('In checkDatabase fn');

    //open a transaction on BudgetStore db
    let transaction = db.transaction(['BudgetStore'], 'readwrite');

    const store = transaction.objectStore('BudgetStore');

    //get all records from the store
    const getAll = store.getAll();

    //if request worked
    getAll.onsuccess = function () {
        //if items are in the store, bulk add them when back online
        if (getAll.result.length > 0) {
            console.log('%%%%%%%%%%%%%%%%%%%%%5')
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((res) => {
                    //if response not empty
                    if (res.length !== 0) {
                        //open another transaction
                        transaction = db.transaction(['BudgetStore'], 'readwrite');

                        //assign to new variable
                        const currentStore = transaction.objectStore('BudgetStore');

                        //clear entries as bulk add worked
                        currentStore.clear();
                        console.log('Clearing Store');
                    }
                });
        }
    };
};

request.onsuccess = function(e) {
    console.log('success');
    db = e.target.result;

    //check if db is online
    if(navigator.onLine) {
        console.log('Backend online!');
        checkDatabase();
    }
};

const saveRecord = (record) => {
    console.log('Save record fn');
    //create transaction in BudgetStore db 
    const transaction = db.transaction(['BudgetStore'], 'readwrite');

    const store = transaction.objectStore('BudgetStore');

    //add record to store 
    store.add(record);
};


//add listener to see when app gets back online
window.addEventListener('online', checkDatabase);