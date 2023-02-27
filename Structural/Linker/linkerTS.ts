interface Employee {
    getName():string
    getSalary():number
    getRoles():string
}

class Developer implements Employee{
    name:string
    salary:number
    role:string 
    constructor(name:string,salary:number){
        this.name=name
        this.role=`Developer`
        this.salary=salary
    }
    getName(): string {
        return this.name
    }
    getSalary(): number {
        return this.salary
    }
    getRoles(): string {
        return this.role
    }
}

class Designer implements Employee{
    name:string
    salary:number
    role:string
    constructor(name:string,salary:number){
        this.name=name
        this.role=`Designer`
        this.salary=salary
    }
    getName(): string {
        return this.name
    }
    getSalary(): number {
        return this.salary
    }
    getRoles(): string {
        return this.role
    }
}

interface ICompany{
    addEmployee(person:Employee):void
}

class Company implements ICompany {
    public employeesList:Employee[]
    constructor(){
        this.employeesList = []
    }
    addEmployee(employee:Employee):void{
        this.employeesList.push(employee)
    }
    getNameEmployee():void{
    this.employeesList.forEach(function(employee){
        console.log(employee.getName())
    })
    }  
                                                                             
}

const company:Company = new Company()
company.addEmployee(new Developer(`Torvalds Linus`,15000))
company.addEmployee(new Designer(`Aaron Draplin`,10000))
company.getNameEmployee()

 
