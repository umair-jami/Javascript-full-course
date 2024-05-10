//synchronous programming vs asynchronous programming
//synchronous programming
//synchronous programming single threaded

//synchronus programming execute line by line
// console.log("script start");
// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }
// console.log("script end");

//setTimeout

console.log("script start");
// function hello() {
//   console.log("hello world");
// }

//there setTimeout take time into milli second mean 1000==1second

//we can write function inside setTimeout also

//setTimeout gives us id if we want that the setTimeout function works no more then we should use clearTimeout
const id = setTimeout(() => {
  console.log("hello world");
}, 1000);
console.log("setTimeout id is", id);
console.log("clearing time out");
clearTimeout(id);
// setTimeout(hello, 1000);
for (let i = 1; i < 10; i++) {
  console.log("....");
}
console.log("script end");
