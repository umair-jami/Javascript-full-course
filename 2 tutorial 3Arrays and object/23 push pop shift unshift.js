//array push pop

//push---->for adding element in last

// let fruits=['apple','mango','grapes']
// console.log(fruits)
// fruits.push('banana')
// console.log(fruits)

//pop----->for removing element from last one by one and it also return elements
let fruits = ["apple", "mango", "grapes"];
// console.log(fruits)
// fruits.pop();
// console.log(fruits)

//pooped items

// let poppedfruit = fruits.pop()
// console.log(fruits)
// console.log('popped fruit is',poppedfruit)

//Array shift unshift

//unshift ----->for adding element in the start
fruits.unshift("ananas");
console.log(fruits);

//shift--->for removing elements from the start

let shiftfruit = fruits.shift();
console.log(fruits);
console.log(shiftfruit);

//push and pops are fast as compared to shift and unshift because shift and unshift just add and remove element in the start and push and pop add and remove element from the last for the they change postion of first item and then add second item
