let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Match letters h to s and numbers 2 to 6 (g: global, i: case-insensitive)
let result = quoteSample.match(myRegex); // Store the result of the match
