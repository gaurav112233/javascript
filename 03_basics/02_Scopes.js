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
    // console.log("inner:",a);
}

// console.log(a); // It throws error due to block scope
// console.log(b); // It throws error due to block scope
// console.log(c);  // It will print(30)  // Due to var variable has global scope

// console.log("Outer",a);// let vaiabale has local as well as global scope

// Nested Scope
function One()
{
    const username="Gauravs";

    function two()
    {
        const website="Youtube";
        console.log(username);;
    }
    // console.log(website); // It is only accessiblpe in two() function
    // Child can access parent elements

    two();
}
// One();

if(true)
{
    const username="Gaurav";
    if(username === "Gaurav")
    {
        const website="Google";
        // console.log(username + website);
    }
    // console.log(website); // It will throw an error as website is only accessible in inner if block
}

// console.log(username); // It will throw an error as username is accessible in outer if only

// If we don't delcare type of variable (i.e const,var,let) by default it considers it as a var type




// +++++++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)); // we can do call function before intialization 

function addone(num)
{
  return num+1;
}
// console.log(addone(5));


console.log(addTwo(5)); // As function is assigned to variable we can't access like this
const addTwo=function(num) // Also called as expression
{
    return num+2;
}

// console.log(addTwo(5));



