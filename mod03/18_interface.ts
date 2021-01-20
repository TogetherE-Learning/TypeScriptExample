interface Shape {
    width: number;
    height: number;
    getArea(): number;
}
class Rectangle implements Shape {
    constructor(public id:number,public width:number, public height:number) {
        
    }
   
    getArea(): number {
        return this.width*this.height;
    }
}

let s:Rectangle=new Rectangle(1,10,20);
console.log(s.id, s.getArea());