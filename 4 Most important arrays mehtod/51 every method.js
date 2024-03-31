//every method
//for checking that every element in the array is even or odd
// its output will be in booliens
const numbers=[2,4,6,8]
const ans=numbers.every((number)=>number%2===0)
console.log(ans) 

//real example

const usercart =[
    {productid:1,productname:'mobile',price:12000},
    {productid:2,productname:'laptope',price:22000},
    {productid:3,productname:'Tv',price:15000},
] 
const value=usercart.every((cartitem)=>cartitem.price<30000
)
console.log(value)