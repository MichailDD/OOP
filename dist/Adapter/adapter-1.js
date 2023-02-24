class USB {
    controlSignalUSB() {
        return `Interface: USB,
                 Port: USB.3.0`;
    }
}
class TypeCToUSBAdapter {
    constructor() {
        this.usb = new USB();
    }
    controlSignalTypeC() {
        return this.usb.controlSignalUSB();
    }
}
const adapter = new TypeCToUSBAdapter();
adapter.controlSignalTypeC();
console.log(adapter.controlSignalTypeC());
//# sourceMappingURL=adapter-1.js.map