//for of loop in array

const fruits = ['apple','mango','annar','annanas']

for(let fruit of fruits){
    console.log(fruit)
}

// for in loop in array

for(let index in fruits){
    console.log(fruits[index])
}

//extra example

for( let index in fruits){
    console.log(index)
}
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}