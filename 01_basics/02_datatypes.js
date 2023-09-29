"use strict";  // treat all JS code as newer version

// alert(3+4) // will give an error // as we are using in nodejs not in browser

console.log(3
    +
    3) // code readability should be high

let name="Gaurav" // string
let age=23 // number
let isLoggeddin=true // boolean
let state=null


// primitive datatypes
// number -> 2 to power 53
// bigint
// string=""// single or double quote
// boolean true or false
// null -> standalone value  // some error value is not gotten so null
// undefined -> abhi value assigned nahi hui hain
// symbol -> unique

console.log(typeof "Gaurav");
console.log(typeof undefined) ; // output is undefined
console.log(typeof null); // null is an object


// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");