//computed properties

const key1 = 'objkey1'
const key2 = 'objkey2'

const value1 = 'myvalue1'
const value2 = 'myvalue2'

const obj ={
    [key1] : value1,
    [key2] : value2,
}

const obj2={}
obj2[key1] = value1
obj2[key2] = value2

console.log(obj2)

console.log(obj)