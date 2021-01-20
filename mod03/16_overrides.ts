namespace mod03 {
    class Employee {

        constructor(protected id: number, protected name: string) {

        }
        getInfo() {
            return `id:${this.id} name:${this.name}`;
        }
    }

    class Sales extends Employee {
        constructor(id:number,name:string,public bonus:number) {
            super(id,name);
        }
        getInfo() {
            // return `id:${this.id} name:${this.name} bouns:${this.bonus}`;
            return `${super.getInfo()} bouns:${this.bonus}`;
        }
    }


    let emp = new Sales(1, "aaa", 3000);

    console.log( emp.getInfo());


}
