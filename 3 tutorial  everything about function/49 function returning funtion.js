 //function returning funtion

 function myfunc(name){
    function hello(){
        return 'hello world'
    }
    return hello
 }
 const ans=myfunc()
console.log(ans())