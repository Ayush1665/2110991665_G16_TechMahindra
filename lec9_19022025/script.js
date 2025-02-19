// Reduce -> returns does n't returns an array,it returns a single value 

// var sumOfArr=0;
// const arr=[5,4,7,3,1,8];

// for(let i=0; i<arr.length; i++){
//   sumOfArr+=arr[i];
// }

// console.log(sumOfArr);
// const ans=arr.reduce(function(acc,curr){// accumulator -> maintain state & count  current ->iteration
//   acc+=curr
//   return acc;
// },0);  // Initial Value

// console.log(ans)

// const users=[
//   { firstName:"Pratiyush", lastName:"Ray", age:25},
//   { firstName:"Piyush", lastName:"Saini", age:22},
//   { firstName:"Sahil", lastName:"Aggarwal", age:25},
//   { firstName:"Ayush", lastName:"Jawa", age:28},
//   { firstName:"Daksh", lastName:"Singh", age:40},
//   { firstName:"Agamjot", lastName:"Singh", age:26},
// ];

// let ans={};

// users.forEach(user => {
//   ans[user.age]=(ans[user.age] || 0)+1;
// });

// console.log(ans);

// const ans=users.reduce(function(acc,curr){
//   if(!acc[curr.age]){
//     acc[curr.age]=1;
//   }else{
//     acc[curr.age]++;
//   }
//   return acc;
// },{});

// console.log(ans)


// dataMap=[2,5,7,8,3,7,9,10]

// var maxNumber=0
// for(let i=0; i<dataMap.length; i++){
//   if(maxNumber<dataMap[i]){
//     maxNumber=dataMap[i];
//   }
// }

// console.log(maxNumber);

// const ans=dataMap.reduce(function(acc,curr){
//   if(curr>acc){
//     acc=curr;
//   }
//   return acc;
// })
// console.log(ans)


// CALLBACK
// function reachedRestaurant(callback){
//   console.log("You reached");
//   setTimeout(callback,1000);
// }

// function tableFinding(callback){
//   console.log("Table Finding");
//   setTimeout(callback,1000);
// }

// function menuDiscover(callback){
//   console.log("Menu Discover")
//   setTimeout(callback,1000);
// }

// function priceCheck(callback){
//   console.log("Price Check");
//   setTimeout(callback,1000);
// }

// function starterOrder(callback){
//   console.log("Starter Order");
//   setTimeout(callback,1000);
// }

// function mainCourse(callback){
//   console.log("Main Course");
//   setTimeout(callback,1000);
// }

// function dessert(callback){
//   console.log("Dessert");
//   setTimeout(callback,1000);
// }

// function payBill(callback){
//   console.log("Pay Bill");
//   setTimeout(callback,1000);
// }

// SUPPOSE IF SOMEONE CALLBACK IS MISSING IT'S DIFFICULT TO HANDLE THE ERROR HANDLING
// TO SOLVE THIS PROBLEM PROMISES IS INTRODUCED

// Promises -> ASYNC FUNCTION is attached to main function
//  PROMISE is an Object which maintains the state ->
//  PENDING
//  FULLFILED
//  REJECTED


// reachedRestaurant(function(){
//   console.log("I reached Eagle Motel");
// })
// .then(tableFinding)
// .then(menuDiscover)
// .then(priceCheck)
// .then(starterOrder)
// .then(mainCourse)
// .then(dessert)
// .then(payBill)

// const myRestaurantPromise=new Promise(resolve,reject){
//   if(1:30>time>2:30){
//     resolve("Yes Successfully Reached")
//   }else{
//     reject("Can't Reach at Time")
//   }
// }

// PROMISE API's ->
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

// USE CASE

// const githubData=fetch("https://api.github.com/users/ayush1665")

// setTimeout(()=>{
//   console.log(githubData)
// },1000)        
// console.log(githubData)      


// const cart=["shoes","watches","bags","glasses","shirts"];

// createOrder(cart,callback){
//   console.log("ORDER CREATION")
//   orderPayment(orderId,callback){
//     console.log("ORDER PAYMENT")
//     orderSummary(orderId,callback){
//       console.log("ORDER SUMMARY");
//       updateWallet(){
//         console.log("WALLET UPDATED");
//       }
//     }
//   }
// }


// console.log(createOrder(cart))
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet())


const cart=[];
function createOrder(cart){
 const myPromise=new Promise(function(resolve,reject){
  if(cart.length>0){
    console.log("Order Created Successfully")
    resolve("12345");
  }else{
    const err=new Error("Order Failed")
    reject(err.message);
  }
 });
 return myPromise
}

console.log(createOrder(cart))

createOrder(cart)
.catch(function(err){
  console.log("Error Occured")
  console.log(err.message)
})
.then(function (orderId){
  return orderPayment(orderId)
  // console.log("Order Payment Successful")
})

.then(function(orderId){
  return orderSummary(orderId)
  // console.log("Order Summary",orderId)
})
.then(function(orderId){
  return updateWallet()
})

function orderPayment(orderId){
  console.log("Order Payment Successful",orderId);
}
function orderSummary(orderId){
  console.log("Order Summary Created");
}
function updateWallet(){
  console.log("Wallet Updated Successful");
}


// const shoes=["Nike","Addidas","Puma","Jordan","Skechers"]

// function createOrder(shoes){
//   const shoesPromise=new Promise(function(res,rej){
//     if(shoes.length>0){
//       res("6856050");
//       console.log("Order Created");
//     }else{
//       const err=new Error("Order Rejected")
//       rej(err.message)
//     }
//   })
//   return shoesPromise;
// }

// console.log(createOrder(shoes))


// PROMISE APIs ->             Restrictions
// Promise.all()         -> If one of the Promise fail, Failure return    
// Promise.allSettled()  -> Only All settled Promises will return in array form [p1,p2,p3]
// Promise.any()         -> Return first p1 (success),if All fails [err,err] will return 
// Promise.race()        -> Return as it is according to time 

