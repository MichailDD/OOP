// //Определяем абстрактный класс BMW и два его подкласса — X6 и X5
// // для конкретных типов транспортных средств:
// abstract class BMW {
//     abstract run():void;
// }

// class X5 extends BMW{
//     run(): void {
//         console.log("New BMW X5")
//     }
// }

// class X6 extends BMW{
//     run(): void {
//         console.log("New BMW X6")
//     }
// }
// //определяем класс BMWFactory для представления завода по производству автомобилей. 
// //Абстрактный класс содержит абстрактный метод produceBMW, который является фабричным методом:
// abstract class BMWFactory{
//     abstract produceBMW():BMW;
// }
// // На основе BMWFactory определяются фабричные классыX5Factory и X6Factory
// // для производства моделей автомобилей X5 и X6
// class X5Factory extends BMWFactory{
//     produceBMW(): BMW {
//         return new X5()
//     }
// }
// class X6Factory extends BMWFactory{
//     produceBMW(): BMW {
//         return new X6()
//     }
// }
// const x5 = new X5Factory()
// const x6 =new X6Factory()
// const carX5 = x5.produceBMW()
// const carX6 = x6.produceBMW();
// console.log(carX6)
// console.log(carX5)