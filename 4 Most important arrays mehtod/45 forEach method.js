// important array method


const numbers=[4,3,2,1]
// function multiplybytwo(number,index){
//     console.log(`index is ${index} and number is ${number} `, index)
//     // console.log(`${number}*2=${number*2}`)
// }
// for(let i=0;i<numbers.length;i++){
//     (multiplybytwo(numbers[i],i))
// }
// there forEach works as a for loop
// we can creat functon in forEach property

numbers.forEach(multiplybytwo)
{
    console.log(`index is ${index} number is ${number}`)
}

// we can creat function in the forEach loop


// numbers.forEach(function(number,index)
// {
//     console.log(`index is ${index} number is ${number}`)
// })


//forEach takes as an input a callback function

numbers.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number*2}`)
})

// real example
const users=[
    {firstname:'umair',age:23},
    {firstname:'king',age:27},
    {firstname:'zubair',age:22},
    {firstname:'Razqa',age:25},
]
// if we want to print all users firstname
users.forEach(function(user){
    console.log(user.firstname[0])
})
//we can do same thing with for of loop

for(let user of users){
    console.log(user.firstname[0])
}

users.forEach(user => {
    console.log(user.firstname)
})



