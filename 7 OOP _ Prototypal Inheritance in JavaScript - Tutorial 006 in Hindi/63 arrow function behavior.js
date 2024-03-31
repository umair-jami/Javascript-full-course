//also don't do this

//arrow function
//arrow function have different behavior
const user1={
    firstname:'umair',
    age:9,
    about: () =>{
        console.log(this.firstname,this.age)
    }
}
user1.about()
//because arrow function  always takes .this from sarrounding 

//we can also write method in this way
const user2={
    firstname:'umair',
    age:9,
    about(){
        console.log(this.firstname,this.age)
    }
}
user2.about()