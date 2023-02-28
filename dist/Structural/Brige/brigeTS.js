class TelegramMessenger {
    sendMessege(messege) {
        console.log(messege);
    }
    connect(config) {
        console.log(config);
    }
    disconnecrt() {
        console.log(`Dissconect server Telegram`);
    }
}
class ViberMessenger {
    sendMessege(messege) {
        console.log(messege);
    }
    connect(config) {
        console.log(config);
    }
    disconnecrt() {
        console.log(`Disconnect server Viber`);
    }
}
class MessageSender {
    constructor(provaider) {
        this.provaider = provaider;
    }
    send() {
        this.provaider.connect(`Connected.....`);
        this.provaider.sendMessege(`messege`);
        this.provaider.disconnecrt();
    }
}
const sender_1 = new MessageSender(new TelegramMessenger());
sender_1.send();
//# sourceMappingURL=brigeTS.js.map