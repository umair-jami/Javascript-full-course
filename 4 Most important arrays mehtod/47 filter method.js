// filter method
// filter callback function always return bollians value true or false 

const numbers=[5,4,13,8,2,6]
// filter method store only true values in the array means filter true values
const evennumber=numbers.filter((number)=>{
    return number % 2===0
})
console.log(evennumber)