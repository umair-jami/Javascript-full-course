//parameters destructuring
//we use it with object
//mostly use in react

const person={
    gender:'male',
    firstname:'umair'
}

function persondetail(obj){
    console.log(obj.gender);
    console.log(obj.firstname);
}
function persondetail({gender,firstname}){
    console.log(gender);
    console.log(firstname);
}
persondetail(person)