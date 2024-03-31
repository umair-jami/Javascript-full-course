//lack of
const usermethod={
    about:function(){
        return `${this.firstname} is ${this.age} years old.`
    },
    is18:function(){
        return this.age>=18;
    }
}

//in this code when we creat more users then the function inside object(method) copied in every user so they carry more space
function creatuser(firstname,lastname,email,age,adress){
    const user={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.adress=adress;
    // user.about=function(){
    //     return `${this.firstname} is ${this.age} years old.`
    // };
    // user.is18=function(){
    //     return this.age>=18;
    // }
    //we store reference of these objects

    user.about=usermethod.about;
    user.is18=usermethod.is18;

    return user;

}

//when we creat more users than the objects occupy more space but we have same objects and we not have need copying these files
const user1= creatuser('umair','raza','lalaumair92@gmail.com',19,'my address')

const user2= creatuser('umar','raza','lalaumair94@gmail.com',22,'my address')

const user3= creatuser('Ubaid','raza','lalaumair90@gmail.com',10,'my address')
const about=user2.about()
console.log(about)

const is18=user3.is18()
console.log(is18)

