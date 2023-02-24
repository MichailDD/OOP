// // class Apple {
// //     sort:string
// //     constructor(sort:string){
// //         this.sort=sort
// //     }
// // }
// // class Apple2  extends Apple{
// //     public color:string
// //     constructor(sort:string,color:string){
// //         super(sort)
// //         this.color=color
class Designer {
    doWork() {
        console.log(`Designer`);
    }
}
class Programmer {
    doWork() {
        console.log(`Programmer`);
    }
}
class Company {
    create() {
        let empl = this.getEmpl();
        empl.forEach(element => {
            element.doWork();
        });
    }
}
class Concret extends Company {
    getEmpl() {
        return [
            new Programmer, new Designer, new Designer
        ];
    }
}
const hr1 = new Concret();
hr1.create();
//# sourceMappingURL=app1.js.map