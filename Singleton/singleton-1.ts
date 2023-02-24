class DataBase{
    urL:number
    private static instance: DataBase
    constructor(){
        this.urL=Math.random() 
        if(DataBase.instance){
            return DataBase.instance
        }
        DataBase.instance=this
    }
}
const db1 = new DataBase()
const db2 = new DataBase()
const db3 = new DataBase()
if(db1===db2){
    console.log(`true`)
} else{
    console.log(`false`)
}
console.log(db1.urL)
console.log(db2.urL)
console.log(db3)
console.log(`End`)
