//these methods are not important
//this method is use also use for adding HtML


//elem.insertAdjacement(where,html)
//beforebegin (ul sy pehly)
//afterbegin (li sy pehly)
//beforeend (li ky bad)
//afterend (ul ky bad)

//most developer not use these mehtod

// if we want to add it in the last of li item
// const todolist =document.querySelector('.todo-list')
// todolist.insertAdjacentHTML('beforeend','<li>teach students</li>')


// if we want to add it after ul 
const todolist =document.querySelector('.todo-list')
todolist.insertAdjacentHTML('afterend','<li>teach students</li>')
