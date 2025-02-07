var a=10;
let b=20;
const c=30;

var a=25; // can be changed
// let b=25;   can't be changed

console.log(++a);
console.log(b++);
a++;
console.log(a);
console.log(--a);

// -- Loops --

//For Loop
for(let i=0;i<=5;i++){
  console.log(i);
}

//For Each loop
arr=[1,23,6,7,987,3,4];
arr.forEach(function(element){
  console.log(element);          // direct picking element
});

// For in                    ${} is template literal
for(let i in arr){
  console.log(`index ${i} has value ${arr[i]}`);          // direct picking index  
}

//For of loop
for(let i of arr){
  console.log(i);     // direct picking element
}

//while loop
let i=10;
while(i<10){
  console.log(a); 
  i++;
}

//do while loop
let a=10;
do{
  console.log(a);    // one time will run definetly
  a++;
}while(i<10);

// DOM ( Document Object Model )  Html code to tree like structure
// Any page is a document and window is a parent of document
