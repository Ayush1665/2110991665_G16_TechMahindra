// Promises APIs

const myPromisesFromNetflix=new Promise(function(res,rej){
  setTimeout(()=>{
    // rej("hi")
    res("Fetched Data from Netflix");
  },1000)
});

const myPromisesFromTwitter=new Promise(function(res,rej){
  setTimeout(()=>{
    res("Fetched Data from Twitter");
  },5000)
});

const myPromisesFromGithub=new Promise(function(res,rej){
  setTimeout(()=>{
    res("Fetched Data from Github");
  },3000)
});

const myPromisesFromHotstar=new Promise(function(res,rej){
  setTimeout(()=>{
    res("Fetched Data from Hotstar");
    // rej("Fetched Data from Hotstar");
  },4000)
});

const dataFromAll=Promise.all([myPromisesFromGithub,myPromisesFromHotstar,myPromisesFromNetflix,myPromisesFromTwitter])

const dataFromAllSettled=Promise.allSettled([myPromisesFromGithub,myPromisesFromHotstar,myPromisesFromNetflix,myPromisesFromTwitter])

const dataFromAny=Promise.any([myPromisesFromGithub,myPromisesFromHotstar,myPromisesFromNetflix,myPromisesFromTwitter])

const dataFromRace=Promise.race([myPromisesFromGithub,myPromisesFromHotstar,myPromisesFromNetflix,myPromisesFromTwitter])

// console.log(dataFromAll) 
// console.log(dataFromAllSettled)
// console.log(dataFromAny)
// console.log(dataFromRace)

// all 
// Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

// allSettled
// Fulfills when all promises settle.

// any
// Fulfills when any of the promises fulfills; rejects when all of the promises reject.

// race
// Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.


// - - - - -   ASYNC AWAIT - - - - - 

// ASYNC -> a feature to make a function async 
// ASYNC IS ALSO A PROMISE, written in short way

// const helloTech=async function(){
//   console.log("THIS IS HELLO TECH");
// }

// async function helloTech(){
//   console.log("THIS IS HELLO TECH");
// }
// const techData=helloTech();
// // helloTech();
// // console.log(techData);
// techData.then((res)=>{
//   return res;
// })

// const ayushPromised=new Promise(function(res,rej){
//   setTimeout(()=>{
//     res("I will be on time");
//   },4000)
// })

// console.log("Hello Class");
// async function tech(){
//   const promiseofAyush=ayushPromised;
//   console.log(promiseofAyush);
// }

// tech();
// console.log('Class End');

// = = = = = = = = = = = = = = = = =

// console.log("Class start");
// const projectByKuber=new Promise(function(res,rej){  // make the function to return promise
//   setTimeout(()=>{
//     res("Submitted Project Successfully");
//   },5000);
// })
// console.log("Class lunch");

// async function projectEvaluation(){
//   console.log("Attendance Viva");
//   const projectFile=await projectByKuber;   // wait for a promise to return  
//   console.log(projectFile);
//   console.log("Project File Check");
// }

// projectEvaluation()
// console.log("Class End");

// - - - - - - - - - - - - - - - - - 
// console.log("Class Start");
// const FileByKuber=new Promise(function(res,rej){
//   setTimeout(()=>{
//     res("Kuber Writing")
//   },10000)
// })


// // In Async fn for error handling we use try-catch
// async function Evaluation(){
//   try{
//     console.log("Attendance Marking");
//     const fileCheck=await FileByKuber;
//     console.log(fileCheck);
//     console.log("Class End");
//   }
//   catch(err){
//     console.log(err);
//   }
// }

// Evaluation();

// Fetching API Data

async function fetchapApiData(){
  try{
    const data=await fetch("https://api.chucknorris.io/jokes/categories");
    const myData=await data.json();
    return myData;
  }
  catch(error){
    console.log(error);
  }
}

const finalData=fetchapApiData();
finalData.then((res)=>{
  console.log(res);
})

// TASK ->
// NAVBAR -> GITHUB 

// Github at top center
// textbox  Submit button  not found(no user)
// user pfofile details    different apis
//  no of commits          different apis
//  no of repositiries     different apis
//  click on repository and show that commits