namespace mod04{
    interface MathFunction{
        (x:number,y:number):number;
    }

    let add:MathFunction=function (i,j) {
        return i+j;
    };
    let sub:MathFunction=(i,j)=>i-j;
    console.log(add(100,200));
    console.log(sub(500,300));
}