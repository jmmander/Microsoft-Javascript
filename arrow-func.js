let hi = () => { console.log('hi');}
hi();

let hey = (name) => { console.log(`hey ${name}`);};
hey('bob')


let add = (a, b) => {return a + b};
console.log(add(7,3));


let names = ['asd', 'dfg', 'ghj', 'jkl'];
names.map((name) => { console.log(`hi ${name}!`)} )

let names1 = ['asd', 'dfg', 'ghj', 'jkl'];
let i = 0;
names1.map((name) => { i++, console.log(`hi ${name} ${i}!`)} )

let names2 = ['asd', 'dfg', 'ghj', 'jkl'];
var transformed = names2.map((name) => { return (`hi ${name}!`)} );
console.log(transformed)