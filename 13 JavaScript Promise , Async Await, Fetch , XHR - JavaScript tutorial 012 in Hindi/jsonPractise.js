const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     console.log(xhr.response);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(typeof data);
//   }
// };
xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};
xhr.send();
// xhr.onreadystatechange = function () {
//   //   console.log(xhr.readyState);
//   //typeof xhr response is "string"
//   //but we converted it into object
//   if (xhr.readyState === 2) {
//     // console.log(typeof xhr.response);
//     console.log(xhr);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(typeof data);
//   }
// };
