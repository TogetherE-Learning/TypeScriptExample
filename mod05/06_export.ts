export let projectName = "HR Management";
export default class Employee {
  constructor(public empId: number, public empName: string) {
  }
  getInfo() {
    return ` ${this.empId} , ${this.empName} `;
  }
}
