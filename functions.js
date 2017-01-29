function greetUser(name) {
    console.log('Hello' + ' ' + name + '!');
}
greetUser('Prashanth');

function multiply(a, b) {
    console.log(a * b);
}

multiply(4, 6);

function helloUser(name) {
    return 'Hello' + ' ' + name + '!'
}

var greeting = helloUser('Jim');
console.log(greeting);