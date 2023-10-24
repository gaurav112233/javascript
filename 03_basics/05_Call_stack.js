// function One()
// {
//     console.log("One");
// }
// function Two()
// {
//     console.log("Two");
// }
// function Three()
// {
//     console.log("Three");
// }


// In call stack first global file will be there
// The call stack is of from LIFO
// Once we excecute line 17 call stack also includes One() in it
// after execurtion One() will be removed from stack 
// similarly Two() and Three() will come and will removed from stack
// One();
// Two();
// Three();



// +++++++++++++++++++++++++++++++++++when functin is called within function then call stack+++++++++++++++++++++++

function One()
{
    console.log("One");
    Two();
}
function Two()
{
    console.log("Two");
    Three();
}
function Three()
{
    console.log("Three");
}

One();

// Here in this call stack
// first main function(file) will be there 
// on top of that when code start execution
// first One() will come on top of stack
// inside one we called two()
// two() will on top of One()
// similarly three() will be on top of two()

// first three() execution will be done after bexecution three() will be removed from stack
// similarly for two() and One()