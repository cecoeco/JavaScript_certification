function largestOfFour(arr) {
  // Create an array to store the largest numbers
  let largestNumbers = [];

  // Iterate through each sub-array
  for (let i = 0; i < arr.length; i++) {
    // Find the largest number in the current sub-array
    let currentLargest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > currentLargest) {
        currentLargest = arr[i][j];
      }
    }

    // Add the largest number to the array
    largestNumbers.push(currentLargest);
  }

  return largestNumbers;
}