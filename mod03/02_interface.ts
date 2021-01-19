namespace mod03 {

    interface MyFunc{
        x:number;
        y:number;
    }
    interface MyFunc2{
        x:number;
        y:number;
    }

    //function declaration
    function func1(p:MyFunc) {
        console.log(p.x, p.y);
    }

    //function expression
    let func2=function (p:MyFunc) {
        console.log(p.x, p.y);
    };

    //es6 arrow function
    let func3 = (p:MyFunc) => {
        console.log(p.x, p.y);
    };
    func1({ x: 10, y: 20 })
    func2({ x: 100, y: 200 })
    func3({ x: 200, y: 20 })
    //跟 C# 不同，型別不同只要內容一樣，一樣可以使用
    let f2:MyFunc2={x: 10, y: 20};
    func1(f2)
}

