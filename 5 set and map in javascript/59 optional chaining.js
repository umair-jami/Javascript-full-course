//optional chaining

const user = {
  firstname: "umair",
  // address: {housenumber: '1234'}
};
console.log(user?.firstname);
console.log(user?.address?.housenumber);
