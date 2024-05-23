//if we want to import firstname and age from fname.js and age.js so we use export and import

//agar hum ko lagta hai ky firstname barra word hai tab hum as use ker sakty hai

//if we use default export then there is no need of curly brackets during import as in case of person and we can use any name instead of specific name

//we can use only one time defalut export in one file

//if we have two things to export from one file then we can do it at the same time

import { firstname as fname } from "./Utils/fname.js";
import { age } from "./Utils/age.js";

import Person, { Person2 } from "./Utils/Person.js";
//if we not use default export in any class then we can import both in this way
// import  {Person, Person2 } from "./Utils/Person.js";
console.log(fname, age);
const person = new Person("umair", "Raza", 22);
const person2 = new Person("umar", "Ramzan", 23);
person2.info();

// import P from "./Utils/Person.js";
// console.log(fname, age);
// const person = new P("umair", "Raza", 22);
// console.log(person);
person.info();
