//key press event

const body=document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e.key)
})

//mouseover event

const mainbutton=document.querySelector(".btn-headline")
mainbutton.addEventListener("mouseover",()=>{
    console.log("mouse over event occured")
})
mainbutton.addEventListener("mouseleave",()=>{
    console.log("mouse leave event occured")
})

