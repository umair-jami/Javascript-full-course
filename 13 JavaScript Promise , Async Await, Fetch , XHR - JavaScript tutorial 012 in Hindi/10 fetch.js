//fetch
//GET method is use to get or read data
//POST is use for creat data on server
//fetch tabhi reject hoga jab hamary pass network related problem hoga
//so we use if condition
const URL = "https://jsonplaceholder.typicode.com/postss";

fetch(URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something Went Wrong!!!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });
