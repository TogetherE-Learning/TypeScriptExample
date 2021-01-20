namespace mod06{
    interface printDataFn<T> {
        (p: T): void;
    }
    let f1:printDataFn<number>=i=>console.log(i+100);
    f1(50);

    let f2:printDataFn<string>=s=>console.log(s.toUpperCase());
    f2("aaa");
}