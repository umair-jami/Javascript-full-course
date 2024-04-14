//nested destructuring
const users = [
  { userid: 1, name: "umar", gender: "male" },
  { userid: 2, name: "Ubaid", gender: "male" },
  { userid: 3, name: "umair", gender: "male" },
];

const [user1, user2, user3] = users;
console.log(user1);
const [{ name: firstname }, , { gender: user3gender }] = users;
console.log(firstname);
console.log(user3gender);
