// For loops
for (let i = 0; i<=10; i++) {
    // console.log(i);
}

// for (let i = 1; i <=10; i++) 
// {
//    console.log(`Outer loop : ${i}`);

//    for (let j = 0; j <=10; j++) 
//    {
//     // console.log(`Inner loop : ${j}`);
//     // tables from 1 to 10
//     console.log(i+'*'+j+'='+i*j);
    
//    }
    
// }


// Array traversal
let myarray=["thor","Captain america","Jon Snow","Arya Stark"];
// for (let index = 0; index < myarray.length; index++) {
//     console.log(myarray[index]);
// }

// break and continue


// continue is used to skip some iteration

for (let i = 0; i <=10; i++) {
    if(i==5) // when i==5 the below staement of if are skipped for i=5;
    {
        continue;
    }
    // code doesn't go below if when the codnition is true
    console.log(i);
    
}

// break --> break from loop when condition is met
// skips current all remaining iterations and comes out of loop
for (let i = 0; i <=10; i++) {
    if(i==5) // when i==5we will go ou of the loop
    {
        break;
    }
    
    console.log(i);
    
}



