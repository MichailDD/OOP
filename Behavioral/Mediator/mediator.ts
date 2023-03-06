interface IMediator{
    notify(sender:string,event:string):void

}
abstract class Mediated{
    mediator:IMediator
    setMediator(mediator:IMediator){
        this.mediator=mediator
    }
}
class Notifications{
    send():void{
        console.log(`Отправляю увeдомление`)
    }
}
class Log{
    log(messege:string):void{
        console.log(messege)
    }
}
class EventHendler extends Mediated{
    myEvent(){
        this.mediator.notify(`EventHendler`,`MyEvent`)
    }
}

class Mediator implements IMediator{
    constructor(
        public notifications:Notifications,
        public log:Log,
        public hendler:EventHendler
    ){}
    notify(event: string): void {
        switch(event){
            case `MyEvent`:
            this.notifications.send()
            this.log.log(`Отправлено`)
            break

        }
    }

}

const hendler = new EventHendler()
const logger = new Log()
const notification = new Notifications()


const mediator = new Mediator(
    notification, logger,hendler
)
hendler.setMediator(mediator)
hendler.myEvent()