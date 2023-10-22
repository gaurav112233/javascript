

// Function
function sayMYName()
{
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMYName; // Reference
// sayMYName();// Execution

// function Sum(number1,number2) // Parameters
// {
//     console.log(number1+number2);
// }

function Sum(number1,number2) // Parameters
{
    let result=number1+number2;
    return result;
}

// Sum(3,4);// (3,4)-> Arguments // Add two numbers

const result=Sum(3,5);
// console.log(result);

function loginUserMessage(username="sam") //default value
{
    if(username === undefined) // if(!username)
    {
      console.log("Please enter a user name");
      return;
    }
 return `${username} just logged in`;
}

let print=loginUserMessage("Gaurav");
// console.log(print);

console.log(loginUserMessage()); // It returns undefined 