// function myfunction(power){
//     return function(number){
//         return number**power
//     }
// }
// const cube = myfunction(3)
// const ans=cube(3)
// console.log(ans)

//this is same function
const myfunction=power=>number=>number**power

const cube = myfunction(3)
const ans=cube(3)
console.log(ans)
