//loop
//get multiple elements using getElement by class name
//get multiple elements using querySelecterAll
//array like object mai indexing use ker sakt hai or inmay length property hoti hai
// const navitems=document.getElementsByTagName('a');
//it gives us HTML collection

// console.log(navitems)
// console.log(typeof navitems [1])

//we can't use forEach method to iterate through  HTML collection

//simple for loop

// for(let i=0; i< navitems.length;i++){
//     // console.log(navitems[i]);
//     const navitem =navitems[i];
//     navitem.style.backgroundColor ='#fff';
//     navitem.style.color='red';
//     navitem.style.fontWeight="bold";
// }
  
//for of loop

// for(let navitem of navitems){
//     navitem.style.backgroundColor ='#fff';
//     navitem.style.color='red';
//     navitem.style.fontWeight="bold";
// }
//forEach

//we cannot use forEach loop with HTML collection

//so we first change it into array
//so for this     we first declare varibale with let

// let navitems=document.getElementsByTagName('a');
// navitems= Array.from(navitems)
// navitems.forEach((navitem)=>{
//     navitem.style.backgroundColor ='#fff';
//     navitem.style.color='red';
//     navitem.style.fontWeight="bold";
// })





//query selecter all gives us node list
// const navitems=document.querySelectorAll('a');
// console.log(navitems);

//we can use
//for loop 


// for(let i=0; i< navitems.length;i++){
//     // console.log(navitems[i]);
//     const navitem =navitems[i];
//     navitem.style.backgroundColor ='#fff';
//     navitem.style.color='red';
//     navitem.style.fontWeight="bold";
// }


// for of loop

// for(let navitem of navitems){
//     navitem.style.backgroundColor ='#fff';
//     navitem.style.color='red';
//     navitem.style.fontWeight="bold";
// }


//forEach loop
//we can change node llist into array

let navitems=document.querySelectorAll('a');
navitems=Array.from(navitems)
navitems.forEach((navitem)=>{
    navitem.style.backgroundColor ='#fff';
    navitem.style.color='red';
    navitem.style.fontWeight="bold";
})
//for checking array
console.log(Array.isArray(navitems));



