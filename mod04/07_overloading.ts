namespace mod04 {
    function add(x: number, y: number): number;
    function add(x: string, y: string): string;
    function add(x: string): string;
    function add(x: any, y?: any): any {

        switch(typeof y){
            case "number":
                return x+y;
            case "string":
                return (<string>x).toUpperCase() +", "+y.toUpperCase();
            case undefined:
                return (x as string).toUpperCase();
            default:
                return null;
        }
    }

    console.log(add(100,50));
    console.log(add("aaa","bbb"));
    console.log(add("xxx"));
}