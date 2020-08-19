let ocar = {
    make: 'bmw',
    model: 'asd',
    year: 2010
};

let ncar = Object.create(ocar);

console.log(ncar.make);
ncar.make = 'audi';
console.log(ncar.make);
console.log(ncar.whatever);

console.log(Object.getPrototypeOf(ncar));

let myProto = Object.getPrototypeOf(ncar);
console.log((myProto.make));

ocar.doors = 4;
console.log(ncar.doors);

console.log(ocar.hasOwnProperty('doors'));
console.log(ncar.hasOwnProperty('doors'));