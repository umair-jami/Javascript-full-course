// before and after

//agar hum element phley insert kerna hai to beore or agar bas mai to after use hoga
const newtodoitem=document.createElement('li')
newtodoitem.textContent = 'teach students'
const todolist=document.querySelector('.todo-list')
// todolist.before(newtodoitem)
todolist.after(newtodoitem)

//append or prepend method mai hum li todo_list ky andar add  ker rahy thy before and after ky zarye hum todo_list sy pehly a=or bad ami add kerty hai 