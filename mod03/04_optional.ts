namespace mod03 {
    interface MyFunc {
        x: number;
        //y? 代表 y 變數變成選填，非必要存在
        y?: number;
    }

    let func3 = (p: MyFunc) => {
        if (p.y === undefined) {
            console.log(p.x)
        } else {
            console.log(p.x, p.y)
        }
    };
    func3({ x: 10, y: 100 });
    func3({ x: 200 });
    func3({ x: 30, y: 0 });
}