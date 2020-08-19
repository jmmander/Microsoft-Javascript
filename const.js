let car = {
    make: 'bmw',
    model: 'asd',
    year: 2010
};

function Car(make, model, year) {
    this.make = make;
    this.model = model
    this.year = year;
}

let myCar = new Car('bmw', 'asd', 2010);

console.log(myCar);

function MyFunction() {
    console.log('i am a function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction);

console.log(myFunction());