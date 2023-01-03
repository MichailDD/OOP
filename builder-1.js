// var Burger = /** @class */ (function () {
//     function Burger(size, cheeze, mushrooms, cucumbers, spicySause, salad) {
//         this.size = size;
//         this.cheeze = cheeze;
//         this.mushrooms = mushrooms;
//         this.cucumbers = cucumbers;
//         this.spicySause = spicySause;
//         this.salad = salad;
//     }
//     return Burger;
// }());
// var BurgerBuider = /** @class */ (function () {
//     function BurgerBuider() {
//     }
//     BurgerBuider.prototype.addCheeze = function (cheeze) {
//         this.cheeze = cheeze;
//         return this;
//     };
//     BurgerBuider.prototype.addMushrooms = function (mushrooms) {
//         this.mushrooms = mushrooms;
//         return this;
//     };
//     BurgerBuider.prototype.addCucumbers = function (cucumbers) {
//         this.cucumbers = cucumbers;
//         return this;
//     };
//     BurgerBuider.prototype.addSpicySause = function (spicySause) {
//         this.spicySause = spicySause;
//         return this;
//     };
//     BurgerBuider.prototype.addSalad = function (salad) {
//         this.salad = salad;
//         return this;
//     };
//     BurgerBuider.prototype.buid = function () {
//         return new Burger(this.size, this.cheeze, this.mushrooms, this.cucumbers, this.spicySause, this.cutlet);
//     };
//     return BurgerBuider;
// }());
// var burger = new BurgerBuider();
// burger.addCheeze(true);
// burger.addCucumbers(true);
// burger.addMushrooms(true);
// console.log(burger);
