function getColor(c: string | IColor) {
    if (typeof c === "string") {
        console.log(c.toUpperCase());
    } else {
        console.log(c.color);
    }
}
getColor("red");
interface IColor{
    color:string
}
class Color implements IColor{
    constructor(public color= "green", name="test"){

    }
}
let i:IColor = { color: "green" }
let j:Color = new Color("red","test")
getColor(i);
getColor(j);