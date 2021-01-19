//匿名型別
//不給指定型別，有給予的值來決定
//注意一定要先給值不能之後再給，不然會變成 any
namespace mod02 {
    let i = 10;
    // i="aaa"; //error

    //    function add(i=0,j=0) {
    //        return i+j;
    //    }

    function add(i: number, j: number) {
        return i + j;
    }
    console.log(add(100,200));

    // let j; //undefined, any
    // j=10;
    // j="aaa";

    let j:number; 
    j=10;
  

    console.log(j);
}