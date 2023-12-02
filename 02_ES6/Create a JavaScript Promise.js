// Declare a variable named makeServerRequest and assign a new Promise to it
const makeServerRequest = new Promise((resolve, reject) => {
  // Your asynchronous code goes here
  
  // For example, you might simulate a server request with setTimeout
  setTimeout(() => {
    // If the request is successful, call resolve
    // resolve(result);

    // If there's an error, call reject
    // reject(error);
  }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
});
