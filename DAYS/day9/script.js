// accept name and gender and output according to gender
// male == hello mr. name! good morning 
// female = hello mrs. name! good evening

// let name = prompt("what's ur name");
// let gender = prompt("what's ur gender");


// if(gender === 'male'){
//     console.log(`hello mr. ${name}! good morning!`)
// }
// else if(gender === 'female'){
//     console.log(`hello mrs. ${name}! good evening!`)
// }
// else{
//     console.log(`sorry dude, ${name} u belong to others`)
// }

// accept name and age from th euser 
// output weather he/she can cast vote or not
// i.e Hey jonh! u r eligibal to vote
// or hey john! u r not eligibal to  vote for n more year

let name = prompt("what's ur name");
let age = +prompt("what's ur age");
if (age >= 18) {
    console.log(`${name} ! u r eligible for vote`)
}
else {
    console.log(`${name}! u r not eligible for vote, wait ${18-age} more year`)
}

