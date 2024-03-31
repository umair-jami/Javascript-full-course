//fill method

// if we want to fill an array with -1 and its length should be 10
const myarray =new Array(10).fill(-1);
console.log(myarray)


// if we want to replace value from 2 to 6 with 0

//value,start,end (in the fill method values are  in this way)
const array=[1,2,3,4,5,6,7,8,9]
array.fill(0,2,6)
//here 0 is replacing digit ,2 is first index from where we start and 6 is last index where we end
console.log(array)