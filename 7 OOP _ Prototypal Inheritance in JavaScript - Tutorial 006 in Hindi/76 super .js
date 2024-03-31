//super
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

class dog extends animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed =speed;
    }
    run(){
        return `${this.name} is running at ${this.speed}kmph`
    } 
}
const tommy=new dog('tommy',1,45)
console.log(tommy)
const speed=tommy.run()
console.log(speed)
//object ya instance ek hi bat ahi
