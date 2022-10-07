let myLibrary = [];


function Book(name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.index = myLibrary.length;
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}