const collection = [];
const newBookButton = document.querySelector(".nbbutton");
const booksContainer = document.querySelector(".booksContainer");
const noPages = document.querySelector(".nop");
const modal = document.querySelector(".modal-form");
const closeButton = document.querySelector(".close");
const newBookForm = document.querySelector("#bookForm");

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

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

function addBookToCollection(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    collection.push(book);
}

function showBooks() {
    for (let index = 0; index < collection.length; index++) {
        createNewBook(collection[index].title, collection[index].author, collection[index].pages);
    }
}

function updateBookLibrary() {
    let booksContainerChild = booksContainer.lastElementChild;
    while (booksContainerChild) {
        booksContainer.removeChild(booksContainerChild);
        booksContainerChild = booksContainer.lastElementChild;
    }
    showBooks();
} 

newBookButton.addEventListener("click", () => modal.style.display = "block");
closeButton.addEventListener("click", () => modal.style.display = "none");

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let bookTitle = document.querySelector("#title");
    let bookAuthor = document.querySelector("#bookAuthor");
    let numberOfPages = document.querySelector("#numberOfPagesBox");
    addBookToCollection(bookTitle.value, bookAuthor.value, numberOfPages.value);
    updateBookLibrary();
});