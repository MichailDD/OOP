interface IUSB{
    controlSignalUSB():string
}
interface IType_C{
    controlSignalTypeC():string
}

class USB implements IUSB{
    controlSignalUSB(): string {
        return  `Interface: USB,
                 Port: USB.3.0`
    }
}

class TypeCToUSBAdapter implements IType_C{
    private usb:USB = new USB()
    controlSignalTypeC(): string {
      return this.usb.controlSignalUSB()
    }
}

const adapter:IType_C= new TypeCToUSBAdapter()
adapter.controlSignalTypeC()
console.log(adapter.controlSignalTypeC())