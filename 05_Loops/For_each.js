const coding=["java","javascript","C++","Pyhton"]


// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array
// No name for callbackfn
coding.forEach(function(item){
//  console.log(item);
})

// variation
coding.forEach( (element) => 
    {
    // console.log(element);
});

// passing functions declared earlier
// coding.forEach(print);

// function print(item)
// {
//     console.log(item);
// }

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})


const mycoding=[
    {
   languageName:"Python",
   fileName: "py"
    },
    {
   languageName:"Javascript",
   fileName: "js"
    },
    {
   languageName:"Java",
   fileName: "java"
    },
    {
   languageName:"C++",
   fileName: "cpp"
    },

]

mycoding.forEach((item,index,arr)=>
{
    // console.log(item,index,arr);
})

mycoding.forEach((item)=>
{
console.log(item.languageName,item.fileName);
})