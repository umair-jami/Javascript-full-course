//lacks of last code
// if we want to creat 1 lakh method than it is mecessary to add thier inforamtion in function so for this difficulity we use object.creat it link function with object
const usermethod={
    about:function(){
        return `${this.firstname} is ${this.age} years old.`
    },
    is18:function(){
        return this.age>=18;
    }
}
function creatuser(firstname,lastname,email,age,adress){
    const user=Object.create(usermethod);
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.adress=adress;
    return user;

}

const user1= creatuser('umair','raza','lalaumair92@gmail.com',19,'my address')

const user2= creatuser('umar','raza','lalaumair94@gmail.com',22,'my address')

const user3= creatuser('Ubaid','raza','lalaumair90@gmail.com',10,'my address')

console.log(user1)



