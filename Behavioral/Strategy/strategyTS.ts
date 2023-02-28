interface WeaponBehavior{
    useWeapon():void
}

class SwordBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(`Удар мечом `)
    }
}

class BowAndArrowBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(` Выстрел из лука`)
    }
}
class KnifeBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(`Удар ножом`)
    }
}
class AxeBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(`Удар топором`)
    }
}

abstract class Character implements WeaponBehavior{
   abstract fight():WeaponBehavior
    useWeapon(): WeaponBehavior {
        return this.fight()
    }
}

class Troll extends Character{
fight(): WeaponBehavior {
        return new AxeBehavior()
    }
}
const troll:Troll = new Troll()
const troleUseAxe = troll.fight()
troleUseAxe.useWeapon()
