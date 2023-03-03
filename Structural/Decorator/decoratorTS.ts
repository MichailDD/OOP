interface ICoffee{
    getConst():number
    getDescription():string
}

enum CONST{
    ESPRESSO = 45,
    CAPPUCCINO = 15,
    LATTE = 10
}

class Espresso implements ICoffee{
    getConst(): CONST.ESPRESSO {
        return CONST.ESPRESSO
    }
    getDescription(): string {
        return `Espresso`
    }
}

class Latte implements ICoffee{
   public latte:ICoffee
    constructor(latte:ICoffee){
        this.latte=latte
    }
    getConst(): number {
        return CONST.ESPRESSO + CONST.LATTE
    }
    getDescription(): string {
        return ` Latte`
    }
}
class Cappuccino implements ICoffee{
    public cappuccino:ICoffee
    constructor(cappuccino:ICoffee){
        this.cappuccino=cappuccino
    }
    getConst(): number {
        return CONST.ESPRESSO + CONST.CAPPUCCINO
    }
    getDescription(): string {
        return `Cappuccino`
    }
   
}

const espresso = new Espresso()
const latte = new Latte(espresso)
const cappuccino = new Cappuccino(espresso)
console.log(`Напиток: ${espresso.getDescription()} - Стоимость: ${espresso.getConst()}`)
console.log(`Напиток: ${latte.getDescription()} - Стоимость: ${latte.getConst()}`)
console.log(`Напиток: ${cappuccino.getDescription()} - Стоимость: ${cappuccino.getConst()}`)