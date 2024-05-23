//promise.resolve
//promise chaining

Promise.resolve(5).then((value) => {
  console.log(value);
});

//then() method always return promise
//example

//promise chaining
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}
myPromise()
  .then((value) => {
    console.log(value);
    value += "bar";
    //there then return promise not only valeu because we use again then method to see value
    //internely kam kush iss tarah sy ho raha hai
    // return Promise.resolve(value);
    //because we cannot use then on string we can use then only on promise
    return value;
  })
  .then((value) => {
    console.log(value);
    value += "baaz";
    return value;
  })
  .then((value) => {
    console.log(value);
  });
