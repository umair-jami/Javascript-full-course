const heading = document.querySelector('h1');
const div = heading.parentNode.parentNode;
console.log(div)
dive.style.color='red'
dive.style.backgroundColor='black' 

//we can select element directly
const body=document.body
console.log(body)

//we can select element directly
const head=document.head
console.log(head)

//we can use querry selecter in parent element
const title1=head.querySelector("title")
console.log(title1)

//if we want to select childs without text child then we have method
const container=document.querySelector('div')
console.log(container.children)