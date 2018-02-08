let promise = new Promise(function(resolve, reject) {
   console.log('Promise');
   resolve();
 });

//--自定义 done 方法，处于回调链的尾端，保证抛出任何可能遇到的错误
 Promise.prototype.done=function(onResolved,onRejected){
   this.then(onResolved,onRejected).catch(function(reason){
      //-抛出一个全局错误
      setTimeout(()=>{throw reason},0)
   })
 }
 
 promise.then(function() {
   console.log('resolved.');
 });
 
//  console.log('Hi!');
//  console.log('12')
//  setTimeout(function(){
//     console.log(8989)
//  },1000)
console.log(promise.done())

 