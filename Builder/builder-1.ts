

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
   buildCoffe():CoffeBuilder{
    return new CoffeBuilder()
   }

}
const coffe = new CoffeBuilder().addDoubleEspresso(true).addWater(true)
