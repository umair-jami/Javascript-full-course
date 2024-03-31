// closures
//closure: 30-40%
//analyse:70-80%
//real example:100%


//function can return function
// function outerfunction(){
//     function innerfunction(){
//         console.log('hlo bro')
//     }
//     return innerfunction
// }
// const ans=outerfunction()
// ans()


function printfullname(firstname,lastname){
    function printname(){
        console.log(firstname,lastname)
    }
    return printname
}
const ans=printfullname('umari', 'raza')
ans()

//yahan per jab printName function return hoga to ye apny parent printfullname function ky parameters means firstname and lastname ly ker return ho ga iss behavior ko closures kehty hai

//function jab ksisi or function sy return hota hai to wo apny sath local memory ky variable lai ker return hota hai jis lo closures kehty hai