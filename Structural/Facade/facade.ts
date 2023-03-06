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


interface IAction{
    run():void
}

class WaterHeating implements IAction{
    run(): void {
        console.log( ` Нагреваю воду`)
    }
}
class GrindGrain implements IAction{
    run(): void {
        console.log(` Что делают зерна кофе перед смертью?
        Они молятся`)
    }
}
class MakingCoffee implements IAction{
    run(): void {
        console.log(`Завариваю кофе`)
    }
}
class CoffeeMachineFacade{
    private waterHeating:WaterHeating
    private grindGrain:GrindGrain
    private makingCoffee:MakingCoffee
    constructor(){
        this.waterHeating = new WaterHeating()
        this.grindGrain = new GrindGrain()
        this.makingCoffee = new MakingCoffee()
    }
    public runWaterHeating():void{
        this.waterHeating.run()
    }
    public runGrindGrain():void{
        this.grindGrain.run()
    }
    public runMakingCoffee():void{
        this.makingCoffee.run()
    }
}
interface IClickButton{
    coffe:CoffeeMachineFacade
    click():void
}
class ClickButton implements IClickButton{
    public coffe:CoffeeMachineFacade
    constructor(){
        this.coffe= new CoffeeMachineFacade()
    }
    click():void{
        this.coffe.runWaterHeating()
        this.coffe.runGrindGrain()
        this.coffe.runMakingCoffee()
    }
}
 
const coffe = new ClickButton().click()























