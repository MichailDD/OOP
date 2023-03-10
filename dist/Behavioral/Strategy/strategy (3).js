// class User{
//     facebookAccount:string
//     googleAccount:string
class SwordBehavior {
    useWeapon() {
        console.log(`Удар мечом`);
    }
}
class KnifeBehavior {
    useWeapon() {
        console.log(`Удач ножом `);
    }
}
class BowAndArrowBehavior {
    useWeapon() {
        console.log(`Выстрел из лука`);
    }
}
class AxeBehavior {
    useWeapon() {
        console.log(`Удар топором`);
    }
}
class Character {
    setWeapon(w) {
        this.weapon = w;
    }
}
class King extends Character {
    fight() {
        this.weapon.useWeapon();
    }
}
const king = new King();
king.setWeapon(new KnifeBehavior());
king.fight();
king.setWeapon(new AxeBehavior());
king.fight();
//# sourceMappingURL=strategy%20(3).js.map