// interface FlyBehavior{
//     fly():void
// }
// interface QuakBehavior{
//     quack():void
// }
// class FlyWidthRocket implements FlyBehavior{
//     fly(): void {
//         console.log(`FlyWidthRocket`)
//         }
class WeatherData {
    constructor() {
        this.observers = [];
    }
    weatherData() {
        this.observers = [];
    }
    registerObserver(o) {
        if (this.observers.includes(o)) {
            return;
        }
        this.observers.push(o);
    }
    removeObserver(o) {
        const observerIndex = this.observers.indexOf(o);
        if (observerIndex == -1) {
            return;
        }
        this.observers.splice(observerIndex, 1);
    }
    notifyObservers() {
        throw new Error("Method not implemented.");
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }
}
class CurrentConditionsDisplay {
    currentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }
    display() {
        console.log(`
        Temperature: ${this.temperature},
        Humidity: ${this.humidity}
        `);
    }
}
//# sourceMappingURL=app1.js.map