// array destructuring
const myarray =['value1','value2','value3','value4']
// let myvar1 = myarray[0]
// let myvar2 = myarray[1]

//for inserting item in new array we can use slice or spread method 
let [myvar1,myvar2,...mynewarray] = myarray;
console.log('value of myvar1', myvar1)
console.log('value of myvar2', myvar2)
let mynewarray2 = myarray.slice(2)
console.log(mynewarray)
console.log(mynewarray2)