//static method and properties
class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }
    //these are not function but these are person class
    static clasinfo(){
        return 'this is person calss'
    }
    //this is static property
    static desc='static property'
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullname(fullname){
        const[firstname,lastname]=fullname.split(" ")
        this.firstname='raza'
        this.lastname='somroo'

    }
}
const person1=new person('umair','ramzan',18)
person1.fullname='raza somroo'
console.log(person1.fullname)
console.log(person1)
console.log(person.clasinfo)
console.log(person.desc)