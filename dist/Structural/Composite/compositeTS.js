class Delivery {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
}
class GiftShop extends Delivery {
    constructor(costDelivery) {
        super();
        this.costDelivery = costDelivery;
    }
    getPrice() {
        return this.items.reduce((a, i) => a += i.getPrice(), 0 + this.costDelivery);
    }
}
class Pack extends Delivery {
    constructor(constPack) {
        super();
        this.constPack = constPack;
    }
    getPrice() {
        return this.items.reduce((a, i) => a += i.getPrice(), 0 + this.constPack);
    }
}
class Product extends Delivery {
    constructor(price) {
        super();
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
const shop = new GiftShop(1000);
shop.addItem(new Product(2001));
const pack = new Pack(500);
shop.addItem(pack);
console.log(shop.getPrice());
//# sourceMappingURL=compositeTS.js.map