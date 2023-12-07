// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  // Create a new array by combining the existing array and the new bookName
  const newList = [...bookList, bookName];
  return newList;
}

function remove(bookList, bookName) {
  // Find the index of the bookName in the array
  const bookIndex = bookList.indexOf(bookName);
  if (bookIndex >= 0) {
    // Create a new array by excluding the book at the found index
    const newList = [...bookList.slice(0, bookIndex), ...bookList.slice(bookIndex + 1)];
    return newList;
  }
  // If the bookName is not found, return the original array
  return bookList;
}
