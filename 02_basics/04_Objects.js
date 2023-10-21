const tinderUser=new Object(); // Singelton Object
// const tinderUser={}; // not-singelton object

tinderUser.id="123abc";
tinderUser.name="Gaurav";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email: "gaurav123@icc.com",
    fullname:{
        userFullName:{
            first_name:"Gaurav",
            last_name: "Shelke",
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.first_name);
// console.log(regularUser.fullname.userFullName.last_name);

// Object merging
const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'b'};
const obj3={5:'a',6:'b'};

const obj4={obj1,obj2}; // It will create object of objects
// console.log(obj4);

// .assign(target,source)
// const obj5=Object.assign(obj1,obj2,obj3);  // Here merged object will go in obj1 and obj5
const obj5=Object.assign({},obj1,obj2,obj3);// here merged object will only go in {} and obj5
// console.log(obj5);
// console.log(obj1);

// using spread operator
const obj6={...obj1,...obj2,...obj3};
// console.log(obj6);

// from database data will come in below format
const users=[
    {
        id:1,
        email:'g@gmail.com'
    },
    {
        id:2,
        email:'h@gmail.com'
    },
    {
        id:3,
        email:'i@gmail.com'
    }
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser)); // It will return all keys store in array
// console.log(Object.values(tinderUser)); // It will return all values stored in an array
// console.log(Object.entries(tinderUser)); // give array of arrays containing key:value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check whether object has the given property


// Destructuring of Objects
const course={
    coursename:"js in hindi",
    price:"1999",
    courseInstructor:"Gaurav Shelke"

}

// console.log(course.courseInstructor);

// other way of getting the value from object
// const {courseInstructor}=course;
// console.log(courseInstructor);

const {courseInstructor:instructor}=course;
// console.log(instructor);

// JSON -> Javascript Object Notation
// here key and value both are strings
// {
//     "name":"Gaurav",
//     "courseName":"js in hindi",
//     "price" :"free"

// }