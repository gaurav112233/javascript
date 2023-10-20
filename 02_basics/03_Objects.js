// singelton
//  Object.create()
// Singleton is a design pattern that tells us that we can create only one instance of a class and that 
// instance can be accessed globally.


// object Literals

const my_Symbol=Symbol(8);
// How to use symbol as keys
const js_User={
    name : "Hitesh",
    "Full name" : "Gaurav shelke", // This can't be accessed using dot operator
    age : 18,
    [my_Symbol]:8,// This symbol can't be accessed using dot operator also can't be accessed using ["my_Symbol"]
    location: "Pune",
    email: "gauravshelke4622@gmail.com",
    isLoggedin: false,
    lastLoggindays: ["Monday","Wednesday","Thursday"]
}

//way to access object properties
// console.log(js_User.email);
// console.log(js_User["email"]);
// console.log(js_User["Full name"]);
// console.log(js_User[my_Symbol]);

// change the properties of objects
js_User.email="gaurav@chatgpt.com";
// console.log(js_User["email"]);

// if we want to freeze the object
// Object.freeze(js_User)
js_User.email="gaurav@gpt.com" ; // It will not change value of email 
// console.log(js_User);

js_User.greeting=function()
{
    console.log("Hello Js User");
}

js_User.greeting2=function()
{
    console.log(`Hello Js User ${this.name}`);
}
console.log(js_User.greeting);
console.log(js_User.greeting());

console.log(js_User.greeting2); // it returs it as a anonymous function
console.log(js_User.greeting2());