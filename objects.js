var car = {
    make: 'Honda',
    model: 'Accord',
    engine: '3.6L',
    topSpeed: '150 mph'
};

/*delete car.model;*/
console.log(car);

function carSpec(car) {
    console.log('The car speed is' + ' ' + car.topSpeed);
}

carSpec(car);
