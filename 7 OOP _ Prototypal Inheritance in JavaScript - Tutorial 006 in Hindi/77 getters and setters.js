//getters and setters
class person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  //method 1
  //if we want to change first and last name of object after creation then we use 'SetName'
  // setName(firstname,lastname){
  //   this.firstname=firstname
  //   this.lastname=lastname
  // }

  // 2nd method
  //agar hum chahty hai ky simple person1.fullname='umair raza' likhy or name change ho jai to hum ko set method use kerna chahiye
  set fullname(fullname){
    const [firstname,lastname] = fullname.split(" ")
    this.firstname=firstname
    this.lastname=lastname
  }
}

const person1 = new person("umair", "ramzan", 18);
console.log(person1);
//if we want to call method function without parenthesis mean fullname without () then we use get in the start of method
console.log(person1.fullname);

// for method 1
// person1.SetName('raza','somroo')
//we also use this
// person1.firstname = "raza";
// person1.lastname = "somroo";


// method 2
person1.fullname="umair raza"

console.log(person1.fullname);
