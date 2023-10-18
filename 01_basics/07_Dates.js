// Dates

let myDate=new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); // only given=s date in DD/MM/YYYY format
// console.log(myDate.toLocaleString());   // gives date and time
// console.log(myDate.toDateString());

// console.log(typeof myDate); // It is an object

// let myCreateDate=new Date(2023,9,18,18,18); // 24 hours format watch // months start from 0
let myCreateDate=new Date("2023-01-14"); // here months start from 1
let newDate=new Date("01-14-2023");
// console.log(myCreateDate.toLocaleString());
// console.log(newDate.toLocaleString());

let Timestamp=Date.now();
// console.log(Timestamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate=new Date(); // gives the current date
console.log(newdate.getDate());
console.log(newDate.getMonth()+1); // month start from 0 
console.log(newDate.getFullYear()); 
console.log(newDate.getDay()); // gives the day of week
console.log(newDate.getHours());
console.log(newDate.getTime());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));


