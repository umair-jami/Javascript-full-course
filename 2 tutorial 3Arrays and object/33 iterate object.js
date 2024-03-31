//how to iterate object
const box = {
    name:'umair',
    age:22,
    'person hobbies':['sleeping','runing','watching']
}

//for in loop

for(let key in box){
    console.log(box[key])
}
//if we want to print complete key pair
for (let key in box){
    console.log(`${key} : ${box[key]}`)
}
//another method

for ( let key in box){
    console.log(key, ':', box[key])
}

//Object.keys
//for this the O should be capital
//method for inserting all keys in the new array
 
console.log(typeof (Object.keys(box)))
const val=Array.isArray(Object.keys(box))
console.log(val)

for (let key of Object.keys(box)){
    console.log(box[key])
}