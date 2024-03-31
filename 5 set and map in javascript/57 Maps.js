//Maps
//map is an iterable

//store data in order fashion

//store key value pair (like object)
//duplicate key are not allowed lke objects

//different between map and objects

//objects can only have string or symbol
// as key

// in maps we can use anything as key (big difference)
//like arrays ,number,string 

//object literals
//keys are always in string 99.9% and 0.1% in symbol in objects


// const person={
//     name:'umair',
//     age:7,
//     1:'one'
// }
// console.log(person.name)
// console.log(person['name'])
// console.log(person[1])


//store key value pair
const person1=new Map()
person1.set('firstname','umair')
person1.set('age',7)
person1.set(123,'onetwothree')
console.log(person1)



//for approaching one vlaue we use get method  

//how access key value pair
// console.log(person1.get('firstname'))

//for approaching all keys we use keys() method

//method for printing keys
// console.log(person1.keys())


// for(let key of person1.keys()){
//     console.log(key)
// }

//thsi loop gives us key value pair in array
for(let key of person1){
    console.log(key)
}

//destructuring of key value pair
for(let [key,value] of person1){
    // console.log(Array.isArray(key))
    console.log(key,value)
}

const person2=new Map()
person2.set('firstname','umair')
person2.set({1:'one'},7)
person2.set([1,2,3],'onetwothree')

//if we want to store array direct into map

// const person3=new Map([['firstname','umair'],['lastname','Raza']])
// console.log(person3)

const person3={
    id:1,
    firstname:'umair'
}
const person4={
    id:1,
    firstname:'umair'
}
//now we want to store more information of person3 using map 

//ye map function as a key person3 object lai ga or us ki value ek on=bject set ker dy ga jis ky ander key value pair hon gy

const extrainfo=new Map();
extrainfo.set(person3,{age:8,gender:'male'})
extrainfo.set(person4,{age:9,gender:'male'})
console.log(extrainfo)

//if we want to approach any value in the map function
console.log(person3.id)
console.log(extrainfo.get(person3).gender)
console.log(extrainfo.get(person4).age)