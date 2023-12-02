const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// Use the then method to handle the fulfilled state
makeServerRequest.then(result => {
  // Log the result to the console
  console.log(result);
});
