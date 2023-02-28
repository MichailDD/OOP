interface IPayment{
    getPaymentDatail(id:number):IPaymentDatail | undefined

}
interface IPaymentDatail{
    id:number
    sum:number
}

class Payment implements IPayment{
    private dataBase = [{id:1,sum:5000}]
    getPaymentDatail(id: number): IPaymentDatail | undefined {
        return this.dataBase.find(d=> d.id ===id)
    }
}
class PaymentProxy implements IPayment{
    constructor(private payment:IPayment,private userID:number){
        
    }
    getPaymentDatail(id: number): IPaymentDatail {
        if(this.userID===1){
            return this.payment.getPaymentDatail(id)
        }else{
            console.log(`Error`)
            return undefined
        }
    }
}
const proxy:PaymentProxy = new PaymentProxy(new Payment(),1)
console.log(proxy.getPaymentDatail(1))