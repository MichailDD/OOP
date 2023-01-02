// abstract class Car{
//     abstract run():void;
// }
// class SportCar extends Car{
//     run(): void {
//         console.log("Создаем стортивную машину")
//     }
// }
// class FamilyCar  extends Car{
//     run(): void {
//         console.log("Создаем семейную машину")
//     }
// }
// //////////Создаем класс фабрики 
// abstract class CarFactory{
//     abstract produceSportCar():SportCar;
//     abstract produceFamilyCar():FamilyCar;
// }

// ///////////определяется заводской класс  для производства типа машин

// class TypeCar extends CarFactory{
//     produceSportCar(): SportCar {
//         return new SportCar()
//     }
//     produceFamilyCar(): FamilyCar {
//         return new FamilyCar()
//     }
// }

// const typeCar = new TypeCar()
// const sportCar = typeCar.produceSportCar()
// const familyCar = typeCar.produceFamilyCar()

// sportCar.run()
// familyCar.run()