// ////////Наследование в Type Script

// class Operator {
//     constructor(
//         public name : string,
//         public surname:string,
//         public salary: number
//     ){}
//     getFullInfo(){
//         console.log(`Name: ${this.name}, Surname: ${this.surname}, Salary${this.salary}`)
//     }
// }


// class SuperOperator extends Operator{
//     constructor(
//         public name : string,
//         public surname:string,
//         public salary: number
//     ){
//         super(name,surname,salary)////для вызова конструктора родительского класса
//     }
// }
// const operator: object = new SuperOperator("Olga","Kolobok ",34)



// /////////////// Инкапсуляция  в Type Script

// // public
// //private
// //protected
// class DataBase {
//     public port :number
//     private url :string
//     constructor(
    
//     ){
//         this.port = 5060
//         this.url = 'https://oop.com'
//     }
// }


// /////Полиморфизм = одно действие несколько реализаций

// class Animal {
//     constructor(
//         public name :string
//     ){ }
//     run(){
//     }
// }

// class Doп extends Animal{
//     constructor(
//         public name :string
//     ){
//         super(name)
//     }
//     run(): void {
//         console.log("Бег")
//     }
// const str :string = 'Hello'
 
// interface Rect {
//     readonly name:string,
//     size:{
//         widt:number,
//         height:number
//     }
//     color?:string;
// }
// const rect1 :Rect = {
//     name:'rectangle',
//     size:{
//         widt:25,
//         height:25
//     }
// }
// rect1.color = "tomato"

// interface Circle extends Rect {
//     border:string
//     getArea: () => number
// }   

// const circle : Circle= {
//     name:"circle",
//     border:'5px',
//     size:{
//         widt:20,
//         height:20
//     },
//     getArea(): number{
//         return this.size.widt * this.size.height
//     }
// }








// interface Car {
//     readonly name:string,
//     enjine:string,
//     year:number,
//     color?:string,
//     fullInfo: () => void
// }

// class BMW implements Car{
//     name: "BMW";
//     enjine:"Diesel";
//     year:2020;
//     fullInfo():void{
//         console.log(this.enjine,this.name, this.year)
//     }
// }
// const mazda : Car={
//     name: "Mazda",
//     enjine:"Diesel",
//     year:2020,
//     fullInfo():void{
//         console.log(this.enjine,this.name, this.year)
//     }
// }
// console.log(mazda)
// mazda.fullInfo()
////////////////////////////////////////////29.12
// type C = {name:string, year:number,type:string,engine:string}

// let car : [object:C,object:C,object:C,object:C,object:C,] = [
//     {name:'Toyota', year:2020,type: "Sedan",engine:'diesel'},
//     {name:'Mazda', year:2022,type: "Hatchback",engine:'petrol'},
//     {name:'Nissan', year:2021,type: "Sedan", engine:'diesel'},
//     {name:'Mercedes', year:2019,type: "Jeep",engine:'petrol'},
//     {name:'BMW', year:2018,type: "Hatchback",engine:'diesel'},
// ]

// function sortCar (event:string){
//   return (a:C,b:C) => a[event] >b[event]  ? 1 : -1;
// }

// let cars = car.sort(sortCar('name'))

// ///////////////Polymorphism

// class Animal{
//     constructor(
//         public name:string
//     ){}
//     run():void{}
// }

// class Turtle extends Animal{
//     constructor(
//         public name:string
//     ){
//         super(name)
//     }
//     run(): void {
//         console.log(`Turtle runs slowly`)
//     }
// }
// class Cheetah extends Animal{
//     constructor(
//         public name:string
//     ){
//         super(name)
//     }
//     run(): void {
//         console.log(`Cheetah runs fast`)
//     }
// }
