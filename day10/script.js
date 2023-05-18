// factorial of a number
// let n = +prompt("enter number ");
// let fact = 1;

// this loop is also correct...................................
// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }
// for(let i = n; i<=n; i--){
//     fact = fact*i;
// }
// console.log(fact)

// --------------------------------------------------

// print the sum of all even & odd natural numbers in a range seperately

// const sumevenodd = (n) => {
//     let even = 0;
//     let odd = 0;
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0) {
//             even += i;
//         } else {
//             odd += i;
//         }
//     }
//     return `the sum of even and odd number is ${even} and ${odd}`
// }

// let res = sumevenodd(+prompt("enter the number"));
// console.log(res)

// ----------------------------------------------------------------------------------------

// question- print all the numbers  which are either divisible by 3 and 5 in a range

// let start = +prompt("enter the starting value");
// let end = +prompt("enter the ending value");

// for(let i = start; i<= end; i++){
//     if(i%3 == 0 || i%5 == 0){
//         console.log(i)
//     }   
// }


// const numdib = (start, end) => {
//     for(let i = start; i<= end; i++){
//         if(i%3 == 0 || i%5 == 0){
//             console.log(i)
//         }   
//     }

// }
// numdib(+prompt("enter the starting value"), +prompt("enter the ending value"))

// print all the factors of a number

const factors = () => {
    let n = +prompt("enter the number");
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i)
        }
    }
}
factors()