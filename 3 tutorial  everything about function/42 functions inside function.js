// functions inside function
const app=()=>{
    console.log('hlo world')

    const newfunc=()=>{
        console.log('hloo from newfunc')
    }

    const addition=(num1,num2)=>{
        return num1+num2
    }
    console.log(addition(2,2))
    newfunc()
}
app()