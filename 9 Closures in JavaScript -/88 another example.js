function func(){
    let counter=0
    return function(){
        if(counter<1){
            console.log('Hi you called')
            counter++;
        }else{
            console.log('Hy Iam already called')
        }
    }
}
const myfunc=func()
myfunc()
myfunc()
myfunc()