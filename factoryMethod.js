// // Фабричный метод — это порождающий паттерн проектирования, 
// // который определяет общий интерфейс для создания объектов 
// // в суперклассе, позволяя подклассам изменять тип создаваемых объектов.

// //цель - создание класса , котрый в свою очередь будет создавать обьекты на основани входных данных
// //для создание множества обнотипных обьектов


// class MazdaFactory{
//     create(type){
//         if(type==='CX-4'){
//             return new Mazda(type,15000,280)
//         }
//         if(type==='CX-5'){
//             return new Mazda(type,16000,300)
//         }
//         if(type==='CX-9'){
//             return new Mazda(type,19000,330)
//         }
//     }
// }

// class Mazda{
//     constructor(type,price,speed){
//         this.type=type,
//         this.price=price,
//         this.speed=speed
//     }
// }

// const factory = new MazdaFactory();
// const cx4 = factory.create('CX-4')
// const cx5 = factory.create('CX-5')    
// const cx9 = factory.create('CX-9')                               
// console.log(cx4)
// console.log(cx5)
// console.log(cx9)