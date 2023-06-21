
let library = [];

const popUp = document.querySelector('.pop-up');
const newbookbtn = document.querySelector('.newbookbtn');
const title = document.getElementById('title')
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const addBook = document.querySelector('.addBook');
const form = document.querySelector('form');

//constructor for book object
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addNewBook(){
   let newBookToAdd = new Book(title.value, author.value, pages.value);
   library.push(newBookToAdd);
}

newbookbtn.addEventListener('click', () => {
    popUp.classList.add('show');
});

addBook.addEventListener('click', (event) => {
    addNewBook();
    form.reset();
    popUp.classList.remove('show');
    for(let e=0; e <library.length;e++){
        console.log(library[e].title);
    }
    console.log(library);
    event.preventDefault();
});
