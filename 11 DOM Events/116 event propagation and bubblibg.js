// event bubbling / event propagation
//when we click child then js engine check that same event is present in parent if present then engine call parent event this is known as event bubbling
// const grandparent=document.querySelector(".grandparent")
// const parent=document.querySelector(".parent")
// const child=document.querySelector(".child")



// these are capturing Event
// child.addEventListener("click",()=>{
//     console.log("capture !!! child")
//     },
//     true
// )
// parent.addEventListener("click",()=>{
//     console.log("capture !!! parent")
//     },
//     true
// )


// grandparent.addEventListener("click",()=>{
//     console.log("capture !!!! grandparent")
//     },
//     true
// )
// document.body.addEventListener("click",()=>{
//     console.log("capture!!! body")
// },
// true)

// not capture

// child.addEventListener("click",()=>{
//     console.log("bubbled child")
// })
// parent.addEventListener("click",()=>{
//     console.log("bubbled parent")
// })
// grandparent.addEventListener("click",()=>{
//     console.log("bubbled grandparent")
// })

// document.body.addEventListener("click",()=>{
//     console.log("bubbled body")
// })

// event capturing
// event delegation

//when we add event listner to parent then we click on child it replied because it use callbak event of parents 
// if we use event object and use target then value of target wil be selected button
const grandparent=document.querySelector(".grandparent")
// grandparent.addEventListener("click",()=>{
//     console.log("you clicked on something")
// })
grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent)
})
 