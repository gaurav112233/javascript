const myobj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift for apple"
}

// loop the objects

// gives all the keys of object
// for (const key in myobj) { 
//     console.log(key);
// }

// gives all values for object
// for (const key in myobj) {
//      console.log(myobj[key]);
// }

// gives both key and value
// for (const key in myobj) {
//    console.log(`${key} : ${myobj[key]}`);
// }


// for arrays
const arr=["js","cpp","rb","py","java"]
// gives index of all elements of array
for (const index in arr) 
{
   console.log(index); 
}

// gives index as well as value at that index
for (const index in arr) {
    console.log(`${index} : ${arr[index]}`);
}

// map can't be traverse using forin loop

