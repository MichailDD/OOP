"use strict";
class QuackWithBeack {
    quack() {
        console.log(`Кряк `);
    }
}
class NoQuack {
    quack() {
        console.log("Не могу крякать ");
    }
}
class FlyWithWings {
    fly() {
        console.log('Летаю с помощью крыльев');
    }
}
class NoFly {
    fly() {
        console.log(`Не умею летать `);
    }
}
class Duck {
}
class MelardDuck extends Duck {
    flyBehavior() {
        return new FlyWithWings();
    }
    quakBehavior() {
        return new QuackWithBeack();
    }
    melard() {
    }
}
const duc = new MelardDuck();
const melardDuck = duc.quakBehavior();
melardDuck.quack();
