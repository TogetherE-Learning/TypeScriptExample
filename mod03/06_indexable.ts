interface DepartmentArray {
   [index: number]: string;
   length:number;
   push(...x:string[]): number;
}
let arr = ['IT', 'Sales', 'Accounting'];

arr.push('123');
arr[4] = '456';

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

let ar:DepartmentArray = ['IT', 'Sales', 'Accounting'];
//ar[0]="demo";
// console.log(ar[0]);
// console.log(ar[1]);
// console.log(ar[2]);

for (let i = 0; i < ar.length; i++) {
   console.log(ar[i]);
}