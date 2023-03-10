class User {
    constructor(public userID:number){
}
}
abstract class Command{
    public commandId:number

    abstract execute():void
    constructor(public history:CommandHistory){
        this.commandId=Math.random()

    }
}
class CommandHistory{
    public commands:Command[]=[]
    push(command:Command):void{
        this.commands.push(command)
    }
    remove(command:Command){
        this.commands = this.commands.filter(c=>c.commandId!==command.commandId)
    }
    
}
class UserService{
    saveUser(user:User):void{
        console.log(`Сохранение пользователя с ID ${user.userID}`)
    }
    deleteUser(userId:number):void{
        console.log(`Удаление пользователя с ID ${userId}`)
    }
}
class AddUserCommand extends Command{
    constructor(private user:User ,private receiver:UserService, history:CommandHistory){
        super(history)
    }
    execute(): void {
        this.receiver.saveUser(this.user)
        this.history.push(this)

    }
    undo():void{
        this.receiver.deleteUser(this.user.userID)
        this.history.remove(this)
    }

}

class Controller{
    receiver:UserService
    history:CommandHistory=new CommandHistory()
    addReceiver(receiver:UserService){
        this.receiver=receiver
    }
    run():void{
        const  addUserCommand = new AddUserCommand(
            new User(1),
            this.receiver,
            this.history
        )
        addUserCommand.execute()
        console.log(addUserCommand.history)
        addUserCommand.undo()
        console.log(addUserCommand.history)
    }
}
const controller = new Controller()
controller.addReceiver(new UserService())
controller.run()
