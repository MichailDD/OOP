
// class User{
//     facebookAccount:string
//     googleAccount:string

// }

// interface IAuthorizationStrategy{
//     auth(user:User):boolean
// }

 
// class Authorization{
//     constructor(private strategy:IAuthorizationStrategy){

//     }
//     // Задаем стратегию 
//     setStrategy(strategy:IAuthorizationStrategy){
//         this.strategy= strategy
//     }
//     public authUser(user:User):boolean{
//         return this.strategy.auth(user)
//     }

// }

// class FacebookStrategy implements IAuthorizationStrategy{
//     auth(user: User): boolean {
//         if(user.facebookAccount){
//             return true
//         }else{
//             return false
//         }
//     }

// }
// class GoogleStrategy implements IAuthorizationStrategy{
//     auth(user: User): boolean {
//         if(user.googleAccount){
//             return true
//         }else{
//             return false
//         }
//     }

// }

// const user:User = new User()
// user.googleAccount = `google account`
// const auth:Authorization = new Authorization(new GoogleStrategy())
// console.log(auth.authUser(user))



////////////////////////////////////////////////////////
interface WeaponBehavior{
    useWeapon():void
}

class SwordBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(`Удар мечом`)
    }
}
class KnifeBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(`Удач ножом `)
    }
}
class BowAndArrowBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(`Выстрел из лука`)
    }
}
class AxeBehavior implements WeaponBehavior{
    useWeapon(): void {
        console.log(`Удар топором`)
    }
}

abstract class Character{
    public weapon:WeaponBehavior
    setWeapon(w:WeaponBehavior){
        this.weapon = w
    }
    abstract fight():void
}
class King extends Character{
    
    fight(): void {
        this.weapon.useWeapon()
    }  
}

const king = new King()
king.setWeapon(new KnifeBehavior())
king.fight()
king.setWeapon(new AxeBehavior())
king.fight()

