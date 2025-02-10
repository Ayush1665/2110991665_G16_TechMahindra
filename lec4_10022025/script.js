// Javascript is single threaded language and loosely typed language 
// Single threaded -> One task at a time
// loosely typed language -> variable and calling from anywhere

// Synchronous and Asynchronous
// Javascript is Synchronous but also has a feature of Asynchronous
// Synchronous -> When code runs line by line 
// Asynchronous -> When some code run parallely or wait for their own execution

// It will block the thread in case of Synchronous.
// Solution: use async/await 

// GEC (Global Execution Context)
// JavaScript code runs in two phases
// In first phase the memory will store variables with value undefined 
// In second phase the memory will store the actual value


// console.log("Hello");

// var a=10;

// function squareOfTwoNumber(x){
//   var ans=x*x;
//   return ans;
// }

// console.log(squareOfTwoNumber(a));

// console.log("Program Ends");


// console.log(abc);
// sumOfTwo(10,5);
// var abc=29;

// function sumOfTwo(a,b){
//   var ans=a+b;
//   return ans;
// }

// var majorAns=sumOfTwo(6,8);
// console.log(majorAns);

// Types of Error -> ReferenceError TypeError SyntaxError


// Hoisting
// const and let both are hoisted

// console.log(xyz);
// console.log(sumOfTwo(10,16));
// let xyz=12;

// function sumOfTwo(a,b){
//   var ans=a+b;
//   return ans;
// }

// console.log.log(sumOfTwo(19,27));

// Window -> Parent of DOM and Global object
// In js window===this,value returns is true

// Child calls parent,Parent calls GrandParent
// Child = Parent + GrandParent
// Parent= GrandParent

// ======================

// Space between Phase 1 and Phase 2 s Tempororal Dead Zone (TDZ)