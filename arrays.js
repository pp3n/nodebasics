//Declaring array
var numbers = ['Pass', 96, 97, 98, 99];

//Printing array
console.log(numbers);

//Printing a paticular index
console.log(numbers[2]);
console.log(numbers[0]);

//Pushing an entry to the end of the array
numbers.push('Fail');
numbers.unshift('grade');
var number = numbers.pop();
console.log(numbers);
console.log(number);
console.log(numbers.length);

//Using for loop to print all numbers in the array
for (var i = 0; i < numbers.length; i++) {
    console.log("I am " + numbers[i]);
}

//Using foreach loop to print all numbers in the array
numbers.forEach(function (number) {
    console.log(number);
}, this);
