// lexical scope
// lexical scope mean if one function is present in another then the parent function is lexical environment for his child

const myvar1='umair'
function myapp(){
    function myfunc(){
        // const myvar1='value59'
        const myfunc2= ()=>{
            console.log('inside myfunc',myvar1)
        }
        myfunc2()
    }
    const myfunc2=function(){}
    const myfunc3= ()=>{}
    console.log(myvar1)
    myfunc()
}
myapp()
