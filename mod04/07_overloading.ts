namespace mod04 {
    function add(x: number, y: number): number;
    function add(x: string, y: string): string;
    function add(x: string): string;
    function add(x: any, y?: any): any {
        if (typeof y==="number") {
            return x + y; 
        }
        if (typeof y==="string") {
           return (<string>x).toUpperCase() +", "+y.toUpperCase();
        }

        if (y===undefined) {
            return (x as string).toUpperCase();
        }
      
    }

    console.log(add(100,50));
    console.log(add("aaa","bbb"));
    console.log(add("xxx"));
}