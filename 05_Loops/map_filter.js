// const coding=["java","javascript","C++","Pyhton"]

// FOr each doesn't return any values 
// const values=coding.forEach((item)=>
// {
//     console.log(item);
//     return item;
// })
// console.log(values);


const nums=[1,2,3,4,5,6,7,8,9,10]


// Filter => A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// Returns the elements of an array that meet the condition specified in a callback function.
// if we use curly braces need to write return statement before it
// const ans1=nums.filter((num)=> 
// {
//     return num>4;
// }
// ) ;
// const ans2=nums.filter((num)=> num>4 ) ;

// console.log(ans1);
// console.log(ans2);

// Using for each loops
let ans=[]

// nums.forEach((num)=>{
//     if(num>4)
//     {
//         ans.push(num)
//     }
// })

// console.log(ans);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks);

  userBooks1 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
//   console.log(userBooks1);



// map method
// map =>: A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.


// const new_nums=nums.map((num)=> num+10)
// chaining 
// map of maps
const new_nums=nums
          .map((num)=> num*10)
          .map((num)=> num+1)
          .filter((num)=> num>50)
console.log(new_nums);