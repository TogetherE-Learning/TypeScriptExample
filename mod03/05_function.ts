namespace mod03 {
    interface MathFunction {
        (x: number, y: number): number;
    }

    let add: MathFunction = function (i, j) {
        return i + j;
    };
    let sub: MathFunction = (i, j) => i - j;
    console.log(add(100, 200));
    console.log(sub(500, 300));
}
namespace mod03 {
    interface MathFunction {
        Add(x: number, y: number): number;
        Sub(x: number, y: number): number;
    }
    let fun: MathFunction = { 
        Add: (x, y) => x + y, 
        Sub: (x, y) => x - y 
    };
    console.log(fun.Add(1,3));
    console.log(fun.Sub(1,3));
}