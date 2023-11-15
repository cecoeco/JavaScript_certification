const s = [5, 7, 2];

function editInPlace() {
  // Use splice to remove elements from the original array and add new elements in their place
  s.splice(0, s.length, 2, 5, 7);
}

editInPlace();

console.log(s); // Output will be [2, 5, 7]
