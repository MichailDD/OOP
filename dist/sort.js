//
let car = [
    { name: 'Toyota', year: 2020, type: "Sedan", engine: 'diesel', price: 15000 },
    { name: 'Mazda', year: 2022, type: "Hatchback", engine: 'petrol', price: 20000 },
    { name: 'Nissan', year: 2021, type: "Sedan", engine: 'diesel', price: 17000 },
    { name: 'Mercedes', year: 2019, type: "Jeep", engine: 'petrol', price: 12000 },
];
function sortBubble(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].price < arr[j + 1].price) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                wasSwap = true;
            }
        }
        if (!wasSwap)
            break;
    }
    return arr;
}
sortBubble(car);
console.log(car);
//# sourceMappingURL=sort.js.map