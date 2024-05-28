//spread operators

//spread operator for array
// const array1=[1,2,3]
// const array2=[1,2,3,4,5]

// const newarray=[...array1,...array2]
// console.log(newarray)

// const array=[...'abcdefgh']
// console.log(array)

// spread operator in object

// in object same key can't exist
//if same key is repeated then the second key will accept

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key3: "value3",
  key4: "value4",
};

const newobj = { ...obj1, ...obj2 };
console.log(newobj);

const obj = { ..."abcdef" };
console.log(obj);

const obj3 = { ...["item1", "item2"] };
console.log(obj3);
