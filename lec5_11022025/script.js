// var let and const (Redeclaration)
// var returns undefined this is not strict
// let and const also stores undefined but they throw error because they are "strict"

// undefined || null || NaN are same
// undefined -> variable declared but value not assign
// null -> value is said tobe null (empty)
// Nan -> Not the correct implementation 

// console.log(a);
// var a=10;

// function asumOfTwo(a,b){
//   var sum=a+b;
//   return sum
// }

// console.log(asumOfTwo(10,9))
// console.log(a)

// setTimeout -> For a particular time period it will stay and when the time is complete it will join the execution thread.

// setInterval -> For a particular time it wll stay in the queue & then join thread and this happens again & again.


// setInterval

// function two(){
//   return 2;

// }
// function four(){
//   return 4;
// }
// console.log(1);
// console.log(two());

// setInterval(()=>{
//   console.log(3)
// },3000);

// console.log(four());

// setInterval(()=>{
//   console.log(3)
// },5000);

// console.log(6);


// for(var i=1; i<=6; i++){
//   function display(){
//     setTimeout(()=>{
//       console.log(i);           // Results in 7 (var is global scope)
//     },1000);
//   }
// }

// display();

// function print(){
//   setTimeout(()=>{
//     console.log(i);
//   },1000);
// }

// for(var i=1; i<=6; i++){
//   console.log(print(i));
// }

// function x(){
//   var a=7;
//   function y(){
//     console.log(a);
//   }
//   a=100;
//   return y;
// }
// var z=x();
// console.log(z);
// z();

// function z(){
//   var b=900;
//   function x(){
//     var a=7;
  
//   function y(){
//     console.log(a,b);
//   }
//   y();
// }
// x();
// }

// z();

// var count=0;
// function increment(){
//   return count++;
// }

// increment();
// increment();
// increment(count);
// console.log(count);


// var count=0;
// for(var i=1; i<=3; i++){
//   function print(){
//     count++;
//   }
//   print();
// }

// console.log(count);

// Higher Order Function (HOF) 
// It can take function as arguments as well as return function


// function counter(){
//   var count=0;
//   return function increment(outside){
//     count++;
//     console.log(count);
//   }
// }


// var counter1=counter();
// counter1();
// counter1();
// counter1();


// function counter(){
//   var count=0;
//   return function increment(outside){
//     count--;
//     console.log(count);
//   }
// }

// var counter1=counter();
// counter1();
// counter1();
// counter1();

function Counter(){
  var count=0;
  this.increment=function(){
    count++;
    console.log(count);
  }
  this.decrement=function(){
    count--;
    console.log(count);
  }
}

var counter1=new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();