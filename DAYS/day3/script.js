// destructuring of object

// let obj = {
//     name : "sidharth",
//     age : 12,
//     city : "Bhopal"
// }



// let {name, age, city, skills} = obj;
// console.log(name, age, city, skills); // jo value nhi hogi usks result undefine aaiga


// array destrucing

//let arr = [12,43,23,54,65,423];

// let a = arr[0];
// let b = arr[1];

// console.log(a, b)

//let[a, , , , b] = arr;
//console.log(a,b); // comma ka use karte hai kyuki, element ko skip karne ke liyee.


// Error handling or exception handling. try - catch

// try {
//     let a = 3;
//     console.log(a+b);
// } catch (error) {
//     // console.log(error) // seedha error ko btaata hai ye .........

//     console.log("error ka naam"+error.name);
//     console.log("error ka message"+error.message);
// }

// jo error khud hi generate karna ho too

try {
    let n = +prompt("enter the munber");
    if (n % 2 !== 0) {
        throw Error("odd values are not accepted")
    }
    console.log(n)
} catch (error) {
    console.log(error.message);
}



