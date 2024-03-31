//get and set attributes
const link = document.querySelector("a");
link.textContent='House'
//for accessing value of attribute( class,id,href) we use getattribute method
console.log(link.getAttribute("href").slice(0));

const inputElement=document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("type"))

//we can change the value of attributes with set method
link.setAttribute('href','https://codprog.com')
console.log(link.getAttribute('href'))

//if we want to access 
const clas=document.querySelector('ul')
console.log(clas.getAttribute('class'))