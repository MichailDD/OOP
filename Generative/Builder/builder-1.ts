class Car{
    private engine:string;
    private autopilot:boolean
    private model:string
    private color:string

   public getEngine():string{
    return this.engine
   }
   public setEngine(en:string){
    this.engine = en
   }
   public getAutopilot():boolean{
    return this.autopilot
   }
   public setAutopilot(au:boolean){
    this.autopilot = au
   }
   public getModel():string{
    return this.model
   }
   public setModel(mo:string){
    this.model = mo
   }

   public getColor():string{
    return this.color
   }
   public setColor(col:string){
    this.color=col
   }
   result():string{
        return `Engine :${this.engine} , Autopilot: ${this.autopilot}, Model: ${this.model},
                Color :${this.color}`
   }

}

abstract class CarBuilder{
    abstract build():string
    abstract setEngine(engine:string):void
    abstract setAutopilot(autopilot:boolean):void
    abstract setModel(model:string):void
    abstract setColor(color:string):void
}

class Engineer extends CarBuilder {
    private car = new Car()
    build(): string {
        return this.car.result()
    }
    setEngine(engine: string): void {
        this.car.setEngine(engine)
    }
    setAutopilot(autopilot: boolean): void {
    this.car.setAutopilot(autopilot)
    }
    setModel(model: string): void {
        this.car.setModel(model)
    }
    setColor(color: string): void {
        this.car.setColor(color)
    }

}
class Machine{
    public create(builder:CarBuilder):string{
        builder.setEngine(`V8`)
        builder.setAutopilot(true)
        builder.setColor(`White`)
        builder.setModel(`X50`)

        return builder.build()
    }
}
const engineer:Engineer = new Engineer()
const car:string = new Machine().create(engineer)
console.log(car)