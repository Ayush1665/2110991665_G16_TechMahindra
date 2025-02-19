function createCounter(){
  let count=0;
  return {
    increment:function(){
      count++;
      console.log(count);
    },
    decrement:function(){
      count--;
      console.log(count);
    },
    getCount:function(){
      return count;
    }
  }
}

const value=createCounter();
value.increment();              // 1
value.increment();              // 2 
value.decrement();              // 1
console.log(value.getCount());  // 1