//clone nodes
const ul=document.querySelector('.todo-list')
const li=document.createElement('li')
li.textContent='teach students'


// ul.append(li)
//ul.prepend(li)
// agar hum dono method ik time mai use kery gai to ya to append ho ga ya prepend is chiz ky solution keliye we use clone method

const li2=li.cloneNode(true) //there true mean deep cloning hogi means iss ky child bhi clone hogy
ul.append(li)
ul.prepend(li2)