let employee = {
    empName: "Mary",
    age: 29
};
employee.showInfo=function () {
    return this.empName+", "+this.age;
};
console.log(employee.showInfo());
