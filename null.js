let pattern = /xyz/;
let value ='this is just a test';
let result = (value.match(pattern));
console.log(result);
console.log(typeof result);

if (result ==== null) {
    console.log('no match');
}