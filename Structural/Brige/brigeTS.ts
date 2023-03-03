interface IMessenger{
    sendMessege(messege:string):void
    connect<T>(config:T):void
    disconnecrt():void
}

class TelegramMessenger implements IMessenger{
    sendMessege(messege:string): void {
        console.log(messege)
    }
    connect<T>(config: T): void {
        console.log(config)
    }
    disconnecrt(): void {
        console.log(`Dissconect server Telegram`)
    }

}
class ViberMessenger implements IMessenger{
    sendMessege(messege: string): void {
        console.log(messege)
    }
    connect<T>(config: T): void {
        console.log(config)
    }
    disconnecrt(): void {
        console.log(`Disconnect server Viber`)
    }
    
}
class MessageSender {
    constructor(private provaider:IMessenger){}
    send():void{
        this.provaider.connect(`Connected.....`)
        this.provaider.sendMessege(`messege`)
        this.provaider.disconnecrt()
    }
}

const sender_1:MessageSender = new MessageSender(new TelegramMessenger())
sender_1.send()

