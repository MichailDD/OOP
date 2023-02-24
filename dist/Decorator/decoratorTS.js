var CONST;
(function (CONST) {
    CONST[CONST["ESPRESSO"] = 45] = "ESPRESSO";
    CONST[CONST["CAPPUCCINO"] = 15] = "CAPPUCCINO";
    CONST[CONST["LATTE"] = 10] = "LATTE";
})(CONST || (CONST = {}));
class Espresso {
    getConst() {
        return CONST.ESPRESSO;
    }
    getDescription() {
        return `Espresso`;
    }
}
class Latte {
    constructor(latte) {
        this.latte = latte;
    }
    getConst() {
        return CONST.ESPRESSO + CONST.LATTE;
    }
    getDescription() {
        return ` Latte`;
    }
}
class Cappuccino {
    constructor(cappuccino) {
        this.cappuccino = cappuccino;
    }
    getConst() {
        return CONST.ESPRESSO + CONST.CAPPUCCINO;
    }
    getDescription() {
        return `Cappuccino`;
    }
}
const espresso = new Espresso();
const latte = new Latte(espresso);
const cappuccino = new Cappuccino(espresso);
console.log(`Напиток: ${espresso.getDescription()} - Стоимость: ${espresso.getConst()}`);
console.log(`Напиток: ${latte.getDescription()} - Стоимость: ${latte.getConst()}`);
console.log(`Напиток: ${cappuccino.getDescription()} - Стоимость: ${cappuccino.getConst()}`);
//# sourceMappingURL=decoratorTS.js.map