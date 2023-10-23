const User=
{
    username : "Hitesh",
    price: 1999,

    welcomeMessage: function()
    {
     console.log(`${this.username}, Welcome to website`); // current instance access so we use this
     console.log(this); // It gives the current object instance
    }
}

// User.welcomeMessage();
// User.username="Gaurav"
// User.welcomeMessage();

// console.log(this); // It is pointing to empty() object // in node() environment // not in browser

// function chai()
// {
//     let username="Gaurav"
//     console.log(this); // Gives two many values
//     // console.log(this.username);  // It will give undefined // we can use 'this' like this only in object not in function 
// }
// chai();

// const chai=function()
// {
//     let username="Gaurav"
//     // console.log(this);
//     console.log(this.username);  // It will give undefined // we can use 'this' like this only in object not in function 
// }

const chai=()=> {
    let username="Gaurav"
    // console.log(this);  // will give an empty object
    console.log(this.username);  // It will give undefined // we can use 'this' like this only in object not in function 
}

// chai();


// When we use {} in function it is necessary to write return statement while returning some value
// if we don't use {} no need to use return keyword
// const addTwo=(num1,num2) =>
// {
//     return num1+num2;
// }

// const addTwo=(num1,num2) => num1+num2;
// const addTwo=(num1,num2) => (num1+num2);
// const addTwo=(num1,num2) => {username:"Gaurav"}; // it will give as undefined

const addTwo=(num1,num2) => ({username:"Gaurav"}); // while returning object we neeed to wrap it in () brackets



console.log(addTwo(3,4));