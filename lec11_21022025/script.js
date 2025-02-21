// call(), apply(), bind()

// call -> function invokes directly
// apply -> function invokes directly
// bind -> we can store the reference of that function,for future calling

let studentAyush={
  firstName:"Ayush",
  lastName:"Singla",
  // getName:function(){
  //   console.log(this.firstName+" "+this.lastName);
  // }
  // getResult:function(){
  //   console.log("Passed");
  // }
}
let studentJasjot={
  firstName:"Sahil",
  lastName:"Aggarwal",
  // getName:function(){
  //   console.log(this.firstName+" "+this.lastName);
  // }
  // getResult:function(){
  //   console.log("Passed");
  // }
}
let getName=function getName(classStudent,test){
  console.log(this.firstName+" "+this.lastName+" from class "+classStudent + test);
}

// var print=studentAyush.firstName+" "+studentAyush.lastName;
// console.log(print);

// call -> returns a single value 
// apply -> multiple values can be return
// bind store reference

// const getStudent2=getName.call(studentJasjot,"G16");
// const getStudent1=getName.apply(studentAyush,["G15","G16","G17"],["G80"]);
// const getStudent3=getName.bind(studentJasjot,"G16","G17");      //use later
// console.log(getStudent3())



// Event Bubbling and Event Capturing

// EVENT CAPTURING -> HAPENING FROM GRANDPARENT TO CHILD

// document.getElementById("grandparent").addEventListener("click",()=>{
//   console.log("THIS IS GRANDPARENT");
// },true)
// document.getElementById("parent").addEventListener("click",()=>{
//   console.log("THIS IS PARENT");
// },true)
// document.getElementById("child").addEventListener("click",()=>{
//   console.log("THIS IS CHILD");
// },true)


// EVENT BUBBLING -> HAPENING FROM CHILD TO GRANDPARENT (BY DEFAULT)

// document.getElementById("grandparent").addEventListener("click",()=>{
//   console.log("THIS IS GRANDPARENT");
// },false)
// document.getElementById("parent").addEventListener("click",()=>{
//   console.log("THIS IS PARENT");
// },false)
// document.getElementById("child").addEventListener("click",()=>{
//   console.log("THIS IS CHILD");
// },false)

// this is event bubbling on clicking (child all will be displayed), (on parent and grandparent will be displayed) 


// stopPropagation();

// document.getElementById("grandparent").addEventListener("click",(e)=>{
//   console.log("THIS IS GRANDPARENT");
//   e.stopPropagation();
// },false)
// document.getElementById("parent").addEventListener("click",(e)=>{
//   console.log("THIS IS PARENT");
//   e.stopPropagation();
// },false)
// document.getElementById("child").addEventListener("click",(e)=>{
//   console.log("THIS IS CHILD");
//   e.stopPropagation();
// },false)


// document.getElementById("cs").addEventListener("click",(e)=>{
//   // window.location.href="localhost/cs";
//   console.log(e);
// })

// document.getElementById("ece").addEventListener("click",(e)=>{
//   // window.location.href="localhost/ece";
//   console.log(e);
// })

// document.getElementById("me").addEventListener("click",(e)=>{
//   // window.location.href="localhost/me";
//   console.log(e);
// })


// OPTIMIZE THE PAGE REDIRECTING 
// document.getElementById("subjects").addEventListener("click",(e)=>{
//   window.location.href=e.target.id;
//   console.log("https://localhost/"+e.target.id)
// })

// EVENT DELEGATION
// Instead of using multiple eventListener to every element just add a single event listener to parent

// DEBOUNCING IN JS
// LITTLE TIME DELAY FOR BETTER SEARCHING APPROACH

// document.getElementById("searchInput").addEventListener("input",debouncingFunction);

// let whichCall=0
// let timeout;
// function fetchedData(){
//   console.log("Fetching the API Data",whichCall++);
// }

// function debouncingFunction(){
//   clearInterval(timeout);
//   timeout=setTimeout(fetchedData,2000);
// }

// TASK:
// https://api.chucknorris.io/jokes/categories  fetch:async await

// filter 
// debouncing 


// document.getElementById('search').addEventListener("input",fetchAPI);
// async function fetchAPI(){
//   const data=await fetch("https://api.chucknorris.io/jokes/categories");
//   return data;
// }

// const finalData=fetchAPI();
// finalData.then((res)=>{
//   return res;
// })

