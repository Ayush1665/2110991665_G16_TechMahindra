// A callback is a function passed into another function as an argument and also we can return.
// callbacks can be both async callback and sync callback.
// setTimeout and setInterval are both asynchronous.

// Callback function:
// function a(){
//   console.log("First");
// }
// function b(a){
//   console.log("Second")
// }
// b(a);         // Output:Second

// function a(){
//   console.log("Function a");
// }

// function b(x){
//   console.log("Function b");
//   a();
// }
// b(a());

// const button1=document.getElementById('btn-1');
// const button2=document.getElementById('btn-2');
// const button3=document.getElementById('btn-3');
// const button4=document.getElementById('btn-4');
// const button5=document.getElementById('btn-5');

// button1.addEventListener("click",function(){
//   console.log("This is button 1");
// })
// button2.addEventListener("click",function(){
//   console.log("This is button 2");
// })
// button3.addEventListener("click",function(){
//   console.log("This is button 3");
// })
// button4.addEventListener("click",function(){
//   console.log("This is button 4");
// })

// All events listeners are carrying their scope till the GEC not killed means completion og JS code.

// Closure

// var count=0;
// document.getElementById("btn-5").addEventListener("click",function(){
//   count++;
//   console.log(count);
// })

// document.getElementById("btn-6").addEventListener("click",function(){
//   count++;
//   console.log(count);
// })

// To create closure of addeventlistener

// What is CallStack?
// browser -> JRE (javacscript runtime environment) 

// Part of browser engine:
// 1 Callstack
// 2 webAPIs
// 3 Event loop
// 4 Callback Queue
// 5 Microtask Queue


// What is event loop?

// fn a(3);
// fn b(4);
// fn c(5);
// setTimeout(10,1000);
// fn d(6);
// setInterval(9,2000);

// Microtask (Promises) V/S Macrotask(setTimeout & setInterval)
// Microtask has the more priority than Macrotask


// Task -> 
function reachedRestaurant(callback){
  console.log("You reached");
  setTimeout(callback,1000);
}

function tableFinding(callback){
  console.log("Table Finding");
  setTimeout(callback,1000);
}

function menuDiscover(callback){
  console.log("Menu Discover")
  setTimeout(callback,1000);
}

function priceCheck(callback){
  console.log("Price Check");
  setTimeout(callback,1000);
}

function starterOrder(callback){
  console.log("Starter Order");
  setTimeout(callback,1000);
}

function mainCourse(callback){
  console.log("Main Course");
  setTimeout(callback,1000);
}

function dessert(callback){
  console.log("Dessert");
  setTimeout(callback,1000);
}

function payBill(callback){
  console.log("Pay Bill");
  setTimeout(callback,1000);
}

// Chaining the Callbacks
reachedRestaurant(()=>{
  tableFinding(()=>{
    menuDiscover(()=>{
      priceCheck(()=>{
        starterOrder(()=>{
          mainCourse(()=>{
            dessert(()=>{
              payBill(()=>{               
              })
            })
          })
        })
      })
    })
  })
})

// This situation also called Pyramid of Doom
// Bad Readability
// Debugging is way to impossible

// Solution -> Promises

// Javascript is Interpreted & Compilation language  (It depends on JS engine)
// Google -> V8 Engine (optimized)
// Mozilla -> SpiderMonkey
// JS Engine Program is written in C++

// Code -> Parsing(Make Tokens) -> Interpret -> Compilation
// Parsing -> code into AST(Abstract Syntax Tree)                        astexplorer.net


// Garbage Collector :    
// Mark & Sweep Algo
// Inlining
// Copy elision
// Inline Caching
