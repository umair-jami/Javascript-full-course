// map method
// most important array method
//it also takes as an input callback function


const numbers=[2,3,5,7]

//map function always creat new array and we can store it
//if we use map method then it is necessary to return value instead of console
const squarenumber=numbers.map(number =>{
    return number*number
});
console.log(squarenumber)

//realstick example

const users=[
    {firstname:'umair',age:23},
    {firstname:'king',age:27},
    {firstname:'zubair',age:22},
    {firstname:'Razqa',age:25},
]

const firstname= users.map(user =>{
    return user.firstname
})
console.log(firstname)
