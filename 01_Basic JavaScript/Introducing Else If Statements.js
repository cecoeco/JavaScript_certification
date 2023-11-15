function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  
  // Test the function
  console.log(testElseIf(7));  // This should return "Between 5 and 10"
  