//nested if else
//gues number game

let winningnumber=20;
let guessnumber = +prompt('guess the right number');
if(guessnumber===winningnumber){
    console.log('your guess is right')
}else{
    if(guessnumber<winningnumber){
        console.log('Too low!!!')
    }else{
        console.log('Too high!!!')
    }
}