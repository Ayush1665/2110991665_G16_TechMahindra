//     Higher Order Function
// It is a function that can take another function as an argument or return a function 


// function x(){
//   console.log("i am X");     // This is Callback function   (run after certain task)
// }

// function y(args){
//   console.log("I am y");   // This is Higher order function (taking fn and returning)
//   return args;
// }

// y(x);

// HOF -> function as argument and can return function also
// callback ->  function that is passed as an argument to another function and executed later.

// Callback is also a Higher Order Function

// Higher Order Function

// data=[2,4,6,8,10];

// const calculateDoubleData=function(data){
//   var output=[];
//   for(let i=0; i<data.length; i++){
//     output.push(data[i]*2);
//   }
//   return output;
// }
// const calculateHalfData=function(data){
//   var output=[];
//   for(let i=0; i<data.length; i++){
//     output.push(data[i]/2);
//   }
//   return output;
// }

// const calculateAddTen=function(data){
//   var output=[];
//   for(let i=0; i<data.length; i++){
//     output.push(data[i]+10);
//   }
//   return output;
// }

// console.log(calculateDoubleData(data));
// console.log(calculateHalfData(data));
// console.log(calculateAddTen(data));

// const doubleData=function(data){
//   return data*2;
// }

// const halfData=function(data){
//   return data/2;
// }
// const addData=function(data){
//   return data+10;
// }

// const calculateData=function(data,callback){
//   console.log("We are inside Calculator");
//   var output=[];
//   for(let i=0; i<data.length; i++){
//     output.push(callback(data[i]));
//   }
//   return output;
// }

// console.log(calculateData(data,doubleData));
// console.log(calculateData(data,halfData));
// console.log(calculateData(data,addData));


//an object created from the Array constructor is  Array Prototype

// Polyfill of Map Feature of JS;
// By using prototype

// Array.prototype.mapp=function(logic){
//   var output=[];
//   for(let i=0; i<this.length; i++){
//     output.push(logic(this[i]));
//   }
//   return output;
// }
// console.log(data.mapp(doubleData));

// const value=[2,9,16,42,71];
// const diameter=function(value){
//   return value*2;
// }
// const circumferance=function(value){
//   return 2*3.14*value;
// }
// const area=function(value){
//   return 3.14*value*value;
// }

// console.log(value.map(diameter));
// console.log(value.map(circumferance));
// console.log(value.map(area));

// Filter -. returns an array


// data=[5,4,2,1,6,3,7];

// const isOdd=function(e){
//   if(e%2!=0){
//     return e;
//   }
// }
// Array.prototype.fil=function(val){
//   var ans=[];
//   for(let i=0; i<data.length; i++){
//     if(data[i]%2!=0){
//       ans.push(val(this[i]));
//     }
//   }
//   return ans;
// }

// console.log(data.filter((x)=>x%2!=0))
// console.log(isOdd(data))
// console.log(data.fil(isOdd))


const users=[
  { firstName:"Pratiyush", lastName:"Ray", age:25},
  { firstName:"Piyush", lastName:"Saini", age:22},
  { firstName:"Sahil", lastName:"Aggarwal", age:25},
  { firstName:"Ayush", lastName:"Jawa", age:28},
  { firstName:"Daksh", lastName:"Singh", age:40},
];

// Combine fName and lName

const fullName=users.map((user)=>
  user.firstName+" "+user.lastName
);

console.log(fullName);

// lets Filter out above 24, there full name
const ageFilter=users
.filter((user)=>user.age>24)

console.log(ageFilter)
