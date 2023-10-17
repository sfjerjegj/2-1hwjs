const jsonData = '{"key": "value"}' 

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const shouldReject = true; 
    if (shouldReject) {
      reject("Произошла ошибка!"); 
    } else {
      resolve(jsonData); 
    }
  }, 2000);
});

promise
  .catch((error) => {
    console.error("Произошла ошибка:", error); 
  });