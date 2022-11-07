let myLibrary = [];


function Book(name, author) {//, pages, readStatus) {
    this.name = name;
    this.author = author;
    //this.pages = pages;
    //this.readStatus = readStatus;
    //this.index = myLibrary.length;
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createForm() {
    const container = document.querySelector('#container');
    let form = document.createElement('form');
    form.setAttribute("action", "http://httpbin.org/post");
    form.setAttribute("method", "POST")
    let titleLabel = document.createElement('label');
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Book title ";
    let titleInput = document.createElement('input');
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", "")
    let submitButton = document.createElement('button');
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Confirm";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(submitButton);
    container.appendChild(form);
}

// event listener for button to bring up form to put info for
// new books

const nButton = document.querySelector('.new-book');
nButton.addEventListener('click', () => {
    createForm();
});