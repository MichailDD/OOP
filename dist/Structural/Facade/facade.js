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
        console.log(` Нагреваю воду`);
    }
}
class GrindGrain {
    run() {
        console.log(` Что делают зерна кофе перед смертью?
        Они молятся`);
    }
}
class MakingCoffee {
    run() {
        console.log(`Завариваю кофе`);
    }
}
class CoffeeMachineFacade {
    constructor() {
        this.waterHeating = new WaterHeating();
        this.grindGrain = new GrindGrain();
        this.makingCoffee = new MakingCoffee();
    }
    runWaterHeating() {
        this.waterHeating.run();
    }
    runGrindGrain() {
        this.grindGrain.run();
    }
    runMakingCoffee() {
        this.makingCoffee.run();
    }
}
class ClickButton {
    constructor() {
        this.coffe = new CoffeeMachineFacade();
    }
    click() {
        this.coffe.runWaterHeating();
        this.coffe.runGrindGrain();
        this.coffe.runMakingCoffee();
    }
}
const coffe = new ClickButton().click();
//# sourceMappingURL=facade.js.map