class Task {
    constructor(priority) {
        this.priority = priority;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    sortByPrioty() {
        this.tasks = this.tasks.sort((a, b) => {
            if (a.priority < b.priority) {
                return 1;
            }
            else if (a.priority == b.priority) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTast() {
        return this.tasks;
    }
    count() {
        return this.tasks.length;
    }
    getIterator() {
        return new PriorityIterator(this);
    }
}
class PriorityIterator {
    constructor(tastList) {
        this.position = 0;
        tastList.sortByPrioty();
        this.tastList = tastList;
    }
    next() {
        this.position += 1;
        return this.tastList.getTast()[this.position];
    }
    prev() {
        this.position -= 1;
        return this.tastList.getTast()[this.position];
    }
    index() {
        return this.position;
    }
}
const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(2));
taskList.addTask(new Task(6));
taskList.addTask(new Task(1));
taskList.addTask(new Task(2));
const iterator = taskList.getIterator();
console.log(taskList);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
//# sourceMappingURL=iterator.js.map