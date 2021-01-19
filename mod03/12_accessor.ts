namespace mod03 {
    class Employee {
      
        // constructor(private id: number,private name: string) {
          
        // }

        name!:string;
        constructor(private id: number, name: string) {
          this.Name=name;
        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
        public set Name(v:string){
            this.name=v.toUpperCase();
        }
        public get Name(){
            return this.name+"...";
        }
    }
    let emp: Employee = new Employee(1, "aaa");
    // emp.Name="bbb"
    console.log(emp.Name);
   

}
