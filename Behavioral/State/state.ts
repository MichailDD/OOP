class DocumentItem{
public text:string
private state:DocumentState
constructor(){
    this.setState(new DraftDocumentItem())
}
getState():DocumentState{
  return  this.state
}
setState(state:DocumentState){
    this.state=state
    this.state.setContext(this)
}
publishDoc():void{
    this.state.publish()
}
deleteDoc():void{
    this.state.delete()
}
}



abstract class DocumentState{
  
    public item:DocumentItem
    setContext(item:DocumentItem):void{
        this.item=item
    }
    abstract publish():void
    abstract delete():void
}

class DraftDocumentItem extends DocumentState{
  
    constructor(){
        super()
       
    }
    publish(): void {
        console.log(`На сайт отправлен текст ${this.item.text}`)
        this.item.setState(new PublishDocumentItem()  )
    }
    delete(): void {
        console.log(`Публикация  удалена`)
    }
}
class PublishDocumentItem extends DocumentState{
  
    constructor(){
        super()
        
    }
    publish(): void {
        console.log(`Нельзя опубликовать опубликованный документ`)
    }
    delete(): void {
        console.log(`Снято с публикации`)
        this.item.setState(new DraftDocumentItem())
    }
}
const item:DocumentItem = new DocumentItem()
item.text=`новый пост`
console.log(item.getState())
item.publishDoc()
console.log(item.getState())
item.deleteDoc()
console.log(item.getState())
item.publishDoc()
item.publishDoc()


