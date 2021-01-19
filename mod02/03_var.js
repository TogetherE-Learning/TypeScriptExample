console.log(i);//hoist, undefined
var i=10;
console.log(i); //10
//----------------------------
var j=10;
var j=20;
console.log(j);//20
//======================================
console.log(i);//hoist, undefined
let i=10;
console.log(i); //10
//----------------------------
 let j=10;
 let j=20;
 console.log(j);//20