// let a=10
// const b=20
// var c=30

// var c=300;

let a=300;


// Scope is {} curly braces
if(true)
{
    let a=10
    const b=20
    var c=30
    console.log("inner:",a);
}

// console.log(a); // It throws error due to block scope
// console.log(b); // It throws error due to block scope
// console.log(c);  // It will print(30)  // Due to var variable has global scope

console.log("Outer",a);// let vaiabale has local as well as global scope