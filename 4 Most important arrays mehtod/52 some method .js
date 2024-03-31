// some method 
// koi ek bhi item odd hai ya even hai
const numbers=[3,5,8,9]
const oddeven=numbers.some((number)=>number%2===0)
console.log(oddeven)

//i wnt to check taht i have any item in my cart that have price more than 1lakh

const usercart =[
    {productid:1,productname:'mobile',price:12000},
    {productid:2,productname:'laptope',price:22000},
    {productid:3,productname:'Tv',price:15000},
] 
const item=usercart.some((cartitem)=> cartitem.price>100000)
console.log(item)