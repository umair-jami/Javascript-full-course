//Network handling

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
//200 and 300 ky beech agar status code hoga to hum ko response nahi milyga
xhr.open("GET", URL);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    console.log(data);

    //this is the method for geting data of any ID

    // const id = data[3].id;
    // const URL2 = `${URL}/${id}`;
    // console.log(URL2);
    // const xhr2 = new XMLHttpRequest();
    // xhr2.open("GET", URL2);
    // xhr2.onload = () => {
    //   const data2 = JSON.parse(xhr2.response);
    //   console.log(data2);
    // };
    // xhr2.send();
  } else {
    console.log("Someting went Wrong");
  }
};

//network related error
//agar network disconnect ho jata hai ya koi bhi network failue hai tab ye error we code run ho ga

xhr.onerror = () => {
  console.log("Network Issue");
};
xhr.send();
