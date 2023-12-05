function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  // Iterate through the outer array
  for (let i = 0; i < arr.length; i++) {
    // Check if the specified element is not present in the current nested array
    if (arr[i].indexOf(elem) === -1) {
      // Add the entire array to the newArr
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));