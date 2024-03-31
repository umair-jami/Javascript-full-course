//object destructuring
const band={
    bandname:'atif',
    famoussong:'marjava',
    year :  1968,
}
// const bandname= band.bandname
// const famoussong= band.famoussong
// console.log(bandname,famoussong)

// const {bandname,famoussong}=band;

//if we want to change variable name
// const {bandname:var1, famoussong:var2}=band;
// console.log(var1,var2)

// if we want to add some key pairs in seperate variable

const {bandname:var1, famoussong:var2,...restprop}=band;
console.log(var1,var2)
console.log(restprop)