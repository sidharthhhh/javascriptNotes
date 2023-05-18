// Simple Interest - p*r*t/100
// let p = 100;
// let r = 5;
// let t = 2;
// si = (p * r * t) / 100;
// console.log(si);

// compound interest
// A,P,r,n,t variables we have
// let Amount = p*(1+ (r/n) ) ** (r*t)
// console.log(2 ** 5);

// let a = 12;
// let b = 6;
// console.log(a);
// console.log(b);

// with using 3rd variable
// let temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

// without using 3rd variable
// a = a + b; //18
// b = a - b; // 12
// a = a - b; // 6
// console.log(a);
// console.log(b);

// loops - for while  ---- dowhile
// let n = +prompt("enter number ");
// via for loop
// for (let i = 0; i < n; i++) {
//     console.log("hello world");
// }

// via while loop
// let i = 0;
// while (i < n) {
//     console.log("hello world");
//     i++;
// }

// let n = +prompt("enter number ");

// 24) Accept an integer and Print hello world n times
// 25) Print natural number up to n.
// 26) Reverse for loop. Print n to 1.
// 27) Take a number as input and print its table
//        5 * 1 = 5
//        5 * 2 = 10 ... up to 10 terms
// 28) Sum up to n terms.
// 29) Factorial of a number
// 30) Print the sum of all even & odd numbers in a range seperately.
// 31) Print all the numbers which are either divisible by 3 or 5 in a range

// let h = prompt("enter hello world");
// for(let i = 0; i<=10; i++){
//     console.log(h);
// }

// print sum of natural number
let n = +prompt("enter number ");
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);
