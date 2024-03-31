// if we want to slow down the callback function

console.log('script start')
const allbtn=document.querySelectorAll('.my-buttons  button')
allbtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let num=0
        for(let i=0;i<=1000000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num)
    })
})

console.log('script end')

// jab hum iss code ko run kerty hai tab JS engin click property web apis ky hawaly kerdeta hai ky to iss per nazar rakh and event loop in click ky callback function ko line mai rokta hai jab tak js enjine apna baqi kam mukamal ni ker leta
