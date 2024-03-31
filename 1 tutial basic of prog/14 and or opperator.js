//and or opperator

let firstname='umair'
let age=19;

// if(firstname[0]==='u'){
//     console.log('your name starts with u')
// }
// if(age>18){
//     console.log('you are above 18')
// }

//for multiple condition we use and operator

if(firstname[0]==='u'&& age>18){
    console.log('your name start with u and you are above 18')
}
//if both conditions are true then over all condition will be true
//if one of them is false then over all condition will be false

let name='Umair'
let Age=17;
if(name[0]==='u'&& Age>18){
    console.log('your name start with u and you are above 18')
}else{
    console.log('inside else')
}


// or operator in this if one of all the condition is true then result will be true
if(name[0]==='U' || Age>18){
    console.log('inside if')
}else{
    console.log('inside else')
}