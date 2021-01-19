//給予匿名型別指定的型別
//toFixed 取得小數位數
let a:any=100.34;
console.log((<number>a).toFixed(2));
console.log((a as number).toFixed(2));

//將 a 轉成 string
let e:string = (<number>a).toString();
console.log(Number.parseInt(e));
console.log(Number.parseFloat(e));