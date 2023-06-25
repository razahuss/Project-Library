/* storage for the library */
let library = [];

const popUp = document.querySelector('.pop-up');
const newbookbtn = document.querySelector('.newbookbtn');
const title = document.getElementById('title')
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const addBook = document.querySelector('.addBook');
const form = document.querySelector('form');
const read = document.getElementById('read');
const libraryContainer = document.querySelector('.library-container');

//constructor for book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/* adds a new book to the library array*/
function addNewBook(){
   let newBookToAdd = new Book(title.value, author.value, pages.value, read.checked);
   library.push(newBookToAdd);
}

/*event listener for when clicking on the Add Book button
to show the popup for adding a book*/
newbookbtn.addEventListener('click', () => {
    popUp.classList.add('show');
});

/* displays the books from the array*/
function displayBooks(){
    libraryContainer.innerHTML = "";
    for(let book = 0; book < library.length; book++){
        let bookTitle = library[book].title;
        let bookAuthor = library[book].author;
        let bookPages = library[book].pages;
        let bookRead = library[book].read;

        let card = document.createElement('div');
        card.classList.add('card');

        card.dataset.num = book;

        let titleP = document.createElement('p');
        titleP.innerHTML = "Title: " + bookTitle;
        card.appendChild(titleP);

        let authorP = document.createElement('p');
        authorP.innerHTML = "Author: " + bookAuthor;
        card.appendChild(authorP);

        let pagesP = document.createElement('p');
        pagesP.innerHTML = "Pages Read: " + bookPages;
        card.appendChild(pagesP);

        let deleteBook = document.createElement('button');
        deleteBook.innerHTML = "Delete";
        deleteBook.dataset.num = book;
        deleteBook.classList.add('delete-book-btn')
        card.appendChild(deleteBook);

        let isReadLabel = document.createElement('label');
        isReadLabel.setAttribute('for', 'read'+book);
        isReadLabel.innerHTML = "read";
        //card.appendChild(isReadLabel);

        let isread = document.createElement('input');
        isread.setAttribute('type', 'checkbox');
        isread.setAttribute('id', 'read'+book);

        let cardIsReadDiv = document.createElement('div');
        cardIsReadDiv.classList.add('cardIsReadDiv');
        cardIsReadDiv.appendChild(isReadLabel);
        cardIsReadDiv.appendChild(isread);
        card.appendChild(cardIsReadDiv);

        if(bookRead){
            isread.checked = true;
        }
        isread.addEventListener('click', ()=>{
            let indexForRead = library.indexOf(library[book]);
            if(library[indexForRead].read){
                library[indexForRead].read = false;
            }
            else{
                library[indexForRead].read = true;
            }
        });
        //card.appendChild(isread);

        deleteBook.addEventListener('click', () => {
            deleteBook.parentElement.remove();
            let deleteIndex = library.indexOf(library[book]);
            library.splice(deleteIndex, 1);
            console.log(library);
        });

        libraryContainer.appendChild(card);
    }
}

/*when a book is added to the storage then it is automatically
displayed due to this function*/
addBook.addEventListener('click', (event) => {
    addNewBook();
    form.reset();
    displayBooks();
    popUp.classList.remove('show');
    event.preventDefault();
});
