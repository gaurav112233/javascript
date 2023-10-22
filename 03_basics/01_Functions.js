

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

// console.log(loginUserMessage()); // It returns undefined 


// when we don't know how much parametere are there
// using (...)Rest operator
function calculateCartPrice(...num1)
{
 return num1;
}

// console.log(calculateCartPrice(200,400,500,2000));


const user={
    username:"gaurav",
    price:199
}

// handling object in function
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and its price is ${anyObject.price}`);
}
handleObject(user);
handleObject({
    username:"Hitesh",
    price:2000
})

// Handling Array in function
const myArray=[10,20,40,50];

function returnsecondValue(myArray)
{
    return myArray[1];
}
console.log(returnsecondValue(myArray));