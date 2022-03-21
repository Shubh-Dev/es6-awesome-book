export const removeBook = (bookIndex) => {
    allBooks.removeBook(bookIndex);
    reload();
  };
