// variable
// operator
// if else ternary


// accept two interger and print sum
// i.e -> the sum of 45 & 23 is 34

// let a = +prompt("number first")
// let b = +prompt("number second")
// console.log(`The sum of ${a} & ${b} is ${a+b}`);

// accept the marks of three subject P C M and find its total percentage and its total percentage

// let p = +prompt("enter the marks of physics")       
// let c = +prompt("enter the marks of chemistry")
// let m = +prompt("enter the marks of maths")
// let total = p+c+m;
// let percentage = (total/300)*100;
// console.log(`The total marks is ${total} and the percentage is ${percentage.toFixed(2)}`);


// accept the temperature in F and convert in to C

// let f = +prompt("enter the temperature in fahrenheit")
// let c = (f-32)*(5/9);
// console.log(`The temperature in celsius is ${c.toFixed(2)}`);

// accet three interger and print maximum and minimum numbers

// let int1 = +prompt("first interger");
// let int2 = +prompt("second interger")
// let int3 = +prompt("third interger")

// if(int1>int2 && int1>int3){
//     console.log(`the maximum number is ${int1}`)
// }
// else if(int2>int1 && int2>int3){
//     console.log(`the maximum number is ${int2}`)

// }else{
//     console.log(`the maximum number is ${int3}`)
// }

// accept the three 3 numbers, accept two character also, if user say A then the number in acending order otherwise in decending order

let q = +prompt("number 1");
let w = +prompt("number 2");
let e = +prompt("number 3");

let a = prompt("A for acending order and D for decending order");
if (a == "A") {
    if (q < w && q < e) {
        if (b < c) {
            console.log(`the acending order is ${q} ${w} ${e}`)
        }
        else {
            console.log(`the acending order is ${q} ${e} ${w}`)
        }
    }
    else if (w < q && w < e) {
        if (w < q) {
            console.log(`the acending order is ${w} ${q} ${e}`)
        }
        else {
            console.log(`the acending order is ${w} ${e} ${q}`)
        }
    }
    else {
        if (q < b) {
            console.log(`the acending order is ${e} ${q} ${w}`)
        }
        else {
            console.log(`the acending order is ${e} ${w} ${q}`)
        }
    }
} else {
    if (q > w && q > e) {

        // ternirary operator is used here for eliminating the steps
        w > e ? console.log(`the decending order is ${q} ${w} ${e}`) : console.log(`the decending order is ${q} ${e} ${w}`)
    }
    else if (w > e && w > q) {
        q > e ? console.log(`the decending order is ${w} ${q} ${e}`) : console.log(`the decending order is ${w} ${e} ${q}`)
    }
    else {
        q > w ? console.log(`the decending order is ${e} ${q} ${w}`) : console.log(`the decending order is ${e} ${w} ${q}`)
    }
}

