//primise
//promises are Asaynchromus programming
//there we produce promise
console.log("script start");
const bucket = ["coffee", "chips", "vegetable", "sal", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
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

//consume promise

//how to consume
//there "then" is method which takes callback function as an input

//agar idher if condition true hoi to "then" wali side chaly gi agar else wala hisa sahi howa to "catch" wali side run hogi
friedRicePromise
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

setTimeout(() => {
  console.log("hello from setTimeOut");
}, 1000);
for (let i = 0; i < 100; i++) {
  console.log(Math.random(), i);
}
console.log("script end");
