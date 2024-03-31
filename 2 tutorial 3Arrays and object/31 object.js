// object is reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// object don't have index

//how to creat objects

//we can store array in object

const person = {name:'umair',age:20};
console.log(person)
//how to acces data from object

// method1
//bracket notation method
console.log(person['name'])

// method2
//dot notation method

console.log(person.name)

const box = {
    name:'umair',
    age:22,
    hobbies:['sleeping','runing','watching']
}
console.log(box.hobbies)

//how to add key value pair in object

//bracket notation method
box['person'] = 'male';

//dot notation method
box.gender= 'male';
console.log(box)
