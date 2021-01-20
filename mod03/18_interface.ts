interface Shape {
    width: number;
    height: number;
    getArea(): number;
}
//跟 class 繼承不同，interface 是實作直接使用關鍵字 implements
class Rectangle implements Shape {
    constructor(public id: number, public width: number, public height: number) {

    }

    getArea(): number {
        return this.width * this.height;
    }
}

let s: Rectangle = new Rectangle(1, 10, 20);
console.log(s.id, s.getArea());