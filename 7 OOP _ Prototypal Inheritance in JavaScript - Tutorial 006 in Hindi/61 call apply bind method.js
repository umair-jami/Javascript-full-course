// call,apply and bind method

// function hello(){
//     console.log('hello world')
// }
// hello.call()\
function about(hobby,favmusian){
    console.log(this.firstname,this.age,hobby,favmusian)
}
 const user1={
    firstname:'umair',
    age:18,
   //  about:function(){
   //    console.log(this.firstname,this.age)
   //  }

 }

 const user2={
    firstname:'Raza',
    age:10,
 }
//if we want to print about for user2 of user1 but copying is not allowed
//there inside call the value of this will be user2
// user1.about.call(user2)


//call
//  about.call(user2,'mozat','guitar') 

//if we use apply then value of parameter will be in the array not seperated

// apply do samething as call function
// about.apply(user2,['mozart','bach'])

// when  we use bind it gives function  in  return
//we can call function at any time 
const func=about.bind(user2,'mozart','bach')
func()