////Task 1
const user = {
    name:'Gorxmaz',
    age:20,
    greet:function(){
        console.log(`Меня зовут ${this.name},мне ${this.age} лет  `)
    }
}
user.greet()

///Task 2
const rectangle = {
    width:5,
    height:6,
    getArea:function(){
        const result = this.width * this.height
        console.log('Площадь прямоугольника равна:', result)
    }
}
rectangle.getArea()

///Task 3
const game = {
    score:5,
    level:3,
    increaseScore:function(){
        this.score+=1
    },
    increaseLevel:function(){
       this.level+=1
    }
}
game.increaseScore()
game.increaseLevel()
console.log('score',game.score)
console.log('level',game.level)

////Task 4
const user1 = {
    name:'Gorxmaz',
    age:20,
    sayName:function(){
        console.log(`Меня зовут ${this,this.name}!`)
    }
}
user1.sayName()

////Task 5
const counter = {
    value:2,
    increase:function(){
        this.value+=1
    },
    dicrease:function(){
        this.value-=1
    }
}
counter.increase()
console.log('Увеличение значения',counter.value)
counter.dicrease()
console.log('Уменьшение значения',counter.value)

////Task 6
const product = {
    name:'apples',
    price:300,
    getDiscountedPrice:function(discount){
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
    listMembers: function() {
        console.log(`Участники команды "${this.name}":`);
        console.log(this.members.join());
    }
};
team.listMembers();