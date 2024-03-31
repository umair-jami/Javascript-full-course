//OOP object oriented programming
//proto, prototype,class

// const user={
//     firstname:'umair',
//     lastname:'raza',
//     email:'lalaumair92@gamil.com',
//     age:2,
//     adress:'house number,colony,pincode,state',
//     about:function(){
//         return `${this.firstname} is ${this.age} years old.`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
//if we need 1 million user data then we work with this method
//hum function creat kery gai jo 3 kam kery ga
// (1) function(that function creat object)
// (2) add key value pair
// (3) object ko return krega

function creatuser(firstname,lastname,email,age,adress){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.adress=adress;
    user.about=function(){
        return `${this.firstname} is ${this.age} years old.`
    };
    user.is18=function(){
        return this.age>=18;
    }
    return user;

}
const user1= creatuser('umair','raza','lalaumair92@gmail.com',19,'my address')
console.log(user1)
const above18=user1.is18()
console.log(above18)
const about=user1.about()
console.log(about)

//function jo object ky andar hoty hai inko methods bolty hai