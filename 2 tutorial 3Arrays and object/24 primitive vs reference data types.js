 //primitive vs reference data types
 // primitive store in stack

//primitive type
let num1=6;
let num2=num1;
console.log('value of num1 is',num1);
console.log('value of num2 is ',num2);
num1++;
console.log('value of incrementing num1')
console.log('value of num1 is',num1);
console.log('value of num2 is ',num2);

//refernce type
//Array

let array1=['num1','num2'];
let array2=array1;
console.log('value of array1 is ',array1)
console.log('value of array2 is ',array2)
array1.push('item3')
console.log('after pushing element to array1')
console.log('value of array1 is ',array1)
console.log('value of array2 is ',array2)
