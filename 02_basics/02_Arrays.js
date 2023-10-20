const marvelHeros=["Thor","Ironman","Spiderman"]
const dcHeros=["Superman","Flash","Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros); // It will push array of dcHeros into marvel heros as other array
// // It will create array of array
// console.log(marvelHeros[3][1]); // get 2nd element from 3rd element(array) in marvelHeros 


// To merge dcHeros into marvelHeros
// To merge in single list we need to assign to third arrays
// let result=marvelHeros.concat(dcHeros); // returns a new array
// console.log(result);


// Below code also does same work
// but here advantage is we can take two or more than two arrays to merge
const allnewHeros=[...marvelHeros,...dcHeros]
// console.log(allnewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

// .flat(depth) depth up to which we need to flateen
let real_another_array=anotherArray.flat(Infinity);// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);

console.log(Array.isArray("Gaurav")); // return whether given element is aaraay or not 
console.log(Array.from("Gaurav")); // convert given value into array // Creates an array from an iterable object.
console.log(Array.from({name:"Gaurav"})); // interseting case // if from doesn't understand how to create array based on
// key or value it returns an empty array


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));// Returns a new array from a set of elements.