class Employee {
    Id:number;
    name:string;
    constructor(id:number,name:string) {
        this.Id=id;
        this.name=name;
    }
    getInfo(){
        return `${this.Id}: ${this.name}`;
    }
}
let emp:Employee=new Employee(1,"aaa");
console.log(emp.getInfo());