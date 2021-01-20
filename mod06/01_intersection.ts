interface IEmployee {
    id: number;
    name: string;
}
interface ISales {
    bonus: number;
}
//class 實作兩個 interface
class Sales implements ISales , IEmployee{
    constructor(public id: number,public name: string,public bonus: number){
        
    }
}
//type Sales = IEmployee & ISales;

let s: Sales = {
    id: 1,
    name: 'mary',
    bonus: 1000
};

console.log(s.id, s.name, s.bonus);