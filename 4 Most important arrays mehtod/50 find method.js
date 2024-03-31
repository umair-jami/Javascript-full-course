//find method
const array=['umair','umair','Ali','cat']



// function islength3(string){
//     return string.length===3
// }

// const ans=islength3('ali')
// console.log(ans)

//with find method
// find method return only first true value
const ans=array.find((string)=>string.length===3)
console.log(ans)

//real example
const usercart =[
    {productid:1,productname:'mobile',price:12000},
    {productid:2,productname:'laptope',price:22000},
    {productid:3,productname:'Tv',price:15000},
]

const ans2=usercart.find((a)=> a.productid===3
)
console.log(ans2)
