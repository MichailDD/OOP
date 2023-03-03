

class Car{
    private engine:string;
    private autopilot:boolean
    private model:string
    private color:string

   public getEngine():string{
    return this.engine
   }
   public setEngine(en:string):void{
    this.engine = en
   }
   public getAutopilot():boolean{
    return this.autopilot
   }
   public setAutopilot(au:boolean):void{
    this.autopilot = au
   }
   public getModel():string{
    return this.model
   }
   public setModel(mo:string):void{
    this.model = mo
   }

   public getColor():string{
    return this.color
   }
   public setColor(col:string):void{
    this.color=col
   }
   result():string{
        return `Engine :${this.engine} , Autopilot: ${this.autopilot}, Model: ${this.model},
                Color :${this.color}`
   }

}

abstract class CarBuilder extends Car{
    abstract build():string
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
interface IMachine{
    create(buider:CarBuilder):string
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