abstract class Delivery{
    items:Delivery[]=[]
    addItem(item:Delivery){
        this.items.push(item)
    }
    abstract getPrice():number
}

class GiftShop extends Delivery {
    constructor(public costDelivery:number){
        super()
    }
    getPrice():number {
         return this.items.reduce((a:number,i:Delivery)=> a+=i.getPrice(),0+this.costDelivery)
    }
}

class Pack extends Delivery{
    getPrice(): number {
        return this.items.reduce((a:number,i:Delivery)=> a+=i.getPrice(),0)
    }
    
}
class Product extends Delivery{
 
    constructor(private price:number){
        super()
    }
    getPrice(): number {
        return this.price
    }
}

const shop:GiftShop = new GiftShop(1000)
shop.addItem(new Product(2001))
const pack = new Pack()
shop.addItem(pack)

console.log(shop.getPrice())