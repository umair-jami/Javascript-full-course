// block scope vs function scope
// let and const are block scope
//var is function scope

// block are looking like this
{

}
//if we creat variable with let and const in block then we can't access him outside the block
{
    const myfunc='umair'
    console.log(myfunc)
}
// if we creat variable with var then we can access it outside the block
// {
//     var firstname = 'raza'
// }
// console.log(firstname)

if(true){
    var firstname='ubaid'
    console.log(firstname)
}
console.log(firstname)

