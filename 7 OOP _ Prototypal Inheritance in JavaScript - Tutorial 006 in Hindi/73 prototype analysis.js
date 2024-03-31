//internely every array is creat with new keyword but we write simple array for our ease


let numbers=new Array(1,2,3)
//agar hum numbers ka prototype dekhna chaye to hum ye method use ker sakty hai
console.log( Object.getPrototypeOf(numbers))
 console.log(numbers)

 function hello(){
    console.log('hello')
 }
 console.log(hello.prototype)
 //we can change prototype type
 hello.prototype=[]
 console.log(hello.prototype)

 hello.prototype.push('1')
 console.log(hello.prototype)