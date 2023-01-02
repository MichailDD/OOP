var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var SportCar = /** @class */ (function (_super) {
    __extends(SportCar, _super);
    function SportCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportCar.prototype.run = function () {
        console.log("Создаем стортивную машину");
    };
    return SportCar;
}(Car));
var FamilyCar = /** @class */ (function (_super) {
    __extends(FamilyCar, _super);
    function FamilyCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FamilyCar.prototype.run = function () {
        console.log("Создаем семейную машину");
    };
    return FamilyCar;
}(Car));
//////////Создаем класс фабрики 
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    return CarFactory;
}());
///////////определяется заводской класс  для производства типа машин
var TypeCar = /** @class */ (function (_super) {
    __extends(TypeCar, _super);
    function TypeCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeCar.prototype.produceSportCar = function () {
        return new SportCar();
    };
    TypeCar.prototype.produceFamilyCar = function () {
        return new FamilyCar();
    };
    return TypeCar;
}(CarFactory));
var typeCar = new TypeCar();
var sportCar = typeCar.produceSportCar();
var familyCar = typeCar.produceFamilyCar();
sportCar.run();
familyCar.run();
