
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


