// single responsability principle
// criar uma classe para cada regra de negócio / responsabilidade

/*class weightAdviser {
    constructor (user, weight) {
        this.user = user,
        this.weight = weight
    }

    adviser(expectedWeight) {
        if (this.weight >= expectedWeight) {            
            weightAdviser(this.user)
        }
    }
}


function weightAlert(user) {
    console.log(`${user} está acima do peso`)
}

const marcelo = new weightAdviser('Marcelo', 91)
marcelo.adviser(90)
*/



//==================================================================
//==================================================================



// Open / Closed Principle
// Se mudar alguma coisa fora, não precisa ter que mudar dentro

/*class Tax1 {
    constructor(product, price) {
        this.product = product,
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de R${this.price + tax},00`)
    }
}

class Tax2 {
    constructor(product, price) {
        this.product = product,
        this.price = price
    }
    totalPrice(tax) {
        console.log(`O valor total é de R${this.price + tax},00`)
    }
}

class Tax3 {
    constructor(product, price) {
        this.product = product,
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de R${this.price + tax},00`)
    }
}

const taxes = [
    new Tax1('snes', 10),
    new Tax2('xbox', 20),
    new Tax3('Playstation', 30)
]

function calculate(taxes) {
    taxes.forEach(tax => console.log(tax.totalPrice(5)))
}

calculate(taxes)
*/


//=====================================================================
//=====================================================================
//=====================================================================



// Liskov Substitution Principle
// A ideia principal do principio de substituição de Liskov é que qualquer função/módulo
// que interaja com uma classe tambémdeve ser capaz de interagir com todas as subclasses dessa classe.
// Isso significa essencialmente que uma classe é intercambiável com suas sbclasses.

/*class FlyingBirds {
    fly() {
        console.log('Posso Voar')
    }
}

class SwimmingBird {
    swim() {
        console.log('Posso Nadar')
    }
}

class Penguin extends SwimmingBird {}
class Duck extends FlyingBirds {}

function makeFlyingBirdFly(bird) {
    bird.fly()
}

function makeSwimmingbirdSwim(bird) {
    bird.swim()
}

const pato = new Duck()
const pinguim = new Penguin()

makeFlyingBirdFly(pato)
makeSwimmingbirdSwim(pinguim)
*/



//================================================================
//================================================================
//================================================================



// Interface Segregation Principle
// A ideia é segregar as interfaces e deixá-los menores.
// Pode ser aplicado mesmo não tendo interfaces no JavaScript, utilizando classes e heranças.

/*class ProductsEntity {
    constructor(name, dept) {
        this.name = name,
        this.dept = dept
    }
}

class TecProducts extends ProductsEntity {
    constructor(name, dept) {
        super(name, dept)
    }
}

class FoodProducts extends ProductsEntity {
    constructor(name, dept, valiDate) {
        super(name, dept),
        this.valiDate = valiDate
    }
}

const xbox = new TecProducts('XBox', 'Tecnologia')
const pipoca = new FoodProducts('Pipoca', 'Alimentícios', 'NOV/2023')
console.log(xbox)
console.log(pipoca)
*/


//====================================================================
//====================================================================
//====================================================================


// Dependency Inversion Principle
// Código Desacoplado

class Store {    
    constructor(brand) {
        this.paymentProcess = new PaymentProcess(brand)
    }
}

class PaymentProcess {
    constructor(brand) {
        this.brand = brand
    }

    payment() {
        console.log(`Pagou com ${this.brand}`)
    }
}

const bike = new Store(new PaymentProcess('Visa').payment())
