let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Using a character class for vowels with global (g) and case-insensitive (i) flags
let result = quoteSample.match(vowelRegex);
