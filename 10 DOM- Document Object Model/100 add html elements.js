//add new HTML elements to page

//innerHTML to add html element
const todolist=document.querySelector('.todo-list')
// console.log(todolist.innerHTML)

//agar hum inner html add kerain gy to wo pehly wali html ko remove kery ga or phir new html add hogi
//agar hum chahaty hai ky purani html bhi rahy and new html bhi add ho gai 
//lakin ye tariqa sahi nahi hai ye masla kery ga

// todolist.innerHTML += <li>New todo</li>
// console.log(todolist.innerHTML)

todolist.innerHTML='<li> new todo</li>'


//when you should use it ,when you should not

//agar hum koi innerhtml change kerna chahty hai to hum jer sakty hia or agar new inner html add kerna chayte kery gy to system mai masla kery ga