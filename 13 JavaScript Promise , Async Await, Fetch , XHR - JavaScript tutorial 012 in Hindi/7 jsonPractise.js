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

//ye onload function tabhi chaly ga jab readyState 4 ho jai gi
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


// staus code list
// 1xx: informational response – the request was received, continuing process
// 2xx: successful – the request was successfully received, understood, and accepted
// 3xx: redirection – further action needs to be taken in order to complete the request
// 4xx: client error – the request contains bad syntax or cannot be fulfilled
// 5xx: server error – the server failed to fulfil an apparently valid request


// readyStates

// Value	State	    Description
// 0	   (UNSENT)	Client has been created. open() not called  yet.
// 1	   (OPENED)	open() has been called.
// 2	  (HEADERS_RECEIVED)	send() has been called,     and  headers and status are available.
// 3	  (LOADING)	Downloading; responseText holds partial data.
// 4	  (DONE)	The operation is complete. 