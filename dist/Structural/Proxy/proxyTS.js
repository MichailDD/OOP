class Payment {
    constructor() {
        this.dataBase = [{ id: 1, sum: 5000 }];
    }
    getPaymentDatail(id) {
        return this.dataBase.find(d => d.id === id);
    }
}
class PaymentProxy {
    constructor(payment, userID) {
        this.payment = payment;
        this.userID = userID;
    }
    getPaymentDatail(id) {
        if (this.userID === 1) {
            return this.payment.getPaymentDatail(id);
        }
        else {
            console.log(`Error`);
            return undefined;
        }
    }
}
const proxy = new PaymentProxy(new Payment(), 1);
console.log(proxy.getPaymentDatail(1));
//# sourceMappingURL=proxyTS.js.map