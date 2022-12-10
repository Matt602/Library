let myLibrary = [];



function Book(name, author, readStatus) {//, pages, readStatus) {
    this.title = name;
    this.author = author;
    //this.pages = pages;
    this.readStatus = readStatus;
    //this.index = myLibrary.length;
}


function addBookToLibrary(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let readStatus = 'no';
    let b = new Book(title, author, readStatus);
    myLibrary.push(b);
    deleteForm();
    clearTable();
    displayBooks();
    let hello = JSON.stringify(myLibrary);
    console.log(hello);
    //console.log(title);
}

function createForm() {
    const container = document.querySelector('#container');
    let form = document.createElement('form');
    form.setAttribute("action", "/home/matthew/repos/Library");
    form.setAttribute("method", "POST");
    form.setAttribute("id", "myForm")
    form.setAttribute("type", "submit")


    let titleLabel = document.createElement('label');
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Book title ";
    let titleInput = document.createElement('input');
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("required", "");

    let authorLabel = document.createElement('label');
    authorLabel.setAttribute("for", "author");
    authorLabel.textContent = "Author ";
    let authorInput = document.createElement('input');
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("required", "");



    let submitButton = document.createElement('button');
    submitButton.setAttribute("onclick", "addBookToLibrary(event)");
    submitButton.textContent = "Add Book";

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(authorLabel);
    form.appendChild(authorInput);
    form.appendChild(submitButton);
    container.appendChild(form);
}

function deleteForm() {
    const form = document.querySelector('#myForm');
    form.remove();
}

function clearTable() {
    document.querySelectorAll('.bookData').forEach(e => e.remove());
}

// function that displays all the books in the array, myLibrary
function displayBooks() {
    let table = document.querySelector('.table-books');
    for(let i = 0; i < myLibrary.length; i++)
    {
        let newBook = document.createElement('tr');
        newBook.setAttribute("class", "bookData");
        let title = document.createElement('td');
        title.textContent = myLibrary[i]['title'];
        let author = document.createElement('td');
        author.textContent = myLibrary[i]['author'];
        let readStatus = document.createElement('td');
        let sub = document.createElement('p');
        sub.innerHTML = myLibrary[i]['readStatus'];
        readStatus.appendChild(sub);

        
        




        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(readStatus);
        table.appendChild(newBook);
    }

}

// event listener for button to bring up form to put info for
// new books

const nButton = document.querySelector('.new-book');
nButton.addEventListener('click', () => {
    createForm();
});