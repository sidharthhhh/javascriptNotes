// print sum of all factor
// let n = 12;
// let sum = 0;
// for (let i = 1; i <= n; i++) {  
//     if (n % i == 0) {
//         sum += i;
//     }
// }
// console.log(sum)

// check the number is perfect or notex:- 6 = 1+2+3
// let n = 6;
// let sum = 0;
// for(let i = 1; i<=n; i++){
//     if(n % i == 0){
//         sum += i;
//     }
// }
// console.log(sum === n ? 'perfect number' : 'not perfect number')

// spreate each degit of a number and prent at the new line

// let n = 632;
// while(n>0){
//     rem = n%10;
//     n = parseInt(n/10);
//     console.log(rem);
// }

// find the sum of digit of a number
// let n = 123;
// let sum =0;
// while(n>0){
//     rem = n%10;
//     sum = rem + sum;
//     n = parseInt(n/10);
    
// }
// console.log(sum)


//accept the number and prient its reverse
// let n = 123;
// let rev = 0;
// while(n>0){
//     rem = n % 10;
//     rev = rev* 10 + rem;
//     n = parseInt(n/10);
// }
// console.log(rev)

// pelindrone number or not
// let n = 121;
// let rev = 0;
// let temp= n;
// while(n>0){
//     rem = n % 10;
//     rev = rev* 10 + rem;
//     n = parseInt(n/10);
// }
// console.log(rev);
// console.log(rev === temp ? 'pelindrone' : 'not pelindrone')

//  check the number is prime no or not
// let n = 12;
// let isPrime = true;
// for(let i = 2; i<n; i++){
//     if(n%i == 0){
//         isPrime = false;
//         break;
//     }
// }
// console.log(isPrime ? 'prime' : 'not prime')

function isPrime(n){
    
    let flag = `true ${"its a prime number"}`;
    for(let i = 2; i<= n/2; i++){
        if(n%i === 0){
            flag = `false ${"not a prime number"}`;
            break;
        }
    }
 return flag
}
let num = +prompt("enter the number");
console.log(isPrime(num))


