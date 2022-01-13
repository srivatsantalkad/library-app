// The book array will be a global var.
const bookLibrary = [];

// Create reference to add book button, and the books container.
const addBook = document.querySelector(".add-book");
const booksContainer = document.querySelector(".books-container");

// Create event listener for add book
addBook.addEventListener('click', () => {
    addBookToLibrary();    
});

// Another global var is the book object constructor.
function Book(title, author, numOfPages, read) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.read = read;
}

// This function will create a book object, provided the user input, and return it.
function createBook() {
    // Get user input.
    let bookInfo = getUserInput();

    // Add book to bookLibrary global var.
    newBook = new Book(bookInfo[0], bookInfo[1], bookInfo[2], bookInfo[3]);

    return newBook;
}

// This function will display the newly added book to the page.
function displayBook(newBook) {
    // Create new divs that will contain the metadeta.
    let bookDiv = document.createElement('div');
    let bookTitleDiv = document.createElement('div');
    let bookAuthorDiv = document.createElement('div');
    let bookPagesDiv = document.createElement('div');
    let bookReadDiv = document.createElement('div');

    // Set the divs to its corresponding text.
    bookTitleDiv.innerText = "Title: " + (newBook.title == "" ? "N/A" : newBook.title);
    bookAuthorDiv.innerText = "Author: " + (newBook.author == "" ? "N/A" : newBook.author);
    bookPagesDiv.innerText = "# of Pages: " + (newBook.numOfPages == "" ? "N/A" : newBook.numOfPages);
    bookReadDiv.innerText = "Reading Status: " + (newBook.read == "" ? "N/A" : newBook.read);

    bookDiv.appendChild(bookTitleDiv);
    bookDiv.appendChild(bookAuthorDiv);
    bookDiv.appendChild(bookPagesDiv);
    bookDiv.appendChild(bookReadDiv);


    // Create new button that will be used to remove the book from the list.
    let removeBook = document.createElement('button');
    removeBook.innerText = "Remove Book";
    bookDiv.appendChild(removeBook);
    removeBook.addEventListener('click', () => {
        booksContainer.removeChild(bookDiv);
    });

    // Create new button that will be used to toggle the read status of the book.
    let toggleRead = document.createElement('button');
    bookDiv.appendChild(toggleRead);
    toggleRead.innerText = (newBook.read == "Read") ? "Unread book" : "Fnish book";
    toggleRead.addEventListener('click', () => {
        if (newBook.read == "Read") {
            newBook.read = "Unread";
            bookReadDiv.innerText = "Reading Status: Unread";
        } else {
            newBook.read = "Read";
            bookReadDiv.innerText = "Reading Status: Read";
        }
    });

    bookDiv.style.cssText = "display:flex; flex-direction: column; justify-content: center; align-items: center; border: 1px solid black; border-radius: 20px; margin: 1em; padding: 1em; gap: 1em";
    booksContainer.appendChild(bookDiv);
}

// This function gets user input from form and returns user input.
function getUserInput() {
    // Prompt user for book title.
    let bookTitle = document.querySelector('#book-title').value;

    // Prompt user for book author.
    let bookAuthor = document.querySelector('#book-author').value;

    // Prompt user for number of pages.
    let numberOfPages = document.querySelector('#book-pages').value;

    // Prompt user for whether they have read the book
    let bookRead = document.querySelector('#book-read').checked ? "Read" : "Unread";

    // Clear contents of form
    document.querySelector('#book-title').value = "";
    document.querySelector('#book-author').value = "";
    document.querySelector('#book-pages').value = "";
    document.querySelector('#book-read').checked = false;

    return [bookTitle, bookAuthor, numberOfPages, bookRead];
}

// This function stores a book object into global var "bookLibrary".
function addBookToLibrary() {
    let newBook = createBook();
    bookLibrary.push(newBook);
    displayBook(newBook);
}





