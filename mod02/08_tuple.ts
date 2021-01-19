//tuple 可以放不同的型別，數量固定
var coordinate: [number, number];
coordinate = [10,20];
console.log(coordinate[0],coordinate[1]);

var data:[number,string ,Date]=[100,"aaa",new Date()];
console.log(data[0]+50, data[1].toUpperCase(), data[2].toLocaleTimeString("zh-tw"));