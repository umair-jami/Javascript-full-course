// synchronus vs Asynchronus programming


//synchronous programming
//in this of programming code execute line by line there code is block 
//when loop will end next line will print if there is infinite loop then last line will not print
//javascript is synchronous programmin language and sinle threaded
console.log("script start");
for(let i=0;i<1;i++){
    console.log("inside for loop")
}

console.log("script end")


// setTimeout
//idher ye function as a input ek function ley ga or time ly ga milisecond mai
//time means ky iss line ko print kitni der bad kerwana hai 


console.log("script start")
function hello(){
    console.log("inside setTimeout")

}
setTimeout(hello, 1000);
for(let i=0;i<=1000;i++){
    console.log(".....")
}




console.log("script end")


