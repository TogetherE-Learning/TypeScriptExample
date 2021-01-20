// import { Employee,projectName } from "./06_export";
// console.log(projectName);
// let emp=new Employee(1,"aaa");
// console.log(emp.getInfo());

// import { Employee as MyEmployee } from "./06_export";
// let emp=new MyEmployee(1,"aaa");
import * as Demo from "./06_export";
namespace importTest{
    export class importTestC{
        consoleOut():void {
            console.log(Demo.projectName);
            let emp=new Demo.Employee(1,"aaa");
            console.log(emp.getInfo());
        }
    }
}