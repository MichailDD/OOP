interface Flakes{
    run():void
}
class ChocolateFlakes implements Flakes{
    run(): void {
        console.log(`Chocolate flakes`)
    }
}
class VanillaFlakes implements Flakes{
    run(): void {
        console.log(`Vanilla Flakes`)
    }
}
class RegularFlakes implements Flakes{
    run(): void {
        console.log(`Regular Flakes`)
    }
}
enum TypeFlakes{
    CHOCOLATE,
    VANILLA,
    REGULAR
}
class FlakesFactory{
    create(type):Flakes{
        if(type===TypeFlakes.CHOCOLATE){
            return new ChocolateFlakes()
        }
        if(type===TypeFlakes.VANILLA){
            return new VanillaFlakes()
        }
        if(type===TypeFlakes.REGULAR){
            return new RegularFlakes()
        }
        if(type===!TypeFlakes){
            console.error(`Error`)
        }
    }
}
const factory = new FlakesFactory()
const chocolate = factory.create(TypeFlakes.CHOCOLATE)
chocolate?.run()
