const name="Gaurav"
const repocount=50

// console.log(name[0]); // access usimg index 
// console.log(name+repocount+" Value");
// console.log(typeof name);
// console.log(`Hello my name is :${name} and my repo count is :${repocount}`); // String interpolation


const Team_name=new String("Kerala Blasters FC"); // other way to declare strings // It is string object
// console.log(Team_name);
// console.log(typeof Team_name);



// String proprties


// console.log(Team_name.length);
// console.log(Team_name.lastIndexOf('as')); // gives last index of passed character or string 
// if passed character or string is not found returns -1

// console.log(Team_name.charAt('a')); // access using charAt function 
// console.log(Team_name.indexOf('e')); // gives first occurence of charcter
// console.log(Team_name.lastIndexOf('e'));
// console.log(Team_name.toUpperCase()); // not the original string

// substring can't take negative values
// if passed negative value substring ignores it
const newString=Team_name.substring(0,4); // (start,end) index its exclude last index
console.log(newString); 

const slicedString=Team_name.slice(-8,-4); // It starts from backwards (length-8,length-4)
console.log(slicedString);


const myName="       Gaurav      ";
// now in real world scenario user can deliberatley enter more spaces 
// To ignore such spaces we can use .trim method
// /trim works only on white space(" ") and line terminators(\n)
// we can alo use trimStart() and trimEnd()
console.log(myName);
console.log(myName.trim()); // remove starting and ending spaces


const url="https://hitesh.com/hitesh%20chaudhary"

console.log(url.replace('%20','-'));

console.log(url.includes("sundar"));

console.log(Team_name.split(" "));



