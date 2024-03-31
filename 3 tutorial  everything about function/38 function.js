 // function works as a servent when we call him it perform specific function   
 function singhappy(){
    console.log('Happy birthday to you.....')
 }
 singhappy();
 singhappy();
 singhappy();
 singhappy();
 singhappy(); 

 // return value
 function value1(){
   return 2+4;
 }
const returnvalue =value1();
console.log(returnvalue)

// method for reuse function

function sumoftwonum(num1,num2){
   return num1 + num2
}
const returnsum=sumoftwonum(2,5);
console.log(returnsum)


console.log (sumoftwonum(9,5));

// another example
// these all num are known as parameters
function sumofThreeNum(num1,num2,num3){
   return num1+num2+num3
}
const returnvalueof3=sumofThreeNum(2,2,2)
console.log(returnvalueof3)


// true false funtion

function ifEven(num){
   if(num%2===0){
      return true
   }else{
      return false
   }
}
console.log(ifEven(5))

// we can short same code
function ifEven(num){
   if(num%2===0){
      return true
   }
   return false
}
console.log(ifEven(5))

//even shorter
function ifEven(num){
   return num % 2===0
}
console.log(ifEven(8))


//funstion
//input : string
//output : firstcharacter

function firstcharacter(name){
   return name[0]
}
console.log(firstcharacter('umair'))

//function
// input:array,target(number)
//output:index of target if present in array

function findindex(array,target){
   for(let i=0;i<array.length;i++){
      if(array[i]===target){
         return i;
      }
   }
   return -1;
}
const myarray=[1,2,3,4,5,6,7,8,9]
const ans=findindex(myarray,8)
console.log(ans)