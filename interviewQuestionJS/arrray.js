
// Arrays in Javascript

// Decalaration
let person = {
    name: "Piyush",
    age: 25,
  };
  
  let arr = ["apple", "banana", "cherry", person];
  
  // console.log(arr.length); // know the length of an array
  
  // # Add and Remove Elements
  
  // Add to End of the Array
  // arr.push("orange");
  
  // Remove From End of the Array
    // arr.pop();
    //   arr.pop();
    
    // Add to Top of the Array
      // arr.unshift("orange");
      
      // Remove From Top of the Array
        // arr.shift();
        
        // # Looping Arrays
        // console.log(arr)
  
  // For Loop
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }
  
  // While Loop
  // let i = 0;
  // while (i < arr.length) {
  //   console.log(arr[i]);
  
  //   i++;
  // }
  
  // # Inbuilt Loop Methods
  const numbers = [1, 2, 3, 4, 5];
  
  // map in javascript
//  const newarr =  numbers.map((item, index, array) => {
//     return item + 5;
//   });
//   console.log(newarr)

  
  // filter in javascript
//  const newarr= numbers.filter((item, index, array) => {
//     return item > 3;
//   });
//   console.log(newarr)
  
  // reduce in javascript
  // const newarr = numbers.reduce((prev, item) => {
  //   return prev * item;
  // }, 2);
  // console.log(newarr)
  
  // some in javascript
//   numbers.some((item, index, array) => {
//     return item > 3;
//   });
  
  // every in javascript
//   numbers.every((item, index, array) => {
//     return item < 10;
//   });
  
  // find in javascript
//   numbers.find((item, index, array) => {
//     return item > 3;
//   });
  
  // findIndex
//   const index = [1, 2, 3].findIndex((item) => item === 2);
  // console.log(index);
  
  // Spread and Rest Operators
//   const nums = [1, 2, 3];
//   const nums2 = [4, 5, 6, 7];
  
//   const finalNums = [...nums, ...nums2]; // Spread Operator
  
  // Rest Operator
//   function sum(...numbers) {
//     return numbers;
//   }
  
//   console.log(sum(nums, nums2, 5, "hello"));
  
  // # More Array Methods
  
  // concat
//   nums.concat(nums2, arr);
  
  // Slice
//   arr.slice(-2);
  
  // Splice
//   arr.splice(1, 2, "orange");
  
  // Fill
//   const dummy = [2, 5, 1, 6];
//   dummy.fill(2, 2);
  
  // Flat
//   const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]
  
//   const flattenedArray = flatEx.flat(2);
  // console.log(flattenedArray);
  
  // reverse
//   nums.reverse();
  // console.log(nums);
  
  // sort
//   const unsorted = [5, 2, 10, 7, 3, 1];
//   unsorted.sort((a, b) => b - a);
//   console.log(unsorted);





// --------------------------------------------------------------------------------------------------------------------------------------

// Rest/Spread in Javascript

// how can copy array and objects

// let aar = [12,43,65,89,13];
// spread operator is used here
// let brr = [...aar]; 

// brr[0] = 0;
// brr[1] = 90;

// console.log(`aar` , aar);
// console.log(`brr`, brr);






// coping of objects

// let ojj = {
//     name : "sid",
//     age : 19
//   }
//   let ojj1 = {...ojj};
  
//   ojj1.age = 20;
  
//   console.log(`ojj`, ojj);
//   console.log(`ojj1`, ojj1);



// ----------------------------------------------------------------------------------------------------------------
  


// creating Objects
// let profile = {};
// console.log(typeof profile);

// let profile = {
//     name: "John Doe", // property
//     email: "john@doe.com",
//     skill: "UI/UX Developer",
// };

// read an object
// console.log(profile);
// let prop = "name";
// console.log(profile.name);
// console.log(profile[prop]);

// updation in an object
// profile.name = "Ravi";
// profile.contact = 1234567890;
// profile["name"] = "Ravi";

// deleting a property
// delete profile.email;

// console.log(profile);

// creating array
// let array = [];
// console.log(array);
// console.log(typeof array);
// let array = ["John", 12, "Ui UX"];

// reading array
// console.log(array);
// console.log(array[2]);

// updation
// array[1] = 123;
// array[array.length] = true;
// array[5] = true;

// deleting
// delete array[1];
// console.log(array);

// hello = [h,e,l,l,o]
