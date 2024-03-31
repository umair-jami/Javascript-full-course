//iterable
//jispe hum for of loop laga sakein
//string,  array are iterable

//iterable wo hoty hai jin per hum for of loop laga sakty hai for example:string and array

const firstname='umair'
for(let index of firstname){
    console.log(index)
}

const items=['item1','item2','item3']
for(let item of items){
    console.log(item) 
}


//array like object
//jinke pas length property hoti hai
//aur jinko hum index sy access ker sakte hai
//example :- string
const secondname='raza'
console.log(secondname.length)
console.log(secondname[2])