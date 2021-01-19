let book1 = { title: "ts", price: 200 };
console.log(book1.title, book1.price);
//--------------------------------
// book.id=1; //error
let book2: { title: string, price: number };
book2 = { title: "js", price: 300 };
console.log(book2.title, book2.price);
console.log("=================================");
interface Book {
    title: string;
    price: number;
}

let books: Array<Book> = [book1, book2];
books.forEach(book => {
    console.log(book.title, book.price);
});