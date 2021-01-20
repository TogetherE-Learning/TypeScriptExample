namespace mod03 {
    class Employee {

        constructor(private id: number, private name: string) {

        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
    }

    class Sales extends Employee {
        constructor(id:number,name:string,public bonus:number) {
            super(id,name);
        }
    }


    let emp = new Sales(1, "aaa", 3000);

    console.log( emp.getInfo(), emp.bonus);
    console.log(emp instanceof Sales);
    console.log(emp instanceof Employee);
    console.log(emp instanceof Object);
    console.log(emp.toString());

}
