class Task{
    constructor(public priority:number){

    }
}
class TaskList{
    public tasks:Task[]= []
    public sortByPrioty():void{
        this.tasks = this.tasks.sort((a,b)=>{
            if(a.priority < b.priority){
                return 1
            } else if(a.priority==b.priority){
                return 0
            }else{
                return -1
            }
        })
    }
    addTask(task:Task):void{
        this.tasks.push(task)
    }
    getTast():Task[]{
     return  this.tasks
    }
    public count(){
        return this.tasks.length
    }
    public getIterator():PriorityIterator{
        return new PriorityIterator(this)
    }
}
interface IITerator<T>{
    next():T | undefined
    prev():T | undefined
    index():number
}

class PriorityIterator implements IITerator<Task>{
    private position:number=0
    private tastList:TaskList
    constructor(tastList:TaskList){
        tastList.sortByPrioty()
        this.tastList=tastList
    }
    next(): Task | undefined {
        this.position +=1
        return this.tastList.getTast()[this.position]
    }
    prev(): Task | undefined {
        this.position -=1
        return this.tastList.getTast()[this.position]

    }
    index(): number {
        return this.position
    }

}

const taskList:TaskList = new TaskList()
taskList.addTask(new Task(8))
taskList.addTask(new Task(2))
taskList.addTask(new Task(6))
taskList.addTask(new Task(1))
taskList.addTask(new Task(2))
const iterator = taskList.getIterator()

console.log(taskList)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.prev())
