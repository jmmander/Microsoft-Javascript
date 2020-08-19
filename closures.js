function sayHello(name) {
    return function() {
        console.log('howdy ' + name)
    }
}

let bob = sayHello('bob')
let me = sayHello('me')
let you = sayHello('you')
bob()
me()
you()