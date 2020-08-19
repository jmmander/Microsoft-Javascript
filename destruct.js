let a, b, c, d, e;
let names = ['david', 'eddie', 'alex', 'michael', 'sammy'];

[a, b, c, e, d] = names

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

let f, g, h, i, j;
let names1 = ['david', 'eddie', 'alex', 'michael', 'sammy'];
let others;
[f, g, ...others] = names1

console.log(f)
console.log(g)
console.log(others)


let year, model;

({year, model}= {
    make: 'bmw',
    model: 'asdas',
    year: 2010,
    value: 5000
})

console.log(year)
console.log(model)