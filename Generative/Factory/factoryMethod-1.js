"use strict";
class ChocolateFlakes {
    run() {
        console.log(`Chocolate flakes`);
    }
}
class VanillaFlakes {
    run() {
        console.log(`Vanilla Flakes`);
    }
}
class RegularFlakes {
    run() {
        console.log(`Regular Flakes`);
    }
}
var TypeFlakes;
(function (TypeFlakes) {
    TypeFlakes[TypeFlakes["CHOCOLATE"] = 0] = "CHOCOLATE";
    TypeFlakes[TypeFlakes["VANILLA"] = 1] = "VANILLA";
    TypeFlakes[TypeFlakes["REGULAR"] = 2] = "REGULAR";
})(TypeFlakes || (TypeFlakes = {}));
class FlakesFactory {
    create(type) {
        if (type === TypeFlakes.CHOCOLATE) {
            return new ChocolateFlakes();
        }
        if (type === TypeFlakes.VANILLA) {
            return new VanillaFlakes();
        }
        if (type === TypeFlakes.REGULAR) {
            return new RegularFlakes();
        }
        if (type === !TypeFlakes) {
            console.error(`Error`);
        }
    }
}
const factory = new FlakesFactory();
const chocolate = factory.create(TypeFlakes.CHOCOLATE);
// chocolate.run()
