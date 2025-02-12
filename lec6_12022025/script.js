// setTimeout and setInterval are async (Callback Functions)
// First sync code will run then after all sync completed then async code will run

console.log(1);
console.log(sumOfTwo(10,5));
function sumOfTwo(a,b){
  return a+b;
}

setTimeout(()=>console.log(4),2000);
var start=1;
var end=1000000;

while(start<end){
  start++;
  console.log(7);
}

console.log('end')
setInterval(()=>console.log(9),4000);

// closures are as it is not garbage
// Disadvantage of closure
// Consume a lot of memory

// --*---*--*--FUNCTIONS*--*--*--*--

// 1) Function statement 
 function xyz(){
  console.log('Hi');
 }

 // Parameterised Function
 let p=print(4,3);
 function print(a,b){
  return a*b;
 }
 // 2) Function expression
 var a=function abc(){
  console.log("Hi");
 }

// 3) Anonymous Function
let f=function(x,y){
  return x/y;
}

// 4) Arrow Function
let add=()=> console.log("Hi");



xyz();
abc();    // abc is not function:TypeError
function xyz(){
  console.log(1);
}
var abc=function(){
  console.log(2);
} 

function xyz(){
  console.log(1);
}
var abc=function cdf(){
  console.log(2);
}

xyz();
abc();