const navItem = document.querySelector('.nav_items');
const container = document.querySelector('.container');
const bookDiv = document.querySelector('.list_books > ul');
const bookList = JSON.parse(localStorage.getItem('book_info')) || [];
const form = document.querySelector('.add-book-form');
const time = document.querySelector('.time');

export {
  navItem, container, bookDiv, bookList, form, time,
};
