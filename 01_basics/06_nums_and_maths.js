const score=100; // Number datype
// console.log(score);

// const balance =new Number(100.236); // object 
// console.log(balance);

// console.log(balance.toString().length); // convert to string
// console.log(balance.toFixed(2)); // up to two decimal place // round off till 


// const othernumber=23.8966;
// console.log(othernumber.toPrecision(3)); // it gives precision till three digits

// const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN')); // normal indian maths way // 10,00,000



// ++++++++++++++++++++++   Maths +++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6)); 

// console.log(Math.sqrt(49));

// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,5,7,10));

console.log(Math.random()); // always between 0 to 1
console.log(Math.floor(Math.random()*10)+1); // shift range between 1 and 9


const min=10;
const max=20;
// we need value between 10 to 20
// formula is given by Math.floor(Math.random()*(max-min+1))+min

console.log(Math.floor(Math.random()*(max-min+1))+min);

