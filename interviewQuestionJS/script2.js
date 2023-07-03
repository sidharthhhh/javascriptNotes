// question1 - given a string of words, reverse each word in a string

// let str = "oor bhai kesa haiii";
// let newstr = str.split(" ")
// .map((e)=>{
//     return e.split("").reverse().join("");
// })
// console.log(newstr)
// console.log(newstr.join(" "));






// question2 - how to check an object is array or not by wring some pf code

// function chackarraya(e){
//     return Array.isArray(e);
// }
// console.log(chackarraya([]));
// console.log(chackarraya({}))

// question3- how to empty an array and do not make new array and do not 
// loop through the array 

// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.length = 0;
// console.log(arr)

// question 4- how to check a number is interger or not (Number.isInteger())- isse nhi karna ho too

// let num = 23.3;
// console.log(Number.isInteger(num));
// console.log(num%1 === 0? "interger" : "not interger")

// question4 - make this work- 
// duplicate([1,2,3]); // [1,2,3,1,2,3]]

// let arr = [1,2,3];
// function duplicate(arr){
//     return arr.concat(arr);
// }
// console.log(duplicate(arr));

// -----------------------------------------------------------------------------------------------------------------------------

// function

// question5 - make a javascript function that that reverse a number

// let num = 12345;
// let reverse = (num) => {
//     return Number(num.toString().split("").reverse().join(""));
// }
// console.log(reverse(num));

// by using loop

// function revese(num){
//     var rev = 0
//     while(num>0){
//         var rem = num%10;
//         rev = rev * 10 + rem;
//         num = Math.floor(num/10); 
//     }
//     return rev;
// }
// console.log(revese(1234));

// question6 - write a js function to check passed string is a palindrome or not

// let str = "madams";
// const palindrome = (str) =>{
//     return str === str.split("").reverse().join("") ? "palindrine" : "not palindrone number";
// }
// console.log(palindrome(str))

// question 7 - write a js function that retuen the passed string in a alphabatical order

// function alphabaical(str){
//     return str.split("").sort().join("")
// }
// console.log(alphabaical("asdfghjkl"))

// question 8 - write a js function that accept the string as a parameter and convert
// the first letter of each word of the string in upper case

// function uppercases(str){
//     let newstr = str.split(" ").map(function(e){
//        return e.chatAt(0).toUpperCase() + e.substring(1)
//      })
//      return newstr.join(" ")
// }
// console.log(uppercases("my name is sid"))

// --------sahi hai yeee?e
// function uppercases(str){
//     let newstr = str.split(" ") // Split the input string into an array of words.
//     .map(function(e){ // Iterate over the array and convert each word to uppercase.
//        return e.charAt(0).toUpperCase() + e.substring(1)
//     })
//     return newstr.join(" ") // Join the array back into a string and return it.
// }
// console.log(uppercases("my name is sid"))

// question9 - write a js function to get the number of occurence of 
// each letter in specified string   :- .hasOwnProperty() - isse check karke hai ki object ma wo property hai ya nhi

// function occ(str){
//     var occurence = {};
//     str.split("").forEach(function(e){
//         if(occurence.hasOwnProperty(e) === false){
//               occurence[e] = 1;
//         }else{
//             occurence[e] += 1;
//         }
//     });
//     return occurence;
// }
// console.log(occ("apple"))

// question10 - loop and array and all the element of the array

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;

// arr.forEach((e)=>{
//   sum += e
// })
// console.log(sum)

// question11 - in array of number and string add only those number which are number

// let arr = [1,34,,56,"lol", "huihui", 12];
// let sum = 0;
// arr.forEach((e)=>{
//     if(typeof e === "number"){
//         sum += e;
//     }
// })
// console.log(sum)

// question12 - loop an array of object and remove all object which do not have gender's value male

// var arr = [
//     { name: "rahul", gender: "male" },
//     { name: "anjali", gender: "female" },
//     { name: "shivali", gender: "female" },
//     { name: "karanjohar", gender: "other" },
//     { name: "ranjan", gender: "male" }
// ];

// method 1
// let newarr = arr.filter((e)=>{
//     return e.gender === "male";
// })
// console.log(newarr)

// method 2
// sabse phele total non- male count lo
// ek non male bande ko hatane ka code likho
// phir use code ko sabho non male pe chala doo

// let count = 0;
// arr.forEach((e) => {
//     if (e.gender !== "male") {
//         count++;
//     }
// })

// for (var i = 1; i <= count; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j].gender !== "male") {
//             arr.splice(j, 1)
//         }
//     }
// }
// console.log(arr)


// -----------------------------------------------------------------------------------------------------------------------------

// Array
// question 13- write a js function to clone an array

// let clone = (e) =>{
//    return [...e]
// }
// let newarr = clone([1,2,3])
// console.log(newarr)

// function clone(arr){
//     var newarr = [];
//     arr.forEach((e)=>{
//         newarr.push(e);
//     })
//     return newarr;
// }
// let abcd = [ 1,2,3,4,5,6,7,8,9,10];
// let newarr = clone(abcd);
// console.log(newarr)

// question14 - write a js funtion whoch accepts an argument and return the type- 
// note : there are six possible values that typeof returns; object , booleean , function, number
// string and undefined

// let type = (e) =>{
//     return typeof e;
// }
// console.log(type([]));
// console.log(type({}));
// console.log(type(1));
// console.log(type("string"));
// console.log(type(true));
// console.log(type(undefined));
// console.log(type(function(){}));


// question15 - write a js function to get the first element of an arrray 
// passimg a paremeter 'n' will return the first 'n' elements of the array;

// function retrive(arr, n=1){
//     if (n <= arr.length){
//         for(let i = 0; i < n; i++){
//             console.log(arr[i]);
//         }
//     }else{
//         console.log(n + " is greater than the length of the array")
//     }
// }
// retrive([1,2,3,4,4,4,4,5,6,7,8,9,10], 7)