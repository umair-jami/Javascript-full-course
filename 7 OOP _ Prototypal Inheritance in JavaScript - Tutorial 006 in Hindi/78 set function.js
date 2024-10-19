// set function
//getter and setter
//if we print const person1.fullname='umair raza' then the value of firstname and last name should be change

class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullname(fullname){
        const[firstname,lastname]=fullname.split(" ")
        this.firstname=firstname
        this.lastname=lastname

    }
}
const person1=new person('umair','ramzan',18)
person1.fullname='raza somroo'
console.log(person1.fullname)
console.log(person1)
