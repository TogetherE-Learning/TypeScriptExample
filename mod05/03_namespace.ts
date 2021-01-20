namespace HR{
   export class Employee {
        constructor(public empId: number, public empName: string) {
        }
        getInfo() {
          return `${this.empId} , ${this.empName}`;
        }
    }
}
//Immediately Invoked Function Expression(IIFE)
