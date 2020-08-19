/* DONT DO THESE
var a = "i am at global scope";

var myFunction = function() {
    console.log('me too')
} 
*/

function one() {
    return 'one';
}
let value = one
console.log(value);
console.log(typeof value)
console.log(value());
console.log(one());
console.log(typeof one);

function two() {
    return function() {
        console.log('two');
    }
}
let myFunction =  two();
myFunction();

function three() {
    return function() {
        return 'three';
    }
}

console.log(three()())