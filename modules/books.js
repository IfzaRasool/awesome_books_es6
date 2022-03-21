// read books on UI
export const readBook = (books, bookDiv) => {
  bookDiv.innerHTML = '';
  bookDiv.style.borderColor = 'white';

  if (books) {
    books.forEach((book, index) => {
      bookDiv.style.borderColor = '#091a40';
      const li = document.createElement('li');
      li.innerHTML = `
          <span> <q>${book.title_name}</q> by ${book.author_name} </span>
          <span>
            <button class="btn" data-id="${index}">Remove</button>
          </span>
         `;
      bookDiv.appendChild(li);
    });
  }
};

// add new book
export const addBook = (e, bookList, form, bookDiv) => {
  e.preventDefault();
  bookList.push({
    title_name: form.elements.title.value,
    author_name: form.elements.author.value,
  });
  // update local storage
  localStorage.setItem('book_info', JSON.stringify(bookList));
  readBook(bookList, bookDiv);

  // clear form
  form.elements.title.value = '';
  form.elements.author.value = '';
};

// delete a book
export const removeBook = (btn, bookList, bookDiv) => {
  bookList = bookList.filter((book, index) => index !== Number(btn.dataset.id));
  localStorage.setItem('book_info', JSON.stringify(bookList));
  readBook(bookList, bookDiv);
};
