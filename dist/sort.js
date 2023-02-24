// interface Car{
//     name:string,
//     year:number,
//     type:string,
//     engine:string,
//     price:number
// }
// //
// let car :Array<Car>=[
//     {name:'Toyota', year:2020,type: "Sedan",engine:'diesel',price:15000},
//     {name:'Mazda', year:2022,type: "Hatchback",engine:'petrol',price:20000},
//     {name:'Nissan', year:2021,type: "Sedan", engine:'diesel',price:17000},
//     {name:'Mercedes', year:2019,type: "Jeep",engine:'petrol',price:12000},
// ]
// function sortBubble(arr:Array<Car>):Array<Car>{
//     for (let i:number = 0, endI = arr.length - 1; i < endI; i++) {
//         let wasSwap:boolean = false;
//         for (let j:number = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j].price < arr[j + 1].price) {
//                 let swap = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = swap;
//                 wasSwap = true;
//             }
//         }
//         if (!wasSwap) break;
//     }
//     return arr;
// }
// sortBubble(car)
// console.log(car)
//# sourceMappingURL=sort.js.map