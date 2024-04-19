//sets(it is iterable)
//store data
//sets also have its own methods
//order is not guaranted
//unique items only(no duplicate allowed) big diff. betwenn array and set

//set ko tab use kerna chayie jab hamary pas unique value ho

//creation of set
//inside set we can insert any iterrable object like string or array
const numbers = new Set([1, 2, 3]);
console.log(numbers);
//No index-based system
console.log(numbers[2]); //output:undefined

const items = ["item1", "item2", "item3"];
const item = ["item1", "item2", "item3"];
//we can store different data tyoe in one set
//if we have two array with different names then it will be accepted otherwaise will not be accepted
// mostly we take empty set and leter we add values
const numberset = new Set();
numberset.add(1);
numberset.add(2);
numberset.add(3);
numberset.add(items);
numberset.add(item);
numberset.add(["item1", "item2"]);
numberset.add(["item1", "item2"]);
//for of loop
for (let number of numberset) {
  console.log(number);
}

// console.log(numberset)

//method for checking that set have this item or not
// numbers.has(1)
// it returns true or false  so we  use if and else condition

if (numbers.has(1)) {
  console.log("1 is present");
} else {
  console.log("1 is not present");
}

//uses of set
//extracting of unique elements from array
const num = [1, 2, 2, 3, 4, 4, 5];
const uniquenum = new Set(num);
console.log(uniquenum);
// console.log(uniquenum.length) we can't use ther length property
//for checking length we use for of loop
let length = 0;
for (let element of uniquenum) {
  length++;
}
console.log(length);
