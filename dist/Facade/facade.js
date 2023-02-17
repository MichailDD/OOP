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
// client.runShape()
//# sourceMappingURL=facade.js.map