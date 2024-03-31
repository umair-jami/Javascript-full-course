//don't do this mistake
const user1={
    firstname:'umair',
    age:9,
    about: function(){
        console.log(this.firstname,this.age)
    }
}
user1.about()
//don't do this
// const myfunc=user1.about
// myfunc()

//this is right
const myfunc=user1.about.bind(user1)
myfunc()
