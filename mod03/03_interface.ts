let book={title:"ts",price:200};
console.log(book.title,book.price);
//--------------------------------
// book.id=1; //error
let book2:{title:string, price:number};
book2={title:"js",price:300};
console.log(book2.title,book2.price);
console.log("=================================");
interface Book{
    title:string;
    price:number;
}

let books:Book[]=[book,book2];
books.forEach(element => {
    console.log(element.title, element.price);
});