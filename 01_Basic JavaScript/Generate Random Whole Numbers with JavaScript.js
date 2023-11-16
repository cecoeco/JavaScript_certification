function randomWholeNum() {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
  // Multiply by 10 to get a number in the range from 0 to 9
  // Use Math.floor() to round down to the nearest whole number
  return Math.floor(Math.random() * 10);
}
