// object in javascript

// const user = {
//     name: 'John',
//     age: 30,
//     "oor suna" : "badhiyaa"
// }
// user.name = 'sid';
// delete user.age;
// console.log(user)

// delete user['oor suna']
// console.log(user)

// console.log(user["oor suna"])


// ---------------------------------------------------------------------------------------

// how to add dynamic object 

// const property = 'firstname';
// const name = 'sidharth';
// const user ={
//   [property] : name
// }
// console.log(user)
// console.log(user.firstname)

// -----------------------------------------------------------------------------------------------------

// loop in the object ..... use of for in loop 

// const user = {
//     name : 'sidharth',
//     age : 20,
// }
// for(key in user){
    // console.log(key)
//     console.log(user[key])
// }

// -----------------------------------------------------------------------------------------------------------

// question 1 - what is the output of the this

// const obj = {
//     a: "one",
//     b : "two",
//     a: "three"
// }
// console.log(obj)
// first waha third wale ki value se replace ho jaaiga kyuki same key haiii

// ------------------------------------------------------------------------------------------------------------

// question 2 - create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

// let nums = {
//     a : 100,
//     b : 200,
//     title: "my numss"
// }
//  multiplyByTwo(nums);

//  function multiplyByTwo(obj){
//     for(key in obj){
//         if(typeof obj[key]==="number"){
//             obj[key] *= 2;
//         }
//     }
//  }
//  console.log(nums)







