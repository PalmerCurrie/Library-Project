let myLibrary = [];

const Book = (title, author, pages, id) => {
    return {title, author, pages, id}
}

const container =  document.getElementById("container")
container.className = "book-container"

// Form to enter in new book information.
const createBookForm = () => {
    const divForm = document.createElement("div")
    const titleInput = document.createElement("input")
    const authorInput = document.createElement("input")
    const pagesInput = document.createElement("input")
    const addBook = document.createElement("div")

    divForm.setAttribute("id", "createBookForm");
    divForm.className = "book-form";

    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("placeholder", "Title");
    titleInput.setAttribute("type", "text")
    titleInput.className = "book-form-input";

    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("placeholder", "Author");
    authorInput.setAttribute("type", "text")
    authorInput.className = "book-form-input";

    pagesInput.setAttribute("id", "pages");
    pagesInput.setAttribute("placeholder", "# of Pages");
    pagesInput.setAttribute("type", "number")
    pagesInput.className = "book-form-input";

    divForm.setAttribute("style", "display: none;") // commented off while developing

    titleInput.setAttribute("placeholder", "Title")
    authorInput.setAttribute("placeholder", "Author")
    pagesInput.setAttribute("placeholder", "# of Pages")

    addBook.className = "button"
    // addBook.setAttribute("type", "submit")
    addBook.innerHTML = "Add Book"

    addBook.addEventListener("click", () => { 
        addBookToLibrary()
        // divForm.setAttribute("style", "display: none;") // commented off while developing
      })

      divForm.appendChild(titleInput)
      divForm.appendChild(authorInput)
      divForm.appendChild(pagesInput)
      divForm.appendChild(addBook)
      header.appendChild(divForm)
}
createBookForm()

// adds the book objects to the myLibrary array
const addBookToLibrary = () => {
    let newBook = getBookFromInput()
    myLibrary.push(newBook)
    updateLibrary()
}

// creates the book object from the user input in the form
const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    return Book(title, author, pages)
}

// opens form on click
function formButton() {
    const openFormButton = document.getElementById("openFormButton");
    openFormButton.addEventListener("click", () => {
        const divForm = document.getElementById("createBookForm")
        divForm.setAttribute("style", "display: block;");   // commented off while developing
    });
}
formButton()

// creates the book card that is seen on website
const createBookCard = (book) => {

    const bookCard = document.createElement("div")
    const title = document.createElement("h4")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const deleteBookButton = document.createElement("div")


    bookCard.className = "book-card"
    deleteBookButton.className = "button"
    deleteBookButton.innerHTML = "Delete"

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(deleteBookButton)
    container.appendChild(bookCard)

    deleteBookButton.addEventListener('click', () => {
        let deleteBookIndex = book.id
        myLibrary.splice(deleteBookIndex, 1)
        updateLibrary()
    })

    title.textContent = `${book.title}`  
    author.textContent = book.author
    pages.textContent = `${book.pages} Pages`
}

// updates the container based on the newest array information
function updateLibrary(){
    resetLibrary()
    createBookID()
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i]
        createBookCard(book)
    }
}

// adds an id to each of the books, based on its index in the myLibrary array
function createBookID(){
    myLibrary = myLibrary.map((book, index) => {
        return {... book, id: index}
    });
}

// resets the container to blank,
function resetLibrary(){
    container.innerHTML = ""
}


/* 
To Do:
Add read / not read button to book cards
add feature to edit books
Local Storage
*/



