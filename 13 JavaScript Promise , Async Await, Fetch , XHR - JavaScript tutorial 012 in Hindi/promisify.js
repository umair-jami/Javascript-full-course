const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went Wrong"));
      }
    };
    xhr.onerror = () => {
      reject(new Error("Something went wrong"));
    };
    xhr.send();
  });
}
sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    const id = data[3].id;
    return id;
  })
  .then((id) => {
    const url = `${URL}/${id}`;
    return sendRequest("GET", url);
  })
  .then((newResponse) => {
    const data2 = JSON.parse(newResponse);
    console.log(data2);
  })
  .catch((error) => {
    console.log(error);
  });
