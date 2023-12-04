let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Match characters that are not numbers or vowels (g: global, i: case-insensitive)
let result = quoteSample.match(myRegex); // Store the result of the match
