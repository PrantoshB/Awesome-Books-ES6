export const registeredBooks = document.querySelector(".book-list");
export const author = document.querySelector(".author");
export const title = document.querySelector(".title");






export const addBooks = (Books) => {
  registeredBooks.innerHTML = "";
  for (let i = 0; i < Books.length; i++) {
    registeredBooks.innerHTML += `
      <div class="title-and-author"> 
        <p class="Title">"${Books[i].title}" by  ${Books[i].author}</p>
        <button class="button remove-books" id="${i}">Remove</button>
      </div>
     `;
    title.value = "";
    author.value = "";
    title.focus();
  }
};
export const deleteBook = (el) => {
  if (el.classList.contains("remove-books")) {
    el.parentElement.remove();
  }
};

