//強制轉型的兩種方法
//toFixed 取得小數位數
let a:any=100.345;
console.log((<number>a).toFixed(2));
console.log((a as number).toFixed(2));