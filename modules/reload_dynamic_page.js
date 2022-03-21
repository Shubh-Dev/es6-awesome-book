function reload() {
    booksContainer.innerHTML = allBooks.books
      .map(
        (
          bookItem,
          index,
        ) => `<div class="book-item"><p><strong>"${bookItem.title}" by ${bookItem.author}.</strong></p>
        <button onclick="removeBook(${index})">Remove</button>
        </div>`,
      )
      .join('');
    if (allBooks.books.length === 0) {
      booksContainer.style.cssText = 'border: none;';
    } else {
      booksContainer.style.cssText = 'border: 3px black solid;';
    }
  }
  