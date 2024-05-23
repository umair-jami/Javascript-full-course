const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

// console.log(xhr);
//step 1
// console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);
//browser iss function ko us time call kery ga jab iss ki ready state change ho gi
//jab tak xhr readystate 4 ni ho jati tab tak koi respose ni ata
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

xhr.onload = function () {
  console.log(typeof xhr.response);
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};

xhr.send();
