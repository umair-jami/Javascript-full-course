//getters and setters
class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    SetName(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
}

//if we want to change first and last name of object after creation then we use 'SetName' 
const person1=new person('umair','ramzan',18)
console.log(person1)
//if we want to call method function without parenthesis mean fullname without () then we use get in the start of method
console.log(person1.fullname)
// person1.SetName('raza','somroo')
//we also use this 
person1.firstname='raza'
person1.lastname='somroo'
console.log(person1.fullname)





