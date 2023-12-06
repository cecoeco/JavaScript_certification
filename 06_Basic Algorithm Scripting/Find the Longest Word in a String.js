function findLongestWordLength(str) {
  // Split the string into an array of words
  let wordsArray = str.split(' ');

  // Initialize a variable to store the length of the longest word
  let longestWordLength = 0;

  // Iterate through the array of words
  for (let i = 0; i < wordsArray.length; i++) {
    // Update the longestWordLength if the current word is longer
    if (wordsArray[i].length > longestWordLength) {
      longestWordLength = wordsArray[i].length;
    }
  }

  return longestWordLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // Output: 6
console.log(findLongestWordLength("May the force be with you")); // Output: 5
console.log(findLongestWordLength("Google do a barrel roll")); // Output: 6
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // Output: 8
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // Output: 19
