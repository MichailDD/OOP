class Car {
    getEngine() {
        return this.engine;
    }
    setEngine(en) {
        this.engine = en;
    }
    getAutopilot() {
        return this.autopilot;
    }
    setAutopilot(au) {
        this.autopilot = au;
    }
    getModel() {
        return this.model;
    }
    setModel(mo) {
        this.model = mo;
    }
    getColor() {
        return this.color;
    }
    setColor(col) {
        this.color = col;
    }
    result() {
        return `Engine :${this.engine} , Autopilot: ${this.autopilot}, Model: ${this.model},
                Color :${this.color}`;
    }
}
class CarBuilder {
}
class Engineer extends CarBuilder {
    constructor() {
        super(...arguments);
        this.car = new Car();
    }
    build() {
        return this.car.result();
    }
    setEngine(engine) {
        this.car.setEngine(engine);
    }
    setAutopilot(autopilot) {
        this.car.setAutopilot(autopilot);
    }
    setModel(model) {
        this.car.setModel(model);
    }
    setColor(color) {
        this.car.setColor(color);
    }
}
class Machine {
    create(builder) {
        builder.setEngine(`V8`);
        builder.setAutopilot(true);
        builder.setColor(`White`);
        builder.setModel(`X50`);
        return builder.build();
    }
}
const engineer = new Engineer();
const car = new Machine().create(engineer);
console.log(car);
//# sourceMappingURL=builder-1.js.map