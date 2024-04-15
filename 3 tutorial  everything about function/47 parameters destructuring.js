//parameters destructuring
//we use it with object
//mostly use in react

const person = {
  gender: "male",
  firstname: "umair",
};

function persondetail(obj) {
  console.log(obj.gender);
  console.log(obj.firstname);
}
function persondetail({ gender, firstname }) {
  console.log(gender);
  console.log(firstname);
}
persondetail(person);

//difference between array and object destructuring

// Array Destructuring:
// Array destructuring allows you to neatly extract values from an array into new variables.
// It simplifies the process of copying array values into variables.
// Example using an array:
// JavaScript

// const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];
// const [firstName, lastName, website] = profile;
// console.log(firstName); // "Oluwatobi"
// console.log(lastName); // "Sofela"
// console.log(website); // "codesweetly.com"
// AI-generated code. Review and use carefully. More info on FAQ.
// You can also directly destructure an array during variable assignment:
// JavaScript

// const [firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"];
// AI-generated code. Review and use carefully. More info on FAQ.
// Object Destructuring:
// Object destructuring extracts values from a JavaScript object using curly braces {}.
// Unlike arrays, object destructuring requires using the exact property names from the object.
// Example using an object:
// JavaScript

// const user = { firstName: "John", lastName: "Doe", age: 30 };
// const { firstName, lastName } = user;
// console.log(firstName); // "John"
// console.log(lastName); // "Doe"
// AI-generated code. Review and use carefully. More info on FAQ.
// You can also rename variables during object destructuring:
// JavaScript

// const { firstName: fName, lastName: lName } = user;
// AI-generated code. Review and use carefully. More info on FAQ.
// Parameter Destructuring:
// When defining function parameters, you can destructure arrays or objects directly.
// For arrays, enclose the items you want to pick out inside square brackets [].
// For objects, use curly braces {} with the exact property names.
// Example using function parameters:
// JavaScript

// // Destructuring an array parameter
// function printNames([firstName, lastName]) {
//     console.log(`First Name: ${firstName}, Last Name: ${lastName}`);
// }
// printNames(["Alice", "Smith"]);

// // Destructuring an object parameter
// function printUser({ firstName, lastName }) {
//     console.log(`User: ${firstName} ${lastName}`);
// }
// printUser({ firstName: "Bob", lastName: "Johnson" });
// AI-generated code. Review and use carefully. More info on FAQ.
// In summary, array destructuring extracts values from arrays, object destructuring extracts values from objects, and parameter destructuring allows you to destructure directly within function parameters. Each technique provides a concise way to work with data in JavaScript
