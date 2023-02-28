class SwordBehavior {
    useWeapon() {
        console.log(`Удар мечом `);
    }
}
class BowAndArrowBehavior {
    useWeapon() {
        console.log(` Выстрел из лука`);
    }
}
class KnifeBehavior {
    useWeapon() {
        console.log(`Удар ножом`);
    }
}
class AxeBehavior {
    useWeapon() {
        console.log(`Удар топором`);
    }
}
class Character {
    useWeapon() {
        return this.fight();
    }
}
class Troll extends Character {
    fight() {
        return new AxeBehavior();
    }
}
const troll = new Troll();
const troleUseAxe = troll.fight();
troleUseAxe.useWeapon();
//# sourceMappingURL=strategyTS.js.map