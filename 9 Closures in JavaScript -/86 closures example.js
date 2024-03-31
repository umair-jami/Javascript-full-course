function hello(x){
    const a='vara'
    const b='varb'
    return function(){
        console.log(a,b,x);
    }
}

const ans= hello('arg')
ans()