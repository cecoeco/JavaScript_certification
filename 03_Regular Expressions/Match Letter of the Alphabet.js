let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Match any lowercase letter (g: global, i: case-insensitive)
let result = quoteSample.match(alphabetRegex); // Store the result of the match
