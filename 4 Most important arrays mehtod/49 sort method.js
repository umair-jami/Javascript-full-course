//sort method
//ASCII TABLE
//char: acii value


//sort method mutate origional array
//javascript sort all values according string values

// sort  

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

// const userNames = ['umair', 'abcd', 'king', 'umar', 'aabc', 'ABC', 'akram'];
// userNames.sort();
// console.log(userNames);

const array=[1,50,99,863,95,90]


// agar a-b ki value posotive hoi to b ki value pehly or a ki value bas mai ai gi

//this is asscending order
// array.sort((a,b)=>a-b)

//this is dessending order
//these is expected output
// sort method takes callback function
array.sort((a,b)=>b-a)
console.log(array)
//method
//it compares two numbers
//95,90 when we do a-b if ans is posotive value then it put b first and a second and same if negative then it place a first and b second

 const username=['umair','raza','akram']
 username.sort();
 console.log(username) 

 //real example 
 const usercart =[
    {productid:1,productname:'mobile',price:12000},
    {productid:1,productname:'laptope',price:22000},
    {productid:1,productname:'Tv',price:15000},
]

// there we slice method for clone array 
const lowtohigh=usercart.slice(0).sort((a,b) =>{
    return a.price-b.price
})
console.log(lowtohigh)

//for hoigh to low we use b.price-a.price


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125
