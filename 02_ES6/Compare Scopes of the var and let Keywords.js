function checkScope() {
  // Declare a variable i with function scope and initialize it to 'function scope'
  let i = 'function scope';

  // Check a condition (true) - this block has its own scope
  if (true) {
    // Declare a new variable i with block scope (shadows the outer i)
    let i = 'block scope';
    
    // Log the value of the inner i (block scope)
    console.log('Block scope i is: ', i);
  }

  // Log the value of the outer i (function scope)
  console.log('Function scope i is: ', i);

  // Return the value of the outer i (function scope)
  return i;
}
