let name = 'bab';
console.log(`hi ${name}`);

let sentence = `this is something.
    something something  something.
        something something something.
                something something something.`

console.log(sentence)

function getReasonCount() {return 2;}

let interp = `Give me ${ (getReasonCount() == 1) ? 'one good reason' : 'a few good reasons' } to try this.`;

console.log(interp);