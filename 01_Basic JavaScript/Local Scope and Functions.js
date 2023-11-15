function myLocalScope() {
    // Declare a local variable myVar
    const myVar = "some value";
  
    console.log('inside myLocalScope', myVar);
  }
  
  myLocalScope();
  
  // This will throw a ReferenceError because myVar is not defined outside the function
  // console.log('outside myLocalScope', myVar);
  