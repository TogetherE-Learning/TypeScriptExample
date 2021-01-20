namespace mod03 {
    class Employee {
        static count=0;
        constructor(public id: number, public name: string) {
            Employee.count++;
        }
        getInfo() {
            return `${this.id}: ${this.name} count:${Employee.count}`;
        }
    }
    let emp: Employee = new Employee(100, "aaa");
    console.log( emp.getInfo());
    let emp2: Employee = new Employee(200, "bbb");
    console.log( emp2.getInfo());


}
