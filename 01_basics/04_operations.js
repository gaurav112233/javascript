
//  let value=6
//  let negvalue=-value
//  console.log(negvalue);

//  console.log(2+5)
//  console.log(2-5);
//  console.log(2*5);
//  console.log(2**5); // 2 power 5
//  console.log(2/3); // gives actual value float not an integer 
//  console.log(2%3);

//  let str1="Gaurav"
//  let str2=" Shelke"
//  let str3=str1+str2
//  console.log(str1+str2);
//  console.log(str3);


// in below example always rember that till we  find a string normal answer persist
// but when string occurs in operations the normal ans gets convert to string and will append to string
// and after string any operation are there it wii treat them as string addition
//  console.log(1+"2"); // -> 12
//  console.log(typeof(1+"2"));// -> string
//  console.log("1"+2); // -> 12
//  console.log(1+2+"3"+4+5);// -> 3345


// not recommended 
// console.log(+true); // -> 1
// console.log(+""); // -> 0
// let num1,num2,num3;
// num1=num2=num3=2+2;

// let gameCounter=100
// console.log(gameCounter);// -> 100
// gameCounter++;// -> 101
// ++gameCounter; // -> 102
// console.log(gameCounter);// -> 102
// console.log(gameCounter++); // -> 102 // first print the value then increment
// console.log(++gameCounter);// -> 104 // firs increment and then print


// Comparisons 
// console.log(3>5);// -> false
// console.log(3<5); // -> true
// console.log(3!=5); // ->true
// console.log(3==5); // -> false


// different datatypes comparisons
// console.log("2">1); // -> true  // 2 is convertd to number
// console.log("02">1); // -> true

// console.log(null>0); // -> false
// console.log(null==0);// -> false
// console.log(null>=0);// -> true
// the reason for above output is because equality check and comparisons operators(<,>,<=,>=) convert
// null to a number that's why null>=0 -> true and null<0 is false
// but equality checks for equal value
// since null is not a 0 so false

// console.log(undefined>0); // -> false
// console.log(undefined==0);// -> false
// console.log(undefined>=0);// -> false

// === strict check
// it check value as well as datatypes
console.log("02"===1);// -> false