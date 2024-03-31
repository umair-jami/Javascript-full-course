function hello(){
    console.log('hello world')
}
//function is combo of function and object
//javascript function ===> function+object

//for getting function name
// console.log(hello.name)

// //we can add own properties in function
// hello.myOwnProperty='very unique value';
// console.log(hello.myOwnProperty)

//function provides more useful peoperties

//when we creat function it gives us free sapce mean empty object {} which is prototype

// console.log(hello.prototype)

//only fuctions provide prototype property

//prove

// if(hello.prototype){
//     console.log('prototype is present')
// }else{
//     console.log('prtotype is not present')
// }

// //in the case object

// const heloo={
//     name:'umair'
// }
// if(heloo.prototype){
//     console.log('prototype is present')
// }else{
//     console.log('prtotype is not present')
// }

//prototype is an empty object we can store properties in this object

hello.prototype.abc='abc'
hello.prototype.xyz='xyz'
hello.prototype.sing=function(){
    return "lalalla"
}
console.log(hello.prototype) 