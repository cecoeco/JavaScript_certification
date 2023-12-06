function confirmEnding(str, target) {
  // Use substring to get the ending characters of the string
  let ending = str.substring(str.length - target.length);

  // Compare the ending with the target
  return ending === target;
}

confirmEnding("Bastian", "n");