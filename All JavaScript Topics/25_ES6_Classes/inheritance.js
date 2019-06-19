class Person {

    static companyName = 'Infosys';

    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // instance Method
    getData(){
        let personData = `Name : ${this.name}
                          Age : ${this.age}
                          Address : ${this.address}`;
        console.log(personData);
    }

    // static Method
    static getCompany(){
        console.log(Person.companyName);
    }
}

class Employee extends Person{

    constructor(name,age,address,designation,salary){
       super(name,age,address);
       this.designation = designation;
       this.salary = salary;
    }

    // instance Method
    getData(){
        let personData = `Name : ${this.name}
                          Age : ${this.age}
                          Address : ${this.address}
                          Designation : ${this.designation}
                          Salary : ${this.salary}`;
        console.log(personData);
    }

    // static Method
    static getCompany(){
        console.log(Person.companyName);
    }

}
let employee1 = new Employee('John',40,'Banagalore','Manager','$5000');
employee1.getData();
Employee.getCompany();

let person1 = new Person('Wilson',35,'Hyderabad');
person1.getData();
Person.getCompany();