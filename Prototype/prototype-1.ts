// interface ITeslaCar{
//     model:string,
//     price:number,
//     maxSpeed:number,
//     color:string
//     produce:()=>ITeslaCar
// }

//  class Tesla implements ITeslaCar{
//     constructor(
//         public model:string,
//         public price:number,
//         public maxSpeed:number,
//         public color:string 
//     ){}
//     produce():ITeslaCar{
//         return new Tesla()
//     }
// }
// const prototypeTesla = new Tesla('S',25000,290,"Black")

// const tesla1 = prototypeTesla.produce()
// tesla1.color='Tomato'
// tesla1.price = 20000
// console.log(tesla1)