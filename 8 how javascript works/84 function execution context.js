//function execution context

let foo ='foo'
console.log(foo)
function getfullname(firstanme,lastname){
    console.log(arguments);
    let myvar='var inside func'
    console.log(myvar)
    const fullname=firstanme+" "+lastname
    return fullname;
}
const personName=getfullname('umair','raza');
console.log(personName)

  
