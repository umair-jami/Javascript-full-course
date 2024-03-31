//how to clone array
let array1=['item1','item2']
// let array2=['item1','item2']



//slice method
// let array2=array1.slice(0);



//another method
// let array2=[].concat(array1)


//new way
//spread operator
let array2=[...array1]
array2.push('item3','item4')
console.log(array1===array2)
console.log(array1)
console.log(array2)


//for adding mor item in array with these method
// let array2=array1.slice(0).concat(['item2','item3']);


// let array2=[].concat(array1,['item2','item3'])
// let array2=[...array1,'item4',item5']


//how to concatenate two arrays