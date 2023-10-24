const useremail=[];

// Javascript considers some value as truth or false directly by their intializatoion or assignment
if(useremail)
{
    console.log("Got user email");
}
else
{
    console.log("No user email entered");
}

// Falsy value
// false,0,-0,BigInt 0n,"",null,undefined,nan

// Truthy value
// [],"0","false"," ",{},function(){},any positive integer, any negative integer,any string

// check if array is empty or not
// if(useremail.length === 0)
// {
//     console.log("Empty Array");
// }

const emptyObj={};
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("Empty Object");
// }

// Nullish Coalescing Operator (??) : null ,defined

let val1
// val1=5 ?? 10; // 5 is assigned
// val1= null ?? 10; // To handle null safety
// because if null or undefined is assigned it can cause further error in code 
// so (??) is used for this 

val1=undefined ?? 15;


// console.log(val1);


// Ternary operator 9shorthand for if else statement
// condition ? true:false

let num1=20;
let num2=15;
let num3=1;

// find greates of two numbers
// let greater=num1>num2 ? num1:num2;
// console.log(greater);

// find greatest of three numbers
let greatest=(num1>num2) ? ((num1>num3) ? num1:num3):(num2>num3 ? num2:num3);
console.log(greatest);
