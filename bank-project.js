//Bank account project in JS.
var account = {
    balance: 0,
    account: 'ABC123'
}
//function for deposit()
function deposit(account, amount) {
    account.balance += amount;
    console.log('Your account ' + account.account + ' Has been credited with ' + amount + ' $');
}
//function for withDraw()
function withDraw(account, amount) {
    account.balance -= amount;
    console.log('Your account ' + account.account + ' Has been debited with ' + amount + ' $');
}
//function for getBalance()
function getBalance(account) {
    console.log('Your account balance is ' + account.balance + ' $');
}
deposit(account, 2500);
withDraw(account, 50)
getBalance(account);