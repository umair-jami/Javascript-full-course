// Uncaught ReferenceError: Cannot access 'firstname' before initialization
console.log(firstname)
let firstname='umair'
console.log(firstanme)

//in the case of let the variable declaration before variable initialization will be uninitialized
//in the case of const same error will be ocured

// TDZ(temporal dead zone)
//jab bhi koi variable creat hota hai uski ki value  execution contest mai uninitialized or undefines hoti hai jab tak iss ko console na kia jai

//jab tak hum kisi variablle ko initialized ni kerty tab tak wo Temporal dead Zone mai rahye ga

//iss period ko TDZ mean temporal dead zone kehty hai
