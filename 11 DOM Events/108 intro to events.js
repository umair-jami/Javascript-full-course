//intro to events
//click
//event add kerne ke 3 tarike hai
const btn=document.querySelector('.btn-headline')

//this is not best way
// console.dir(btn)
// btn.onclick=function(){
//     console.log('you clicked me!!!!')
// }

// const onclick=function(){
//     console.log('you clicked me')
// }



// this is best way
//method---addEventlistener

//we can use these function inside property
btn.addEventListener('click',()=>{
    console.log('you clicked me')
})
