// function in the javascript
// question1 :-what is function declearation

function square(num){
   return num * num;
}
console.log(square(2)) 

// question2 :- what is function expression

// const square = function(num){
//     return num*num;
// }
// console.log(square(5));

// question3:- what are first class function :- in a language a function is treated like a variable are called first class function

// function square(num){
//     return num * num;
//  }

//  function displaysquare(fn){
//    console.log("square is " + fn(5));
//  }
//  displaysquare(square)
 
// question4: - what is IIFE? imidiatly invoke function expression....

// (function(num){
//     console.log(num*num);
// }(5))

// question5:- what is the output of this- answer is :- 1

// (function(x){
//     return(function(y){
//         console.log(x);
// })(2);
// })(1);

// question6 :- what the output of thsi function scope
// for(let i =0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }

// function Hoisting :- important topic



// arrow funtion 

// const multuply = () => {
//      2*3;
// }

// console.log(multuply())




