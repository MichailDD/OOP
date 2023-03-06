class Mediated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log(`Отправляю увeдомление`);
    }
}
class Log {
    log(messege) {
        console.log(messege);
    }
}
class EventHendler extends Mediated {
    myEvent() {
        this.mediator.notify(`EventHendler`, `MyEvent`);
    }
}
class Mediator {
    constructor(notifications, log, hendler) {
        this.notifications = notifications;
        this.log = log;
        this.hendler = hendler;
    }
    notify(event) {
        switch (event) {
            case `MyEvent`:
                this.notifications.send();
                this.log.log(`Отправлено`);
                break;
        }
    }
}
const hendler = new EventHendler();
const logger = new Log();
const notification = new Notifications();
const mediator = new Mediator(notification, logger, hendler);
hendler.setMediator(mediator);
hendler.myEvent();
//# sourceMappingURL=mediator.js.map