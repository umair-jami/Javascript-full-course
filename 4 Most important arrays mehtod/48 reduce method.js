//reduce method
const numbers=[1,2,3,4,5]

//aim: sum of all the numbers in array

// this is mentiones in documentation tha t the first parameter name will be accumulator and the second parameter called current value

//we can set initial value of accumulator at the end of function as mentioned 100
const sum=numbers.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue
},100);
console.log(sum)


//method
// accumulator,     currentvalue,       return
//1st num; 1             2nd num; 2           3
//1st rtn ;  3             3rnumd : 3           6
//2nd rtn; 6            4th num;  4           10
//3rd rtn; 10            5th num; 5           15

//real example

const usercart =[
    {productid:1,productname:'mobile',price:12000},
    {productid:1,productname:'laptope',price:22000},
    {productid:1,productname:'Tv',price:15000},
]

const price=usercart.reduce((totalvalue, currentproduct)=>{
    return totalvalue  + currentproduct.price
},0)
console.log(price)


