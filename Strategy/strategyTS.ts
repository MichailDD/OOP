
interface Fly{
    fly:()=>void
}
interface Quack {
    quack:()=>void
}
class QuackWithBeack implements Quack{
    quack():void{
        console.log(`Кряк `)
    }
}
class NoQuack implements Quack{
    quack():void{
        console.log("Не могу крякать ")
    }
}

class FlyWithWings implements Fly{
    fly():void{
        console.log('Летаю с помощью крыльев')
    }
}
class NoFly implements Fly{
    fly():void{
        console.log(`Не умею летать `)
    }
}

abstract class Duck{
   abstract flyBehavior():Fly
   abstract quakBehavior():Quack
}
class MelardDuck extends Duck{
    flyBehavior(): Fly {
        return new FlyWithWings()
    }
    quakBehavior(): Quack {
        return new QuackWithBeack()
    }
    melard(){
        
    }
    
}

const duc = new MelardDuck()
const melardDuck= duc.quakBehavior()
melardDuck.quack()





