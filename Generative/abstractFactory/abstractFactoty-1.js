"use strict";
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
class BMWSedan {
    BMWSedan() {
        return ` New BMW Sedan`;
    }
}
class BMWCoupe {
    BMWCoupe() {
        return ` New BMW Coupe`;
    }
}
class MazdaSedan {
    MazdaSedan() {
        return `New Mazda Sedan `;
    }
}
class MazdaCoupe {
    MazdaCoupe() {
        return ` New Mazda Coupe`;
    }
}
class BMWFactory {
    createSedan() {
        return new BMWSedan();
    }
    creatrCoupe() {
        return new BMWCoupe();
    }
}
class MazdaFactory {
    createSedan() {
        return new MazdaSedan();
    }
    creatrCoupe() {
        return new MazdaCoupe();
    }
}
let bmwType = new BMWFactory();
let bmwCoupe = bmwType.creatrCoupe();
bmwCoupe.BMWCoupe();
