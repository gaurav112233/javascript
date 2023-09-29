const accountId=144553 // constant varaible can't change the value
let accountEmail="gauravshelke4622@gmail.com"
var accountPassword="ABCDE@123" 
accountCity="Pune" 

// accountId=445 // not allowed
accountEmail="gaurav.shelke20@pccoepune.org"
accountPassword="VWXYZ@123"
accountCity="Mumbai" // in this way without mentionig let ,var and const we can declare varioable 
// in javascript // it is not recommended
let accountState; // no value is unsigned // so prints undefinec
// console.log(accountId);

// console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // used to print multiple variables in tabular structure

/*
  prefer not to use var
  because of issue in block scope and functional scope
  Variables that are declared inside a { } block cannot be accessed from outside the block. 
  Variables declared with the var keyword cannot have block scope and they can be declared inside a { } 
  block and can be accessed from outside the block.
 */

var carName = "Volvo";
var carName;
console.log(carName);
  // If you re-declare a JavaScript variable declared with var, it will not lose its value.
// The variable carName will still have the value "Volvo" after the execution of these statements:

// you cannot re-declare a variable declared with let or const.