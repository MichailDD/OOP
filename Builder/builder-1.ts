

interface ICoffe{
    espresso:true,
    doubleEspresso:boolean
    milk:boolean,
    cream:boolean,
    water:boolean,
    syrop:boolean
}
class CoffeBuilder implements ICoffe{
   public espresso:true
   public doubleEspresso: boolean
   public milk:boolean
   public cream:boolean
   public water:boolean
   public syrop:boolean 

   addDoubleEspresso(espresso:true):CoffeBuilder{
    this.espresso = espresso
    return this
   }
   addMilk(milk:boolean):CoffeBuilder{
    this.milk=milk
    return this
   }

   addWater(water:boolean):CoffeBuilder{
    this.water=water
    return this
   }
   addEspresso(doubleEspresso:boolean):CoffeBuilder{
    this.doubleEspresso=doubleEspresso
    return this
   }
   addCream(cream:boolean):CoffeBuilder{
    this.cream=cream
    return this
   }
   addSyrop(syrop:boolean):CoffeBuilder{
    this.syrop= syrop
    return this
   }
   buildCoffe(){
    return new CoffeBuilder()
   }

}
const coffe_1 = new CoffeBuilder()
const coffe_2 = new CoffeBuilder()
const coffe_3 = new CoffeBuilder()
coffe_1.addEspresso(true).addDoubleEspresso(true).addWater(true)
coffe_2.addCream(true).addDoubleEspresso(true).addWater(true)
coffe_3.addMilk(true).addSyrop(true).addDoubleEspresso(true)
console.log(coffe_1)
console.log(coffe_2)
console.log(coffe_3)