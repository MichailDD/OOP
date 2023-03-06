class User {
    constructor(userID) {
        this.userID = userID;
    }
}
class Command {
    constructor(history) {
        this.history = history;
        this.commandId = Math.random();
    }
}
class CommandHistory {
    constructor() {
        this.commands = [];
    }
    push(command) {
        this.commands.push(command);
    }
    remove(command) {
        this.commands = this.commands.filter(c => c.commandId !== command.commandId);
    }
}
class UserService {
    saveUser(user) {
        console.log(`Сохранение пользователя с ID ${user.userID}`);
    }
    deleteUser(userId) {
        console.log(`Удаление пользователя с ID ${userId}`);
    }
}
class AddUserCommand extends Command {
    constructor(user, receiver, history) {
        super(history);
        this.user = user;
        this.receiver = receiver;
    }
    execute() {
        this.receiver.saveUser(this.user);
        this.history.push(this);
    }
    undo() {
        this.receiver.deleteUser(this.user.userID);
        this.history.remove(this);
    }
}
class Controller {
    constructor() {
        this.history = new CommandHistory();
    }
    addReceiver(receiver) {
        this.receiver = receiver;
    }
    run() {
        const addUserCommand = new AddUserCommand(new User(1), this.receiver, this.history);
        addUserCommand.execute();
        console.log(addUserCommand.history);
        addUserCommand.undo();
        console.log(addUserCommand.history);
    }
}
const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();
//# sourceMappingURL=command.js.map