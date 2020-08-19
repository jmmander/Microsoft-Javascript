let names = ['name1', 'name2', 'name3', 'name4'];
let others = ['other1', 'other2', 'other3', 'other4'];

let lost = [4,8,15,16,23,42]
let fib = [1,1,2,3,5,8,13,21,34,55]

var combine = lost.concat(fib);
console.log(combine)

console.log(fib.join('~'));

console.log(lost.shift());
console.log(lost);

console.log(lost.unshift(1,2,3));
console.log(lost)

console.log(names)
console.log(names.reverse())

console.log(names)
console.log(names.sort())
console.log(others.indexOf('other3'))

console.log(combine);
console.log(combine.lastIndexOf(1))

var filtered = combine.filter((x) => {if (x <=15) return x;})
console.log(filtered)

names.forEach((names) => console.log(`hi ${names}`))

console.log(filtered.every((num) => num < 10));
console.log(filtered.every((num) => num <= 15));
console.log(fib.some((num) => num > 50));
console.log(fib.some((num) => num > 100));