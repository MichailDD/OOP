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
const coffe = new CoffeBuilder().addCream(true).addWater(true);
//# sourceMappingURL=builder-1.js.map