//splice method
//start,delete,insert
const myarray = ['item1','item2','item3'];

//delete
//it aslo gives deleted item in return

const returnvalue=myarray.splice(1,2)
console.log('deleted item' ,returnvalue)
//in splice
//first digit=delted item index
//2nd digit=numbers of deleted item
//3rd = inserted string or number

console.log(myarray) 


//insert
// there first value is starting index and the second value is number of deleting items and third is inserting string
const myarray3 = ['item1','item2','item3'];
// myarray2.splice(1,0,'insertd item')
// console.log(myarray2)

//insert and delete simultaneously

const return2= myarray3.splice(1,2,'item4','item5')
console.log(myarray3)
console.log( 'deleted item' ,return2)
