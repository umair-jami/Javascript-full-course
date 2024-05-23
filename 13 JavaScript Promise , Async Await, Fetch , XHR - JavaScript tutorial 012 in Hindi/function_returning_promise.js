// function_returning_promise
const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];

function ricePromise() {
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetable") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      //iss resolve or reject parameter ki value object array,ya string bhi ho sakti hai
      resolve({ value: "Fried Rice" });
    } else {
      reject("something is missing from bucket");
    }
  });
}

ricePromise()
  .then(
    (myfriedRice) => {
      console.log("lets eat", myfriedRice);
    }
    //jab promise reject hoga tab ye run hoga
    //   (error) => {
    //     console.log(error);
    //   }
  )
  .catch((error) => {
    console.log(error);
  });
