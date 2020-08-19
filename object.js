//create object
let car = {
    make: 'bmw',
    model: 'asdas',
    year: 2010,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model)
    }
}

car.printDescription();
console.log(car.year);

//console.log(car['year'])
//console.log(car[1])

//add to object
var carTwo = {};
carTwo.whatever = 'mas'
console.log(carTwo.whatever);

var a = {
    myProperty: {b: "hi" }
}
console.log(a.myProperty.b);

var c = {
    myProperty: [
        {d: "this"}, 
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'},
    ],
    
}

console.log(c.myProperty.d)