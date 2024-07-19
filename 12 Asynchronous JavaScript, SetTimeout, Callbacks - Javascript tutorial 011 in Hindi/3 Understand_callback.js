//callbacks

// function myfunc(callback) {
//   console.log("function is doing  task 1");
//   callback();
// }

// myfunc(() => {
//   console.log("function is doing task 2");
// });

//another example

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

getTwoNumbersAndAdd(
  4,
  "5",
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("Wrong Data Type");
    console.log("Please insert numbers only");
  }
);
