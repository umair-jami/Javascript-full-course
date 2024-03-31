//call back function

function myfunc2(name){
    console.log('inside myfun2')
    console.log(`your name is ${name}`)
}


//there we can set any value of 'a' like string, array, number
// function myfunc(a){
//     console.log(a)
// }



function myfunc(callback){
    console.log('hlo i am a function and i  can....')
    callback('umair')
}
myfunc(myfunc2) 