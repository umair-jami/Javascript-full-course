//static list vs live list

// querryselectorall hum ko static list degi (means jab hum new element add kerai gy to wo console mai reflect ni kery gy)

// getelementbysomething hum ko live list degi

const listitems = document.querySelectorAll('.todo-list li')
const li7=document.createElement('li')
li7.textContent='item 6'
const ul=document.querySelector('.todo-list')
ul.appendChild(li7)

console.log(listitems) 