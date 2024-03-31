//click event little practice
const buttoncolor=document.querySelectorAll('.my-buttons button')
buttoncolor.forEach(button =>{
    button.addEventListener('click', (e)=>{
        // console.log(e.target) 
        e.target.style.backgroundColor="yellow"
        e.target.style.color="red"
    })
})