const collection = [];
const newBookButton = document.querySelector(".nbbutton");
const booksContainer = document.querySelector(".booksContainer");
const noPages = document.querySelector(".nop");
const modal = document.querySelector(".modal-form");
const closeButton = document.querySelector(".close");


function createNewBook(title, author, pages) {
    const bookCard = document.createElement("div");
    bookCard.classList.toggle("bookCard");

    const titleDiv = document.createElement("div");
    titleDiv.classList.toggle("title");
    titleDiv.textContent = title;
    bookCard.appendChild(titleDiv);

    const authorDiv = document.createElement("div");
    authorDiv.classList.toggle("author");
    bookCard.appendChild(authorDiv);

    const bySpan = document.createElement("span");
    bySpan.classList.toggle("by");
    bySpan.textContent = "By ";
    authorDiv.appendChild(bySpan);

    const nameSpan = document.createElement("span");
    nameSpan.classList.toggle("name");
    nameSpan.textContent = author;
    authorDiv.appendChild(nameSpan);

    const pagesDiv = document.createElement("div");
    pagesDiv.classList.toggle("pages");
    bookCard.appendChild(pagesDiv);

    const numberOfPagesSpan = document.createElement("span");
    numberOfPagesSpan.classList.toggle("nop");
    numberOfPagesSpan.textContent = pages + " ";
    pagesDiv.appendChild(numberOfPagesSpan);

    const spanPages = document.createElement("span");
    spanPages.textContent = "pages";
    pagesDiv.appendChild(spanPages);

    booksContainer.appendChild(bookCard);
}

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
        createNewBook(collection[index].title, collection[index].author, collection[index].pages);
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
addBookToCollection();
showBooks();