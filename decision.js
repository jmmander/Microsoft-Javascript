var count = 6;
if (count == 4) {
    console.log('count = 4');
} else if (count > 4 ) {
    console.log('count is > 4');
} else {
    console.log('count < 4');
}

let hero = 'BATMAN'
switch (hero.toLowerCase()) {
    case 'superman':
        console.log('super strength');
        console.log('flight');
        break;
    case 'batman':
        console.log('smart');
        console.log('rich');    
        break;
    default:
    console.log('member of thing');
}

let a = 1, b = '1';
let result = (a==b) ? 'equal' : 'inequal';
console.log(result);
// console.log((a==b) ? 'equal' : 'inequal');
let result1 = (a===b) ? 'equal' : 'inequal'; //=== - includeds type 
console.log(result1);
let result2 = (a!=b) ? 'inequal' : 'equal';
console.log(result2);
let result3 = (a!==b) ? 'inequal' : 'equal';
console.log(result3);