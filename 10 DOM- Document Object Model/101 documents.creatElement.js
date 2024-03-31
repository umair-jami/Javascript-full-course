//best methods for adding new elements\

//all developer use this method
//documents.creatElement()

const newtodo=document.createElement('li')
// const newtodoitem=document.createTextNode('teach students')
newtodo.textContent='teach students'
const todolist=document.querySelector('.todo-list')
// newtodo.append(newtodoitem)
//this method add element in the last but we can use prepend method to add element in the start

// todolist.append(newtodo)
todolist.prepend(newtodo)

//we can use there appendchild but it is old
console.log(newtodo)

//append
//prepend

//if we want to remove any element

//remove
const todo1=document.querySelector('.todo-list li')
todo1.remove()
console.log(todo1)
