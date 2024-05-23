//saync await
//we use .then again and again in promise chaining
//we can remove this by using async await

const URL = "https://jsonplaceholder.typicode.com/posts";

//with fetch method
//when we use async in front of any function
//then ye funciton always return promise on calling
//yahan per await tab tak wait kery ga jab tak ye kisi value ky sath resolve ni ho jata
// async function getPost() {
//   const response = await fetch(URL);
//   if (!response.ok) {
//     throw new Error("something went wrong");
//   }
//   const data = await response.json();
//   return data;
// }

//if we use arrow function
//then we use async before parenthesis
const getPost = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const data = await response.json();
  return data;
};

getPost()
  .then((mydata) => {
    console.log(mydata);
  })
  .catch((error) => {
    console.log(new Error("something went wrong"));
  });

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error);
//   });
