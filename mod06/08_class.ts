namespace mod06 {
    //類似 C# 抽象類別的用法
    class GenericClass<T> {
        add!: (x: T, y: T) => T;
    }

    let c = new GenericClass<string>();
    c.add = (i, j) => i.toUpperCase() + j.toUpperCase();
    console.log(c.add("aaa", "bbb"));

    let c2 = new GenericClass<number>();
    c2.add = (i, j) => i + j;
    console.log(c2.add(50, 100));
}