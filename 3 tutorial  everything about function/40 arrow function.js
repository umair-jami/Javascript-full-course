//arrow function
//important in javascript and typescript
   
// const singhappy=function(){
//     console.log('happy birthdy....')
//  }
//  singhappy()

 // use this => instead of function is known as arrow function

 const singhappy=() =>{
    console.log('Happy birthday day...')
 }
 singhappy()

 // return value
const  value1=  () => {
   return 2+4;
 }
const returnvalue =value1();
console.log(returnvalue)

// method for reuse function
//if there is one parameter available then we can remove small parentheses

const sumoftwonum=  (num1,num2) => {
   return num1 + num2
}
const returnsum=sumoftwonum(2,5);
console.log(returnsum)
 

console.log (sumoftwonum(9,5));

// another example
// these all num are known as parameters
const sumofThreeNum=  (num1,num2,num3) =>  num1+num2+num3

const returnvalueof3=sumofThreeNum(2,2,2)
console.log(returnvalueof3)


// function ifEven(num){
//     return num % 2===0
//  }
//  console.log(ifEven(8))


//in arrow function
 const ifEven=(num) => num % 2===0
 
 console.log(ifEven(8))

 const iseven=(num1) => num1%2===0
 console.log(iseven(8)) 