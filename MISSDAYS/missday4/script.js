// Async and Await
// console.log(1);
// handle async errors
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.log(err));
// console.log(3);

async function asynctosync() {
    console.log(1);
    try {
        let str = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let json = await str.json();
        console.log(json);
    } catch (error) {
        console.log("ERROR >>>", error.name);
        console.log("ERROR >>>", error.message);
    }
    console.log(2);
}
asynctosync();

// Function normal and arrow
// callback function
// Array (CRUD)
// Array methods
// foreach / map / filter
// Objects (CRUD)
// destructuring / rest-spread
// try catch
// use of promise .then().catch()
// async await
