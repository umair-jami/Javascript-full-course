// intro to arrays----->ordered collection of element

// array is an object in javascript
// reference type 
// how to creat arrays
//arrays are muteable

let fruits=['apple','grapes','mango' ]
console.log(fruits)
console.log(fruits[0])
//change
fruits[1]='Anar'
console.log(fruits)

let obj= {}; //object litteral

console.log(typeof obj)
console.log(typeof fruits)



let number=[1,2,3];
console.log(number)
//we can store all type of data in the Array
let mixed=[1,2,3,4,'string',null,undefined]
console.log(mixed)



// how check array is an actual array


//Array checking
console.log(Array.isArray(fruits))
console.log(Array.isArray(obj))
 
// array indexing