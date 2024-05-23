//we can use only one time defalut export in one file

export default class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  info() {
    console.log(this.firstName, this.lastName, this.age);
  }
}
//second person
export class Person2 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  info() {
    console.log(this.firstName, this.lastName, this.age);
  }
}
