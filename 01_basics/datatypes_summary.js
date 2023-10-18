// Primitive Datatypes

// this datatypes are call by value
// 7 : String,Number,Boolean,null,undefined,symbol,BigInt

const score=100; // Number
const scoreValue=0.3; // Number
const isLoggedIn=true; // boolean
const outsideTemp=null; // null
let userEmail; // undefined

const id=Symbol('123') // symbol
const anotherId=Symbol('123')
// console.log(id===anotherId); // return false // we have given same value still it generated different return type

// const bigNumber=3456789043876n; // BigInt


// Reference types / Non-primitive datatypes

// Arrays,Objects,Functions

// arrays
const heros=["shaktiman","nagaraj","doga"]

// objects
const person = {firstName:"John", lastName:"Doe"};

// functions
const myfunction=function()
{
  console.log("Hello World");
}
// myfunction();

// console.log(typeof(score)); // Number
// console.log(typeof(scoreValue));// Number
// console.log(typeof(isLoggedIn));// boolean
// console.log(typeof(userEmail)); // undefined
// console.log(typeof(id)); // Symbol
// console.log(typeof(bigNumber)); // undefined
// console.log(typeof(heros)); // object
// console.log(typeof(person)); // object
// console.log(typeof(myfunction)); // object function




// Javascript is a dynamic typing language. When you declare a variable, you do not need to specify 
// what type this variable is. Javascript engine infers what type this variable is based on the value 
// assigned to at run time.



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) and Heap memory(Non-Primitive)

let my_youtubename="Gauravshelke.com";
let another_name=my_youtubename;
another_name="chaiaurcode"
// console.log(my_youtubename);

// console.log(another_name);


let userOne={
  email:"user@goole.com",
  e_id: "user@ybl"
};

let UserTwo=userOne; // pass by reference here reference is passed
UserTwo.email="gauravgoogle.com" // if we change usertwo then userone will also change due to pass by reference
UserTwo.e_id="gaurav@ybl"
console.log(userOne);
console.log(UserTwo);
