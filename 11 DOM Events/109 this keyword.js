//this keyword


const btn=document.querySelector('.btn-headline')

//in normal funcyion value of this will be btn and in arrow function value of this will be window
btn.addEventListener('click',()=>{
    console.log('you clicked me');
    console.log('value of this');
    console.log(this);
});
