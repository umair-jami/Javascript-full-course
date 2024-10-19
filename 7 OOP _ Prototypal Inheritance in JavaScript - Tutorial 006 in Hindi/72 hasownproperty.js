// hasOwnProperty

function Creatuser(firstname,lastname,email,age,adress){
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.adress=adress;
    //we don't use there return because new keyword also return
}
Creatuser.prototype.about=function(){
    return `${this.firstname} is ${this.age} years old.`
} 
Creatuser.prototype.is18=function(){
    return this.age>=18
}

const user1=new Creatuser('umair','raza','lalaumair92@gmail.com',19,'my address')

const user2=new Creatuser('umar','raza','lalaumair94@gmail.com',22,'my address')

const user3=new Creatuser('Ubaid','raza','lalaumair90@gmail.com',10,'my address')

console.log(user1)
console.log(user1.about())
console.log(user1.is18())

//for printing all keys

// for(let key in user1){
//     console.log(key)
// }

//when we print user1 key then this loop print all user1 keys with prototype keys
//if we want to print only user1 keys not prototype keys

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key)
    }
}