// //////Определяем тип потолков
// class  drywallCeiling{
//     getDescription(){
//         console.log('Гипсокартоновый потолок')
//     }
// }
// class  stretchCeiling{
//     getDescription(){
//         console.log('Натяжной потолок')
//     }
// }

// //Оппределяем тип монтажников 
// class Master1{
//     getDescription(){
//         console.log('Делаем гипсокартоновые потолки')
//     }
// }
// class Master2{
//     getDescription(){
//         console.log('Делаем натяжные  потолки')
//     }
// }

// ////////Создаем абстрактные фабрики 
// class drywallCeilingFactory{
//     makeCeiling(){
//         return new drywallCeiling()
//     }
//     makeMaster(){
//         return new Master1()
//     }
// }

// class stretchCeilingFactory{
//     makeCeiling(){
//         return new stretchCeiling()
//     }
//     makeMaster(){
//         return new Master2()
//     }
// }

// drywallFactory = new drywallCeilingFactory()
// drywallcailing = drywallFactory.makeCeiling()
// master1 = drywallFactory.makeMaster()

// drywallcailing.getDescription()
// master1.getDescription()

// /////////////////////////////////////////////////


// stretchFactory = new stretchCeilingFactory()
// stretchceiling = stretchFactory.makeCeiling()
// master2 = stretchFactory.makeMaster()

// stretchceiling.getDescription()
// master2.getDescription()

