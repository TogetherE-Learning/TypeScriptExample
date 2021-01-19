namespace mod03 {
    interface MyFunc {
        x: number;
        y?: number;
    }
    let func3 = (p: MyFunc) => {
        // console.log(p.x, p.y);
        // if (p.y) {
        //     console.log(p.x, p.y)
        // } else {
        //     console.log(p.x)
        // }

        if (p.y===undefined) {
            console.log(p.x)
        } else {
            console.log(p.x, p.y)
        }

    };
    func3({ x: 10,y:100 });
    func3({ x: 200 });
    func3({ x: 30,y:0 });
}