// Create a copy of bankaccount.js
// Create a new function to create new account.
// Create a new function to get account.
var accounts = [];

//Create account function
function createAccount(account) {
    accounts.push(account);
    return account;
}

//Create get account function
function getAccount(userName) {
    var matchedAccount;
    accounts.forEach(function (account) {
        if (account.userName === userName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}
//function for deposit()
function depositAccount(account, amount) {
    account.balance += amount;
    console.log('Your account ' + account.account + ' Has been credited with ' + amount + ' $');
}
//function for withDraw()
function withDrawAccount(account, amount) {
    account.balance -= amount;
    console.log('Your account ' + account.account + ' Has been debited with ' + amount + ' $');
}
//function for getBalance()
function getBalance(account) {
    console.log('Your account balance is ' + account.balance + ' $');
}

var timAccount = createAccount({
    userName: 'Tim',
    account: 'ABC123',
    balance: 0
});

depositAccount(timAccount, 500);

getBalance(timAccount);
withDrawAccount(timAccount, 100);
getBalance(timAccount);

var existingAccount = getAccount('Tim');
getBalance(existingAccount);

createAccount({
    userName: 'Sam',
    account: 'XYZ456',
    balance: 250
});

createAccount({
    userName: 'Jenn',
    account: 'ABC456',
    balance: 175
});

console.log(accounts);

console.log(getAccount('Jenn'));