interface Observer{
    update(subject:Subject):void
}

interface ISubject {
    attach(observer:Observer):void
    detach(observer:Observer):void
    notify():void

}
class Lead{
    constructor(
        public name:string,
        public phone:string
    ){}
}

class Subject implements ISubject{
    private observers:Observer[] = []
    public state: Lead
    attach(observer: Observer): void {
       if(this.observers.includes(observer)){
        return 
       }
       this.observers.push(observer)
    }
    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer)
        if(observerIndex == -1){return}
        this.observers.splice(observerIndex,1 )
    }
    notify(): void {
        for(const observer of this.observers){
            observer.update(this)
        }
    }

}

class Notify implements Observer{
    update(subject: Subject): void {
        console.log(`Получил уведомление `)
        console.log(subject)
    }

}

const subject:Subject = new Subject()
subject.state = new Lead(`Barbra Streisand`,`000000`)
const s1:Notify = new Notify()
subject.attach(s1)
s1.update(subject)