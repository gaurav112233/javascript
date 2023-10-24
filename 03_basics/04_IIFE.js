// Immediately Invoked fuction Expressions(IIFE)
// execute the function immediately after it is written

// To avoid pollution of global variable in the function 

(function chai()
{
    console.log(`DB Connected`);
})(); // IIFE Syntax
// semicolon is compulsory at the end of IIFE
// because IIFE doesn't undersatnd where to stop

(()=> {
    console.log("DB connected TWO");
});



