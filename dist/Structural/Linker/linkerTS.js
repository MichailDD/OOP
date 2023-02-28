class Developer {
    constructor(name, salary) {
        this.name = name;
        this.role = `Developer`;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getRoles() {
        return this.role;
    }
}
class Designer {
    constructor(name, salary) {
        this.name = name;
        this.role = `Designer`;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    getRoles() {
        return this.role;
    }
}
class Company {
    constructor() {
        this.employeesList = [];
    }
    addEmployee(employee) {
        this.employeesList.push(employee);
    }
    getNameEmployee() {
        this.employeesList.forEach(function (employee) {
            console.log(employee.getName());
        });
    }
}
const company = new Company();
company.addEmployee(new Developer(`Torvalds Linus`, 15000));
company.addEmployee(new Designer(`Aaron Draplin`, 10000));
company.getNameEmployee();
//# sourceMappingURL=linkerTS.js.map