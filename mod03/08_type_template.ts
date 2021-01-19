namespace mod03 {
    let employee = {
        empName: "Mary",
        age: 29,
        showInfo: (function () {

        })
    };
    employee.showInfo = function () {
        return this.empName + ", " + this.age;
    };
    console.log(employee.showInfo());

}
namespace mod03 {
    let employee: {
        empName: string;
        age: number;
        showInfo():string;
    };
    employee = {
        age : 29,
        empName : "Tony",
        showInfo : function () {
            return this.empName + ", " + this.age;
        }
    };
    console.log(employee.showInfo());
}