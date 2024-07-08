const todoform = document.querySelector(".form-todo")
const todotext =document.querySelector(".form-todo input[type='text']")
const todolist=document.querySelector(".todo-list")

// todoform.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     //for adding value of todo in the console 
//     console.log(todotext.value)
//     todotext.value=""
// })


//jab user add todo button per click kery to todo list ky ander ik ni li item creat ho gai so:
todoform.addEventListener("submit",(e)=>{
    e.preventDefault()
    //for adding value of todo in the console 
    const todovalue=todotext.value
    const newLi=document.createElement("li")
    const newLiinnerHtml=
    `<span class="text">${todovalue}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML=newLiinnerHtml
    todolist.append(newLi)
    todotext.value=""
})

//done and remove button
todolist.addEventListener('click',(e) => {
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        console.log(liSpan.style.textDecoration="line-through")
    }
    if(e.target.classList.contains("remove")){
        const todoparent=e.target.parentNode.parentNode;
        todoparent.remove()
        // console.log("You want to remove someting ?")
        
    }
})