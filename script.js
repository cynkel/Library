const collection = [];
const newBookButton = document.querySelector(".nbbutton");
const booksContainer = document.querySelector(".booksContainer");
const bookCard = document.querySelector(".bookCard");
const titleDiv = document.querySelector(".title");
const authorDiv = document.querySelector(".name");
const noPages = document.querySelector(".nop");
const modal = document.querySelector(".modal-form");
const closeButton = document.querySelector(".close");

newBookButton.addEventListener("click", () => modal.style.display = "block");
closeButton.addEventListener("click", () => modal.style.display = "none");

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

function addBookToCollection() {
    const book = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
    collection.push(book);
}

function showBooks() {
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        console.log(element);
    }
}

addBookToCollection();
addBookToCollection();
addBookToCollection();
addBookToCollection();
addBookToCollection();
addBookToCollection();
addBookToCollection();
addBookToCollection();
showBooks();