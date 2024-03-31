//rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is `,c)
// }
// myfunc(1,2,3,4,5,6,7)

function addall(...numbers){
    let total=0
    for(let number of numbers){
        total=total+number
    }
    return total;
}
const ans=addall(1,1,1,1,5) 
console.log(ans)