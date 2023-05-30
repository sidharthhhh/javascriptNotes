// asynchronous JavaScript
// promise in javascript

// it hamdle asynchronous error
// creation of promises 
 //let promise = new //Promise((resolve, reject)=>{
 //  resolve("resolve")
 //})
//console.log(promise);

function Getdata(n){
    let pp = new Promise((resolve, reject)=>{
  
  
  setTimeout(()=>{
  if (n%2===0) {
        console.log(`even no`);
     } else {
        console.log(`odd no`);
     }
    })
    }, 3000)
  return pp
  }
  // use of function promise- approch 1
  Getdata(13)
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
   console.log(err);
  })
  
  console.log(`heloooooo sid`);
  
  
  // use of functions promise async\await - apporch 2
  
//   takedata(n){
//     if (n%2===0) {
//        console.log(`even no`);
//     } else {
//        console.log(`odd no`);
//     }
//     }
  
  
//   async function resolver(){
//     console.log(`1`);
//     try {
//        let result = await Getdata(11)
//   console.log(result);
//     } catch (err) {
//        console.log(err);
//     }
  
//     console.log(`3`);
//     }
//   resolver()
  
  
  
  
  
  
  