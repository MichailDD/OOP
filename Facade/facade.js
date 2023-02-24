// // interface Shape{
// //     run():void
// // }
// // class Circle implements Shape{
// //     run(): void {
// //         console.log('new Circle')
// //     }
// // }
// // class Rectangle implements Shape{
// //     run(): void {
// //         console.log("new Rectangle")
// //     }
// // }
// // class ShapeFacade{
// //     private circle:Shape
// //     private rectangle:Shape
// //     constructor(){
// //         this.circle = new Circle()
// //         this.rectangle = new Rectangle()
// //     }
// //     public runCircle():void{
// //         this.circle.run()
// //     }
// //     public runRectangle():void{
// //         this.rectangle.run()
// //     }
// // }
// // class Client {
// //     private shapeFacade:ShapeFacade
// //     constructor(){
// //         this.shapeFacade= new ShapeFacade()
// //     }
// //     runShape(){
// //         this.shapeFacade.runCircle()
// //         this.shapeFacade.runRectangle()
// //     }
// // }
// // const client =  new Client()
// // const rectangle = client.runShape()
// var WaterHeating = /** @class */ (function () {
//     function WaterHeating() {
//     }
//     WaterHeating.prototype.run = function () {
//         console.log(" \u041D\u0430\u0433\u0440\u0435\u0432\u0430\u044E \u0432\u043E\u0434\u0443");
//     };
//     return WaterHeating;
// }());
// var GrindGrain = /** @class */ (function () {
//     function GrindGrain() {
//     }
//     GrindGrain.prototype.run = function () {
//         console.log(" \u0427\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u0437\u0435\u0440\u043D\u0430 \u043A\u043E\u0444\u0435 \u043F\u0435\u0440\u0435\u0434 \u0441\u043C\u0435\u0440\u0442\u044C\u044E?\n        \u041E\u043D\u0438 \u043C\u043E\u043B\u044F\u0442\u0441\u044F");
//     };
//     return GrindGrain;
// }());
// var MakingCoffee = /** @class */ (function () {
//     function MakingCoffee() {
//     }
//     MakingCoffee.prototype.run = function () {
//         console.log("\u0417\u0430\u0432\u0430\u0440\u0438\u0432\u0430\u044E \u043A\u043E\u0444\u0435");
//     };
//     return MakingCoffee;
// }());
// var CoffeeMachineFacade = /** @class */ (function () {
//     function CoffeeMachineFacade() {
//         this.waterHeating = new WaterHeating();
//         this.grindGrain = new GrindGrain();
//         this.makingCoffee = new MakingCoffee();
//     }
//     CoffeeMachineFacade.prototype.runWaterHeating = function () {
//         this.waterHeating.run();
//     };
//     CoffeeMachineFacade.prototype.runGrindGrain = function () {
//         this.grindGrain.run();
//     };
//     CoffeeMachineFacade.prototype.runMakingCoffee = function () {
//         this.makingCoffee.run();
//     };
//     return CoffeeMachineFacade;
// }());
// var ClickButton = /** @class */ (function () {
//     function ClickButton() {
//         this.coffe = new CoffeeMachineFacade();
//     }
//     ClickButton.prototype.click = function () {
//         this.coffe.runWaterHeating();
//         this.coffe.runGrindGrain();
//         this.coffe.runMakingCoffee();
//     };
//     return ClickButton;
// }());
// var coffe = new ClickButton().click();
