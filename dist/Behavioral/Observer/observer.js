class Lead {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
class Notify {
    update(subject) {
        console.log(`Получил уведомление `);
        console.log(subject);
    }
}
const subject = new Subject();
subject.state = new Lead(`Barbra Streisand`, `000000`);
const s1 = new Notify();
subject.attach(s1);
s1.update(subject);
//# sourceMappingURL=observer.js.map