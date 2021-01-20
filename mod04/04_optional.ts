namespace mod04{
    function add(i:number, j?:number):number {
        if (j===undefined) {
            return i;
        } else {
            return i+j;
        }
       
    }
    console.log(add(100,50));
    console.log(add(100));
}