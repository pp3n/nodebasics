//Declaring array
var numbers = [100, 96, 97, 98, 99];

var totalNumber = 0;

numbers.push(99);

//foreach function adding the numbers to find total
numbers.forEach(function (number) {
    totalNumber += number;
    console.log('The current total is ' + totalNumber);
});

//computing the average and total
console.log(totalNumber);

console.log('Average of all the numbers is ' + (totalNumber / (numbers.length)));