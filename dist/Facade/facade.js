// interface Shape{
//     run():void
// }
// class Circle implements Shape{
//     run(): void {
//         console.log('new Circle')
//     }
// }
// class Rectangle implements Shape{
//     run(): void {
//         console.log("new Rectangle")
//     }
// }
// class ShapeFacade{
//     private circle:Shape
//     private rectangle:Shape
//     constructor(){
//         this.circle = new Circle()
//         this.rectangle = new Rectangle()
//     }
//     public runCircle():void{
//         this.circle.run()
//     }
//     public runRectangle():void{
//         this.rectangle.run()
//     }
// }
// class Client {
//     private shapeFacade:ShapeFacade
//     constructor(){
//         this.shapeFacade= new ShapeFacade()
//     }
//     runShape(){
//         this.shapeFacade.runCircle()
//         this.shapeFacade.runRectangle()
//     }
// }
// const client =  new Client()
// const rectangle = client.runShape()
class WaterHeating {
    run() {
        return ` Нагреваю воду`;
    }
}
class GrindGrain {
    run() {
        return ` Что делают зерна кофе перед смертью?
                 Они молятся`;
    }
}
class MakingCoffee {
    run() {
        return `Завариваю кофе`;
    }
}
class ClickButton {
    waterHeating() {
        return new WaterHeating();
    }
    grindGrain() {
        return new GrindGrain();
    }
    makingCoffee() {
        return new MakingCoffee();
    }
}
class CoffeeMachineFacade {
    constructor(button) {
        this.button = button;
    }
    click() {
        const ff = this.button.waterHeating();
        let qq = this.button.grindGrain();
        let rr = this.button.makingCoffee();
        ff.run();
        qq.run();
        rr.run();
    }
}
const button = new CoffeeMachineFacade(new ClickButton());
console.log(button.click());
//# sourceMappingURL=facade.js.map