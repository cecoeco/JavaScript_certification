function randomRange(myMin, myMax) {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
  // Multiply by the range (max - min + 1) to get a number in the specified range
  // Use Math.floor() to round down to the nearest whole number
  // Add the minimum value to ensure the number is in the specified range
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
