//Defining a variable
var x = false;
//Definition of toggleBoolean function.
function toggleBoolean(x) {
    if (typeof (x) === 'boolean') {
        console.log(!x);
    } else {
        console.log('xour variable ' + x + ' is not boolean, please trx again');
    }
}
toggleBoolean(x);
