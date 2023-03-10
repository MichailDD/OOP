class Memento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
class Originator {
    setState(state) {
        console.log(` установка состояния для  ${state}`);
        this.state = state;
    }
    save() {
        console.log(`сохранение состояния в класс Memento`);
        return new Memento(this.state);
    }
    restore(memento) {
        this.state = memento.getState();
        console.log(`состояние после восстановления из класса Memento: ${this.state}`);
    }
}
class Caretaker {
    constructor() {
        this.mementos = [];
    }
    add(memento) {
        console.log(`Добавление напоминания`);
        this.mementos.push(memento);
    }
    get() {
        console.log(`Получение напоминания`);
        return this.mementos.pop();
    }
}
// Пример использования паттерна Снимок:
const originator = new Originator();
const caretaker = new Caretaker();
originator.setState("состояние 1 ");
originator.setState("состояние 2 ");
caretaker.add(originator.save());
originator.setState("состояние 3 ");
caretaker.add(originator.save());
originator.setState("состояние 4 ");
console.log(`Текущее состояние  ${originator}`);
const memento1 = caretaker.get();
originator.restore(memento1);
console.log(`Текущее состояние после восстановления из Memento 1: ${originator}`);
const memento2 = caretaker.get();
originator.restore(memento2);
console.log(`Текущее состояние после восстановления из Memento 2: ${originator}`);
//# sourceMappingURL=memento.js.map