// default parameters
//agar hum idher b ki value set na kery to NaN(not a number) ko error ai ga
function addtwo(a,b){
    if(typeof b==='undefined'){
        b=0
    }
    return a+b
}
console.log(addtwo(4))

//idher hum ny b ki value 0 set ki hai to ye iss ki value tab mani jai gi agar hum function call kerty waqt b ki value na set kery

// new method
function addtwo(a,b=0){
    return a+b
}
console.log(addtwo(4))