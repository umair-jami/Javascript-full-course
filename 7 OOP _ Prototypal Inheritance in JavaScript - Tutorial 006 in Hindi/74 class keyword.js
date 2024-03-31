//2015 /es6
//class keyword
//class are fake
class Creatuser{
    constructor(firstname,lastname,email,age,adress){
        console.log('constructor called')
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.age=age;
        this.adress=adress;
    }
    about(){
        return `${this.firstname} is ${this.age} years old.`
    }
    is18(){
        return this.age>=18
    }
    func(a){
         console.log(a)
    }
}

//now there is no need of this

// function Creatuser(firstname,lastname,email,age,adress){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.email=email;
//     this.age=age;
//     this.adress=adress;
//     //we don't use there return because new keyword also return
// }
// Creatuser.prototype.about=function(){
//     return `${this.firstname} is ${this.age} years old.`
// } 
// Creatuser.prototype.is18=function(){
//     return this.age>=18
// }

const user1=new Creatuser('umair','raza','lalaumair92@gmail.com',19,'my address')

const user2=new Creatuser('umar','raza','lalaumair94@gmail.com',22,'my address')

const user3=new Creatuser('Ubaid','raza','lalaumair90@gmail.com',10,'my address')
console.log(user1.is18())
user1.func('umair')


