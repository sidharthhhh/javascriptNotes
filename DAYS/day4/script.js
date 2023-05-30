// setimeout  | setintervel

const { CloudDone } = require("@material-ui/icons");

// setTimeout(()=>{
//     console.log("hellllo")
// }, 4000);

// setInterval(()=>{
//     console.log("setintervel")
// },2000)

// let timmer = setInterval(() => {
//     console.log("setinterval ka time");
//     clearInterval(timmer);
// }, 3000);

// web API:- asyncronous code ko handle karta haii...ye browser ka feature haii....
// event loop intermediator ka kaam karta hai web Api oor javascript ke beech ma..........


// AJAX :- asyncronous javascript axianory----------
//JSON - javascript objext notation

// what is AJAX?
// data ke lane or lejaana ka connection between frontend and backend is known as AJAX.
// AjAX data ko frontend se backend and backend se frontend ma lejaata haii.....in short it is connection between frontend and backend

// Fetch / Axios -> iska use karna hota hai AJAX ko implement represent karne ke liye...
// fetch javascrpt ma inbuild ma hota haii.....axios ek third party pakage hota haii.......

fetch("https://picsum.photos/v2/list?page=2&limit=10")
.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

console.log("ab promise ka concept aaaraha haiii");

// promise asyncronous code ke error ko handle karta haiii....................................


