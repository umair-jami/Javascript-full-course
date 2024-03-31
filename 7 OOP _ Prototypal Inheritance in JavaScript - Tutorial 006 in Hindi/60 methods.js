// methods
//function inside object are calles method
//iss function mai this wo object hai jo is function ko call ker raha hai
const person ={
    firstname:'umair',
    age:8,
    about:function(){
        console.log(`person name is ${this.firstname} and person age is ${this.age}`)
    }
}
person.about();

//another example
function personinfo(){
    console.log(`person name is ${this.firstname} and person age is ${this.age}`)
}
const person1={
    firstname:'umar',
    age:18,
    about:personinfo
}
const person2={
    firstname:'Raza',
    age:10,
    about:personinfo
}
const person3={
    firstname:'ubaid',
    age:9,
    about:personinfo
}
person1.about()
person2.about()
person3.about()