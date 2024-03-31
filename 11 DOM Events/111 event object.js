//event object

// const firstbtn=document.querySelector('#one')
// firstbtn.addEventListener('click',function(event){
//     console.log(event)
// })



// jub Bhi kisi element pay event listener add hoga
//JS engine ----> line by line execute kerta hai
//Browser have JS engine plus extra feature
// Browser---> JS engine +webapi

//Jab browser ko Pata chalta hey ky user nay event perform Kia jo hum listen ker rahy hai too
// browser perform two works----2
//1.)callback functon JS engine ko dega
//2.)call back function key sath browser jo event hoga uski information bhi dega

//ye sari info hum ko object ky form mai mily gi
// iss function mai e usi object ko show kerta hai jis mai information store hoti hai
// in this object two properties are very important
// 1)current target
// 1)Target

const allbtn=document.querySelectorAll('button')
// for of loop
for(let button of allbtn){
    button.addEventListener('click',(e)=>{
        console.log(e.target)
        // console.log(e.CurrentTarget)
    })
}
