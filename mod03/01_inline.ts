//function declaration
// function func1(p:{x:number, y:number}) {
//     console.log(p.x, p.y);
// }

//function expression
// let func1=function (p:{x:number, y:number}) {
//     console.log(p.x, p.y);
// };

//es6 arrow function
let func1= (p:{x:number, y:number})=> {
    console.log(p.x, p.y);
};
func1({x:10,y:20})