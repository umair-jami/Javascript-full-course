//difference between bracket and dot notation method


//if we have space between property name then it can't be access by dot notation so the bracket notation method is used

const key='email';
const box = {
    name:'umair',
    age:22,
    'person hobbies':['sleeping','runing','watching']
}
console.log(box['person hobbies'])
//If we want add key word pair and the property name from the key variable then we should use bracket notation method We should use variable name in square bracket without quotes 
box[key] ='lalaumair92@gmail.com'
console.log(box)
