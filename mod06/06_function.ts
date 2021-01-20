namespace mod06{
    function printData<T>(p: T): void {
        console.log(p)
    } 
    printData<number>(100);
    printData<string>("aaa");
}