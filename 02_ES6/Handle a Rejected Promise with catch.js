const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// Use the catch method to handle the rejected state
makeServerRequest
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    // Log the error to the console using console.log
    console.log(error);
  });
