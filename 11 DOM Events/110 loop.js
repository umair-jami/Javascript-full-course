//how add click event at multiple button

const allbtn=document.querySelectorAll('button')

console.log(allbtn)
// firstbtn.addEventListener('click',()=>{
//     console.log('you clicked me why!!!')
// })

//for of loop
// for(let button of allbtn){
//     button.addEventListener('click',function(){
//         console.log(this.textContent)
//     })
// }



// simple for loop
// for(let i=0;i<allbtn.length;i++){
//     allbtn[i].addEventListener('click',function(){
//     console.log(this.textContent)
// })
// }

//forEach loop
allbtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        console.log(this.textContent)
    })
})