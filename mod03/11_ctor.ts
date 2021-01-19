namespace mod03 {
    class Employee {
        //省略寫法，不需要再給值即可 work
        constructor(private id: number,public name: string) {
            // this.id = id;
            // this.name = name;
        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
    }
    let emp: Employee = new Employee(1, "aaa");
   // console.log(emp.Id,emp.name);
   console.log(emp.name,emp.getInfo());
   

}
