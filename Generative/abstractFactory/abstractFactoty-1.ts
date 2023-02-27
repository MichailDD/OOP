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





//////////////////////////////////////////////////////////////

interface Sedan{}
interface Coupe{}

interface CarFactory{ 
    createSedan:()=>Sedan
    creatrCoupe:()=>Coupe
}

class BMWSedan implements Sedan{
    BMWSedan():Sedan{
        return ` New BMW Sedan`
    }
}
class BMWCoupe implements Coupe{
    BMWCoupe():Coupe{
        return ` New BMW Coupe`
    }
}
class MazdaSedan implements Sedan{
    MazdaSedan():Sedan{
        return `New Mazda Sedan `
    }
}
class MazdaCoupe implements Coupe{
    MazdaCoupe():Coupe{
        return ` New Mazda Coupe`
    }
}

class BMWFactory implements CarFactory{ 
    createSedan(){
        return new BMWSedan()
    }
    creatrCoupe(){
        return new BMWCoupe()
    }
}

class MazdaFactory implements CarFactory{
    createSedan(){
        return new MazdaSedan()
    }
    creatrCoupe(){
        return new MazdaCoupe()
    }
 }

let bmwType = new BMWFactory()
let bmwCoupe = bmwType.creatrCoupe()
bmwCoupe.BMWCoupe()




