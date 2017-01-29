//Greet use, if name undefined, print hello World, else hello name!
//var name = undefined

function greetUser(name) {
    if (typeof name != 'undefined') {
        console.log('Hello' + ' ' + name + '!');
    } else {
        console.log('Hello World');
    }
}
greetUser('name');
greetUser();