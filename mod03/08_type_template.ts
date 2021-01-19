namespace mod03{
    let employee = {
        empName: "Mary",
        age: 29,
        showInfo:function () {
            
        }
    };
    employee.showInfo=function () {
        return this.empName+", "+this.age;
    };
    console.log(employee.showInfo());
    
}