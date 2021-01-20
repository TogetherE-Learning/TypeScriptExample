namespace mod04{
    function add(i:number, j?:number):number {
        if (j===undefined) {
            return i;
        } else {
            return i+j;
        }
    }
    function sub(i:number, j?:number):number {
        if (typeof j === 'undefined') {
            return i;
        } else {
            return i-j;
        }
    }
    console.log(add(100,50));
    console.log(add(100));
    console.log(sub(100,50));
    console.log(sub(100));
}