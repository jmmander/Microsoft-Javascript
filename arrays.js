let a = [4, 8, 15, 16, 23, 42];
let b = ['david','eddie', 'alex', 'michael', ];

console.log(a[0]);
console.log(a[1]);
console.log(a);

a[0] = 7;
console.log(a[0]);

console.log(typeof a);

let c = [4, 'alex', true];
console.log(c);

console.log(b[4]);

console.log(a.length); //gives actual number - not starting from 0

a[10] = 77;
console.log(a);
console.log(a.length);


b.push('jack'); // adds a value to end of array
console.log(b);
console.log(b.length);

b.pop(); // remove last element in array
b.pop();
b.pop();
console.log(b);
console.log(b.length);