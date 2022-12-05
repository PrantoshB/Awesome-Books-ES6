import {title, author} from './add_and_remove.js'
import {addBooks, registeredBooks, deleteBook} from './add_and_remove.js'

import { Books } from './onload.js'
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
document.querySelector(".booksdata").addEventListener("click", (e) => {
    Books.splice(e.target.id, 1);
    localStorage.setItem("Books", JSON.stringify(Books));
    deleteBook(e.target);
});
  
const addButton = document.querySelector(".addbook");

addButton.addEventListener("click", (e) => {
  if (title.value === "" || author.value === "") {
    e.preventDefault();
  } else {
    const book = new Book(title.value, author.value);
    Books.push(book);
    addBooks(Books);
    localStorage.setItem("Books", JSON.stringify(Books));
    document.querySelector(".emptymsg").style.display = "none";
    registeredBooks.style.border = "1px solid black";
  }
});  