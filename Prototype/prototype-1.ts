interface Terminator{
    clone():Terminator
}
class TerminatorPrototype implements Terminator{
    name:string 
    surName:string
    model:string
    constructor(name:string,surName:string,model:string){
        this.name=name,
        this.surName=surName
        this.model=model
    }
    clone(): TerminatorPrototype {
        return new TerminatorPrototype(this.name,this.surName,this.model)
    }
}
const T_1000:TerminatorPrototype = new TerminatorPrototype(`Robert`,`Patrick`,`T-1000`)
const T_800 :TerminatorPrototype = new TerminatorPrototype(`Arnold`,`Schwarzenegger`,`T-800`)


const terminator_1:TerminatorPrototype = T_1000.clone()
const terminator_2:TerminatorPrototype = T_800.clone()

console.log(terminator_1)
console.log(terminator_2)


