//__proto__
//official ecmascript documentation

//[[prototype]]

//__proto__ == [[prototype]]  same

//prototype is  different

//there in anothe way to creat object
const obj1 = {
  key1: "value1",
  key2: "value2",
};
// const obj2={
//     key3:'value3'
// }
// mai chahta hon ky ky agar obj2 ky pas key1 nahi hai to wo khud obj1 ky pas jai or key1 print kerwai
// console.log(obj2.key1)
//.__proto__ is also known as dunder
// dunder proto === __proto__ Every object in JS has this property

const obj2 = Object.create(obj1);
//there object.creat ny obj2 ki __proto__ obj1 set kerdi
obj2.key3 = "value3";
//there is not present key2 in obj2 but we creat obj2 in this way that if obj2 not have key2 than system go to obj1 and print value of key2
console.log(obj2.key2);
