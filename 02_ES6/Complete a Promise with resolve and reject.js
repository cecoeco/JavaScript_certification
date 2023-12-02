const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true; // Set to true for the sake of example, you can change it as needed
  
  if (responseFromServer) {
    // Call resolve to successfully complete the promise
    resolve("We got the data");
  } else {
    // Call reject to indicate that the promise failed
    reject("Data not received");
  }
});
