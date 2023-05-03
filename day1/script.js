
// defining of the function
function hello(){
    console.log("hellooo from the function");
}

//calling of the function
hello()

// example 2  paramaterised function.........
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// -----------------------------------------------

// impure function and non paramerized function
// let a = 2;
// let b = 2;
// function sun(){
//     console.log(a+b);
// }
// sun()


// ---------------------------------------------
// parameterused function
// function sum(a, b){
//     let res = a + b;
//     return res;
// }
// console.log(sum(2,4))
// let result = sum(2,3);
// console.log(result*2)


// ---------------------------------
// fat arrow function 

// nested function 
const add = (a, b) =>{

    const added = (c,d,e) =>{
        return c+d+e;
    }

  return ((a+b)+ added(2,3,4));
}
console.log(add(2,3))

//auto return feature
// let sum = (a,b) => a+b;
// console.log(sum(1,2));

// -----------------------------------------------