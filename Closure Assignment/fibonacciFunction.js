function memoizedFibonacci(){
  let cache={};
  return function fibonacci(n){
    if(n<=1)return n;
    if(n in cache) return cache[n];           // returns the value if already in cache 
    return cache[n]=fibonacci(n-1)+fibonacci(n-2);
  };
}

const ans=memoizedFibonacci();

console.log(ans(2));    // 1
console.log(ans(4));    // 3
console.log(ans(6));    // 8
console.log(ans(8));    // 21
console.log(ans(10));   // 55 