interface DepartmentArray {
   readonly [index: number]: string;
   length:number
}
let ar:DepartmentArray = ['IT', 'Sales', 'Accounting'];

//ar[0]="demo";
// console.log(ar[0]);
// console.log(ar[1]);
// console.log(ar[2]);

for (let i = 0; i < ar.length; i++) {
   console.log(ar[i]);
    
}