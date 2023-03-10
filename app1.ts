// interface FlyBehavior{
//     fly():void
// }
// interface QuakBehavior{
//     quack():void
// }
// class FlyWidthRocket implements FlyBehavior{
//     fly(): void {
//         console.log(`FlyWidthRocket`)
//         }

// }
// class FlyWidthWings implements FlyBehavior{
//     fly(): void {
//         console.log(`FlyWidthWings`)
//     }
// }
// class NoFly implements FlyBehavior{
//     fly(): void {
//         console.log(`NoFly`)
//     }
// }
// class Quack implements QuakBehavior{
//     quack(): void {
//         console.log(`Quack`)
//     }
// }
// class Squeak implements QuakBehavior{
//     quack(): void {
//         console.log(`Squeak`)
//     }

// }

// abstract class Duck {
//     public flyBehavior:FlyBehavior
//     public quakBehavior:QuakBehavior
//     swim():void{
//         console.log(`Swim`)
//     }
//     performFly():void{
//         this.flyBehavior.fly()
//     }
//     performQuack():void{
//         this.quakBehavior.quack()
//     }
//     setFlyBehavior(fb:FlyBehavior){
//         this.flyBehavior =fb
//     }
//     setQuackBehevior(qa:QuakBehavior){
//         this.quakBehavior = qa
//     }
//     getFlyBehavior(){
//         return this.flyBehavior
//     }
//     abstract display():void

// }

// class MallardDuck extends Duck {
//     public quakBehavior: QuakBehavior = new Quack()
//     public flyBehavior: FlyBehavior = new FlyWidthWings()
//     display(): void {
//         console.log(`MallardDuck`)
//     }

// }
// class RedheadDuck extends Duck {
//     public quakBehavior: QuakBehavior = new Quack()
//     public flyBehavior: FlyBehavior = new FlyWidthWings()
//     display(): void {
//         console.log(`RedheadDuck`)
//     }


// }
// class RubberDuck extends Duck{
//     public quakBehavior: QuakBehavior = new Squeak()
//     public flyBehavior: FlyBehavior = new NoFly()
//     display(): void {
//         console.log(`RubberDuck`)
//     }

// }
// class ModelDuck extends Duck{
//     public quakBehavior: QuakBehavior = new Squeak()
//     public flyBehavior: FlyBehavior = new FlyWidthRocket()

//     display(): void {
//         console.log(`Model Duck`)
//     }

// }
// // const malladDuc: MallardDuck = new MallardDuck()
// // const redHeadDuc: RedheadDuck =new RedheadDuck()
// // const rubber:RubberDuck = new RubberDuck()
// // malladDuc.swim()
// // malladDuc.display()
// // rubber.display()
// class Simulator{
//     public mallard:MallardDuck
//     mallardDuck():void{
//        this.mallard= new MallardDuck()
//        this.mallard.performFly()
//        this.mallard.performQuack()
//     }
//    public rubber:RubberDuck
//    rubberDuck():void{
//     this.rubber = new RubberDuck()
//     this.rubber.performFly()
//     this.rubber.performQuack()
//    }
//    public model:ModelDuck
//    modelDuck():void{
//     this.model = new ModelDuck()
//     this.model.performFly()
//     this.model.performQuack()
//    }
// }

// const simulator: Simulator = new Simulator()
// const mallard = simulator.mallardDuck()
// const rubber = simulator.rubberDuck()
// const model = simulator.modelDuck()



// interface WeaponBehavior{
//     useWeapon():void
// }

// class SwordBehavior implements WeaponBehavior{
//     useWeapon(): void {
//         console.log(`Удар мечом`)
//     }
// }
// class KnifeBehavior implements WeaponBehavior{
//     useWeapon(): void {
//         console.log(`Удач ножом `)
//     }
// }
// class BowAndArrowBehavior implements WeaponBehavior{
//     useWeapon(): void {
//         console.log(`Выстрел из лука`)
//     }
// }
// class AxeBehavior implements WeaponBehavior{
//     useWeapon(): void {
//         console.log(`Удар топором`)
//     }
// }

// abstract class Character{
//     public weapon:WeaponBehavior
//     setWeapon(w:WeaponBehavior){
//         this.weapon = w
//     }
//     abstract fight():void
// }
// class King extends Character{
    
//     fight(): void {
//         this.weapon.useWeapon()
//     }  
// }

// const king:King = new King()
// king.setWeapon(new KnifeBehavior())
// king.fight()
// king.setWeapon(new AxeBehavior())
// king.fight()


interface Subject{
    registerObserver(o:Observer):void
    removeObserver(o:Observer):void
    notifyObservers():void
}
interface Observer{
    update(tempr:number,humidity:number,pressure:number)
}
interface DisplayElement{
    display():void
}

class WeatherData implements Subject{
    private observers=[]
    private temperature:number
    private humidity:number
    private pressure:number
    public weatherData():void{
        this.observers=[]
    }
    public registerObserver(o: Observer): void {
        if(this.observers.includes(o)){
            return 
             }
              this.observers.push(o)
    }
    public    removeObserver(o: Observer): void {
        const observerIndex = this.observers.indexOf(o)
            if(observerIndex == -1){return}
              this.observers.splice(observerIndex,1 )
    }
   public notifyObservers(): void {
        throw new Error("Method not implemented.")
    }
   public setMeasurements(temperature:number,humidity:number,pressure:number):void{
    this.temperature= temperature
    this.humidity=humidity
    this.pressure = pressure
    }
    
}

class CurrentConditionsDisplay implements Observer,DisplayElement{
    private temperature:number
    private humidity:number
    private weatherData:Subject
    public currentConditionsDisplay(weatherData:Subject){
        this.weatherData =weatherData
        weatherData.registerObserver(this)
    }
    update(temperature: number, humidity: number, pressure: number) {
        this.temperature= temperature
        this.humidity= humidity
        this.display()
    }
    display(): void {
        console.log(`
        Temperature: ${this.temperature},
        Humidity: ${this.humidity}
        `)
    }

}

