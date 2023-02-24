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
    run():string
}

class WaterHeating implements IAction{
    run(): string {
        return ` Нагреваю воду`
    }
}
class GrindGrain implements IAction{
    run(): string {
        return ` Что делают зерна кофе перед смертью?
                 Они молятся`
    }
}
class MakingCoffee implements IAction{
    run(): string {
        return `Завариваю кофе`
    }
}

class ClickButton {
   
    waterHeating():WaterHeating{
        return new WaterHeating()
    }
    grindGrain():GrindGrain{
        return new GrindGrain()
    }
    makingCoffee():MakingCoffee{
        return new MakingCoffee()
    }

   
}

class CoffeeMachineFacade{
    button:ClickButton
    constructor(button:ClickButton){
        this.button=button
    }
    click(){
      this.button.waterHeating()
      this.button.grindGrain()
      this.button.makingCoffee()
        
       
        
    }
}
const button:CoffeeMachineFacade = new CoffeeMachineFacade(new ClickButton())

