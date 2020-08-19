/*
function sayHello() {
console.log('---------------') ;
console.log('hello');
console.log('---------------');
}

sayHello();

let a = sayHello;
a();
a();


function sayHello(name) {
console.log('---------------') ;
console.log('hello ' + name + '!');
console.log('---------------');
}
sayHello('you');
sayHello('me');
*/

function calcTax(amount) {
    let result = amount * 0.1;
    return result;
}

let tax = calcTax(100);
console.log(tax);
