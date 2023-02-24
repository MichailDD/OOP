// // // class Apple {
// // //     sort:string
// // //     constructor(sort:string){
// // //         this.sort=sort
// // //     }
// // // }
// // // class Apple2  extends Apple{
// // //     public color:string
// // //     constructor(sort:string,color:string){
// // //         super(sort)
// // //         this.color=color
// // //     }
// // // }
// // // class Apple3 extends Apple2{
// // //     public size:number
// // //     constructor(size,sort,color){
// // //         super(sort,color)
// // //         this.size =size
// // //     }
// // // }
// // interface IApple{
// //     sort:string,
// //     color:string
// //     getJuice:()=>string
// //     id:number
// // }
// // class Apple implements IApple   {
// //     public sort:string
// //     public color:string
// //     private _id:number
// //     constructor(sort:string,color:string,id:number){
// //         this.color=color,
// //         this.sort = sort
// //         this._id=id
// //     }
// //     getJuice():string{
// //        return this.color+this.sort
// //     }
// //     get id(){
// //         return this._id
// //     }
// //     set id(value){
// //         this._id=value
// //     }
// // }
// // const apple = new Apple('red','fuji',5)
// // apple.getJuice()
// // apple.id=5
// // interface IPreson{
// //     name:string,
// //     getInfo:()=>string
// // }
// // class Person implements IPreson{
// //     public name:string
// //     constructor(name:string){
// //         this.name=name
// //     }
// //     getInfo(){
// //         return `Привет я человек и меня зовут ${this.name}`
// //     }
// // }
// // class Men extends Person{
// //     getInfo() {
// //         let messege 
// //         return  messege
// //     }
// // }
// // const men:Men = new Men ('Mike')
// // const person:Person = new Person('Oleg')
// // interface IApple{
// //     color:string
// //     getJuice:()=> string
// // }
// // class Apple implements IApple{
// //    public color: string
// //     constructor(color:string){
// //         this.color=color
// //     }
// //     getJuice():string{
// //         return `Color juice ${this.color}`
// //     }
// // }
// // const apple1: Apple = new Apple('red')
// // apple1.getJuice()
// // function addApple(apple1:Apple,apple2:Apple):Apple{
// //     const apple3 = new Apple('green')
// //     return apple3
// // }
// // class Potato{
// //     public sort:string
// //     private _id:number
// //     constructor(sort:string){
// //         this.sort = sort
// //     }
// //     get id(){
// //     return this._id
// //     }
// //     set id(value){
// //         this._id=value
// //     }
// // }
// // const app = new Potato('')
// // interface User{
// //     name:string
// //     surname:string
// //     city:string
// // }
// // const user:User={
// //     name:'Mike',
// //     surname:"Derevyanko",
// //     city:'Odessa'
// // }
// // function getInfo(userEntity:User):string{
// //     return (`${userEntity.surname} ${userEntity.name} ${user.city}`)
// // }
// // getInfo(user)
// // console.log(getInfo(user))
// // interface WeaponBehavior{
// //     useWeapon():void
// // }
// // class SwordBehavior implements WeaponBehavior{
// //     useWeapon(): void {
// //         console.log(`Удар мечом `)
// //     }
// // }
// // class BowAndArrowBehavior implements WeaponBehavior{
// //     useWeapon(): void {
// //         console.log(` Выстрел из лука`)
// //     }
// // }
// // class KnifeBehavior implements WeaponBehavior{
// //     useWeapon(): void {
// //         console.log(`Удар ножом`)
// //     }
// // }
// // class AxeBehavior implements WeaponBehavior{
// //     useWeapon(): void {
// //         console.log(`Удар топором`)
// //     }
// // }
// // abstract class Character implements WeaponBehavior{
// //    abstract fight():WeaponBehavior
// //     useWeapon(): WeaponBehavior {
// //         return this.fight()
// //     }
// // }
// // class Troll extends Character{
// // fight(): WeaponBehavior {
// //         return new KnifeBehavior()
// // }
// // }
// // const troll_1 = new Troll().fight()
// // troll_1.useWeapon()
// interface Employee {
//     doWork():void
// }
// class Designer implements Employee{
//     doWork(): void {
//         console.log(`Designer`)
//     }
// }
// class Programmer implements Employee{
//     doWork(): void {
//         console.log(`Programmer`)
//     }
// }
// abstract class Company{
//     abstract getEmpl():Employee[]
//     create():void{
//         let empl = this.getEmpl()
//         empl.forEach(element => {
//             element.doWork()
//         });
//     }
// }
// class Concret extends Company{
//     getEmpl(): [Employee, Employee,Employee] {
//         return [
//             new Programmer,new Designer, new Designer
//         ]
//     }
// }
// const hr1 = new Concret()
// hr1.create()
//# sourceMappingURL=app1.js.map