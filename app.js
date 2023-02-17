// /////////////Классы в JS//////////
// //Класс - описание характеристик
// ////Инициализация класса
// class Movie{
//     //constructor - то специальный метод, служащий для создания и инициализации объектов
    
//     constructor(name,genre,duration){
                                                                                                 
//         this.name = name,
//         this.genre = genre,
//         this.duration = duration

//     }
//     fullInfo (){
//         console.log(`Movie title: ${this.name}; Genre: ${this.genre}; Duration: ${this.duration} hours `)
//     }
    

// }
// /////////////////Наследование Класса 
// class Film  extends Movie{
//     constructor(name,genre,duration){
//         super(name,genre,duration)
//     }
//     fullInfo(){
//         super.fullInfo()
//         console.log(5)
//     }
// }



// ///////////////////////////Примеры
// const crimeNovel = new Movie ('Crime Novel', 'Crime', 2.24)
// console.log(crimeNovel)
// const girlsJazz = new Movie ('Only girls in jazz', "Comedy", 2.12)
// console.log(girlsJazz)
// const spell = new Film('Spell','Horror',2.1)
// console.log(spell)
// spell.fullInfo()

// //////////////////////Инкапсуляция 
// class Car {
//     #constPrice //нужно объявить закрытое свойство, используя в начале его имени символ '#'
//     constructor(name,color,constPrice){
//         this.name = name,
//         this.color= color,
//         this.#constPrice = constPrice

//     }
//     price(){
//         console.log(`The actual cost per car is: ${this.#constPrice}`)
//     }
// }

// const bmw = new  Car("BMW","black",15000)
// const mazda = new Car("Mazda","white",10000)
// console.log(bmw.constPrice)


////////////////////Полиморфизм

// class Human {
//     constructor(name){
//         this.name=name
//     }
//     say(){
//         console.log('Hello')
//     }
// }

// class Men extends Human("Mike"){
//     constructor(name){
//         super(name)
//     }
//     say(){
//         console.log("Hello my name is "+ this.name)
//     }
// }
//////////////////////////////////////////////////////
////29.12

// const cars = [
//     {name:'Toyota', year:2020,type: "Sedan",engine:'diesel'},
//     {name:'Mazda', year:2022,type: "Hatchback",engine:'petrol'},
//     {name:'Nissan', year:2021,type: "Sedan", engine:'diesel'},
//     {name:'Mercedes', year:2019,type: "Jeep",engine:'petrol'},
//     {name:'BMW', year:2018,type: "Hatchback",engine:'diesel'},
// ]
// function sortCars(event)                                                                                                 {
//     return (a, b) => a[event] > b[event] ? 1 : -1;
//   }
// let filterCar  = cars.sort(sortCars('year'))

// console.log(filterCar)


// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     run(){}
// }

// class Turtle extends Animal{
//     constructor(name){
//         super(name)
//     }
//     run(){
//         console.log(`Turtle runs slowly`)
//     }
// }
//  class Cheetah extends Animal{
//     constructor(name){
//         super(name)
//     }
//     run(){
//         console.log(`Cheetah runs fast`)
//     }
//  }

//  const turtle = new Turtle("Donatello")
//  turtle.run()
//  const cheetah = new Cheetah("Cheetos")
//  cheetah.run()


