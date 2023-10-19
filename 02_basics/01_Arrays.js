// Arrays
// Elements in an array can be of different types
// array is resizable
let myArr=[0,1,2,3,4,5];
// console.log(myArr[1]); // index start from 0

// javascript array-copy operation creates shallow copy (whose properties have same reference as that of source opbject)
// so if we change the array in which we have copied the array original array will also change
let myArr2=myArr;
myArr2.push(6); // original array is also affected 
// console.log(myArr2);
// console.log(myArr);

const newArr=new Array(1,2,3,4);


// Array Methods
myArr2.push(7); // insert at back
// console.log(myArr2);
myArr2.pop(); // pop from back
// console.log(myArr2);

myArr2.unshift(9); // insert at front
myArr2.shift(); // remove from front
// console.log(myArr2);

// console.log(myArr2.includes(9));//checks if value is present in array 

// console.log(myArr2.indexOf(5)); // gives index of the elemnt if present

const newarr=myArr.join(); // convert array to stirng

// console.log(myArr);
// console.log(typeof newarr);


// slice, Splice
console.log("A",myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3); // includes the element at last index[3] also 
console.log(myn2);
console.log("C",myArr);

// there are two difference between slice and splice
// 1. slice[1,n) doesn't include elemnt at index n
// splice[1,n] includes element at last index also

// 2.Slice doesn't change an original array
// splice changes the orginal array it removes the selected elemnts from array


