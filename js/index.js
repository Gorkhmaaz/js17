////Task 1
const user = {
    name: 'Gorxmaz',
    age: 20,
    greet: function () {
        console.log(`Меня зовут ${this.name},мне ${this.age} лет  `)
    }
}
user.greet()

///Task 2
const rectangle = {
    width: 5,
    height: 6,
    getArea: function () {
        const result = this.width * this.height
        console.log('Площадь прямоугольника равна:', result)
    }
}
rectangle.getArea()

///Task 3
const game = {
    score: 5,
    level: 3,
    increaseScore: function () {
        this.score += 1
    },
    increaseLevel: function () {
        this.level += 1
    }
}
game.increaseScore()
game.increaseLevel()
console.log('score', game.score)
console.log('level', game.level)

////Task 4
const user1 = {
    name: 'Gorxmaz',
    age: 20,
    sayName: function () {
        console.log(`Меня зовут ${this, this.name}!`)
    }
}
user1.sayName()

////Task 5
const counter = {
    value: 2,
    increase: function () {
        this.value += 1
    },
    dicrease: function () {
        this.value -= 1
    }
}
counter.increase()
console.log('Увеличение значения', counter.value)
counter.dicrease()
console.log('Уменьшение значения', counter.value)

////Task 6
const product = {
    name: 'apples',
    price: 300,
    getDiscountedPrice: function (discount) {
        return this.price - (this.price * discount / 100)
    }
}
const discount = 15
const discountedPrice = product.getDiscountedPrice(discount)
console.log(`С учетом скидки в ${discount} % товар будет стоить ${discountedPrice}`)

///Task 7
const team = {
    name: "Step",
    members: ["Murtuz", "Gorxmaz", "Kamran", "Ruslan"],
    listMembers: function () {
        console.log(`Участники команды "${this.name}":`);
        console.log(this.members.join());
    }
};
team.listMembers();


///Call,Apply,bind///
///Task 1
const person = {
    sayHello: function (name) {
        console.log('Меня зовут ' + name)
    }
}
person.sayHello.call(person, 'Горхмаз')

///Task 2
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total;
}

const prices = [1, 2, 3, 4, 5];
const total = calculateTotal.apply(prices);
console.log(total);

///Task 3
function multiply(a, b) {
    return a * b
}
const double = multiply.bind(null, 2)
console.log(double(3))


///Task 4
const teacher = {
    introduce: function () {
        console.log(`Меня зовут ${this.name}, я преподаю ${this.subject}`)
    }
}

const student = {
    name: 'Gorhmaz',
    subject: 'IT Technology'
}

teacher.introduce.call(student)

///Task 5
function findMax() {
    return Math.max.apply(null, numbers)
}
const numbers = [8, 7, 15, 4, 5]
const maxNumber = findMax(numbers)
console.log(maxNumber)

///Task 6
const dog = {
    name: 'Muxtar',
    bark: function () {
        console.log(`Гав-гав, меня зовут ${this.name}`)
    }
}

function barkTwice() {
    this.bark()
    this.bark()
}

const barkTwiceSound = barkTwice.bind(dog)
barkTwiceSound()

///Task 7
function greet(name, timeOfDay) {
    let greeting;
    if (timeOfDay === 'утро') {
        greeting = 'Доброе утро!'
    } else if (timeOfDay === 'день') {
        greeting = 'Добрый день!'
    } else if (timeOfDay === 'вечер')
        greeting = 'Добрый вечер!'

    console.log(`${greeting} ${name}`)


}
greet.call(null, 'Vasya', 'утро')
greet.call(null, 'Murtuz', 'день')
greet.call(null, 'Gorhmaz', 'вечер')


///Task 8 
function calculateAverage(scores) {
    let sum = 0
    for (let i = 0; i < scores.length; i += 1) {
        sum += scores[i]
    }
    const average = sum / scores.length
    return average
}
const grades = [10, 15, 20, 45, 12]
const averageGrade = calculateAverage.apply(null, [grades])
console.log(averageGrade)

/////Task 9
const person1 = {
    name: 'John'
}
function sayName() {
    console.log(`Меня зовут ${this.name}`)
}
const sayPersonName = sayName.bind(person1)
sayPersonName()

///Task 10
function printDetails(name, age, profession) {
    console.log(`Имя: ${name}`);
    console.log(`Возраст: ${age}`);
    console.log(`Профессия: ${profession}`);
}

const details = {
    name: "Gorxmaz",
    age: 20,
    profession: "engineer"
}
printDetails.call(details,details.name,details.age,details.profession)


