class CoffeBuilder {
    addDoubleEspresso(espresso) {
        this.espresso = espresso;
        return this;
    }
    addMilk(milk) {
        this.milk = milk;
        return this;
    }
    addWater(water) {
        this.water = water;
        return this;
    }
    addEspresso(doubleEspresso) {
        this.doubleEspresso = doubleEspresso;
        return this;
    }
    addCream(cream) {
        this.cream = cream;
        return this;
    }
    addSyrop(syrop) {
        this.syrop = syrop;
        return this;
    }
    buildCoffe() {
        return new CoffeBuilder();
    }
}
const coffe_1 = new CoffeBuilder();
coffe_1.addEspresso(true).addDoubleEspresso(true).addWater(true);
console.log(coffe_1);
const coffe_2 = new CoffeBuilder();
//# sourceMappingURL=builder-1.js.map