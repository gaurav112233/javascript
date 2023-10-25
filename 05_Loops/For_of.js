//Array Specific loops


// For of 

// for array
const arr=[1,2,3,4,5];

// for (const iterator of arr) 
// {
//     console.log(iterator);
// }


// for string 
const greetings="Welcome To the Jungle"

// for (const iterator of greetings) 
// {
//     console.log(iterator);
// }

// MAPS
const map=new Map();
map.set('IN','INDIA')
map.set('ENG','ENGLAND')
map.set('AUS','AUSTRALIA')
map.set('SA','SOUTH AFRICA')

// console.log(map);

for (const key of map) 
{
    console.log(key);
}

for (const [key,value] of map) 
{
    console.log(`${key} : ${value}`);
}

