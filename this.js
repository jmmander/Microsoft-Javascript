/* var car = {
    make: 'bmw',
    model: 'asdas',
    year: 2010,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription()
 */

function first() {
    return this;
}

console.log(first() === global)

function second() {
    'use strict';
    return this; 
}

console.log(second() === undefined)

let myObject = { value: "My Object" };
global.value = 'Global object';

function third(name) {
    return this.value +' ' + name;
}

console.log(third())

console.log(third.call(myObject, 'me'));

console.log(third.apply(myObject, ['me']));


function fifth() {
    console.log(this.firstName + ' ' + this.lastName)
}

let customer1 = {
    firstName: 'Bob',
    lastName: 'Taylor' ,
   print: fifth 
}

let customer2 = {
   firstName: 'Yo',
   lastName: 'peterson' ,
  print: fifth 
}

customer1.print()
customer2.print()