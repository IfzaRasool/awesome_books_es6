import switchSection from './modules/switchSection.js';
import { bookList, bookDiv, form } from './modules/queries.js';
import { readBook, addBook, removeBook } from './modules/books.js';

// switch between sections
switchSection();

// read books from local storage
readBook(bookList, bookDiv);

// create a book
form.addEventListener('submit', (e) => addBook(e, bookList, form, bookDiv));

// delete book
bookDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    removeBook(e.target, bookList, bookDiv);
  }
});
