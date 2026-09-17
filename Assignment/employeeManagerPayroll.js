class Employee{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    calculateSalary(){
        console.log("Employee Salary: ", this.salary);
    }
}
class Manager extends Employee{
    constructor(id, name, salary, department){
        super(id, name, salary);// pc
        this.department = department;
    }
    calculateSalary(){
        console.log("Manager Salary: ", this.salary, "Department: ", this.department);
    }
}
let emp1 = new Employee(1, "Ali", 50000);
let emp2 = new Manager(2, "Ahmed", 80000, "IT");
emp1.calculateSalary();
emp2.calculateSalary();