//some old methods to support poor Internet exploral
//appendchild
//insetBefore
//replaceChild
//removeChild
const addelement=document.querySelector('.todo-list')
const item=document.createElement('li')
const referencenode=document.querySelector('.first-todo')
item.textContent='todolist'
// addelement.removeChild(referencenode)

// for replacing
addelement.replaceChild(referencenode)
