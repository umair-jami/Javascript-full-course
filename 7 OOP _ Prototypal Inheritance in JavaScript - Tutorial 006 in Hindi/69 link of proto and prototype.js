//link of proto and prototype
//when we have prototype mean empty object of each function then we don't have need of extra object so we finish this object and store data into prototype
// const usermethod={
    // about:function(){
    //     return `${this.firstname} is ${this.age} years old.`
    // },
//     is18:function(){
//         return this.age>=18;
//     }
// }
function creatuser(firstname,lastname,email,age,adress){
    const user=Object.create(creatuser.prototype);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.adress=adress;
    return user;

}
creatuser.prototype.about=function(){
    return `${this.firstname} is ${this.age} years old.`
} 
creatuser.prototype.is18=function(){
    return this.age>=18
}

const user1= creatuser('umair','raza','lalaumair92@gmail.com',19,'my address')

const user2= creatuser('umar','raza','lalaumair94@gmail.com',22,'my address')

const user3= creatuser('Ubaid','raza','lalaumair90@gmail.com',10,'my address')

console.log(user1)
console.log(user1.about())
console.log(user1.is18())



