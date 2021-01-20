namespace mod06{
    interface Animal{
        run : string
    }
    class Cat implements Animal{
        constructor(public run:string){

        }
    }
    class Person implements Animal{
        constructor(public run:string){

        }
    }
    function printData<T extends Cat>(p: T): void {
        console.log(p.run)
    } 
    let c = new Cat("跑起來!!!!");
    let p = new Person("努力跑QQ!!");
    printData(c);
    printData(p);
}