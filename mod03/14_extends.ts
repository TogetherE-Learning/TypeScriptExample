namespace mod03 {
    class Employee {

        constructor(private id: number, private name: string) {

        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
    }

    class Sale extends Employee {
        constructor(id:number,name:string,public bonus:number) {
            super(id,name);
        }
    }


    let emp = new Sale(1, "aaa", 3000);

    console.log( emp.getInfo(), emp.bonus);


}
