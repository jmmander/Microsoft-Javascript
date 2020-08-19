let first = "i dont care"
let second = "this is the other quote"
let third = "4,6,15,16,23,42"

console.log("something something".toUpperCase())

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(5,10);
console.log(mySlice)

let mySubstr = first.substr(5, 6);
console.log(mySubstr);

let myEndsWith = second.endsWith('quote');
console.log(myEndsWith);

let myStartsWith = second.startsWith('quote');
console.log(myStartsWith);

let myInclude = second.includes('other');
console.log(myInclude);

let myRepeat = 'Ha '.repeat(3);
console.log(myRepeat)

let myTrim = '      bloated       '
console.log(myTrim.length);
console.log(myTrim.trim().length)
