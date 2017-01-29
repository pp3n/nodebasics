//Defining a variable
var x = 12;
//Definition of toggleBoolean function.
function toggleBoolean(x) {
    if (x) {
        x = !x;
    }
    console.log(x);
}
//Call toggleBoolean function only if the variable is of boolean type.
if (typeof (x) === 'boolean') {
    toggleBoolean(x);
} else {
    console.log('Your variable ' + x + ' is not boolean, please try again');
}