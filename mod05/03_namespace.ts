namespace HR{
    //export 類似 Public 的用途
    export class Employee {
        constructor(public empId: number, public empName: string) {
        }
        getInfo() {
          return `${this.empId} , ${this.empName}`;
        }
    }
}
//Immediately Invoked Function Expression(IIFE)
let emp=new HR.Employee(1,"aaa");
console.log(emp.getInfo());