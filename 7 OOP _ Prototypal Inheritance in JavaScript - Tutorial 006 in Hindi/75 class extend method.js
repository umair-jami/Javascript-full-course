class animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    eat(){
        return `${this.name} is eating`
    }
    isSuperCute(){
        return this.age<=1;
    }
    iscute(){
        return true
    }
}

const animal1=new animal('tom',1)
console.log(animal1)
const age=animal1.eat()
console.log(age)
console.log(animal1.iscute())
console.log(animal1.isSuperCute())


//there is no need of this code for animal class we use extend method
// dog class
// class dog{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     eat(){
//         return `${this.name} is eating`
//     }
//     isSuperCute(){
//         return this.age<=1;
//     }
//     iscute(){
//         return true
//     }
// }

class dog extends animal{
    
}
const tommy=new dog('tom',1)
console.log(tommy)
console.log(tommy.iscute())
console.log(tommy.isSuperCute())