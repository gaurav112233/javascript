// let score=33

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber=Number(score)
// console.log(typeof(valueInNumber)); // this will convert string to number

// let value="33abc";
// let newValue=Number(value);
// console.log(typeof(newValue)); // this will also convert  string to number but as the given string is not a number
// console.log(newValue); // when we print this it will display Not a number (Nan)


// let  value=null
// let newValue=Number(value);
// console.log(typeof(newValue)); // this will also convert null to  number but as the null is not a number
// console.log(newValue); // when we print this it will display 0
// therefore we need to be careful when we take data from user first check whether the entered value is 
// proper number or not

// let  value=undefined
// let newValue=Number(value);
// console.log(typeof(newValue)); // this will also convert undefined to number but as the undefined is not a number
// console.log(newValue); // when we print this it will print Nan

// let  value=true
// let newValue=Number(value);
// console.log(typeof(newValue)); // this will also convert bool to number but as the bool is not a number
// console.log(newValue); // but true means 1 and false means 0


// "33"-> 33
// "33abc" -> Nan but type of (Number("33abc")) is still a number
// true -> 1 false->0


// let isLoggedIn=-1;// 0-> false, remaining all number->true
// let boolIsLoggedIn=Boolean(isLoggedIn)
// console.log(boolIsLoggedIn);
// "" -> false , "Gaurav"->true

let someNumber=188
let newstring=String(someNumber)
console.log(newstring);
console.log(typeof(newstring));




