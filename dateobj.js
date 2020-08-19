let today = new Date();
let bob = new Date('December 7, 1969 07:01:23');
//let bob = new Date(1969, 11, 6);
//let bob = new Date(1969, 6, 7, 7, 1, 23)

var timesince = today - bob;
console.log(timesince);

console.log(bob.getDate());
console.log(bob.getTime());