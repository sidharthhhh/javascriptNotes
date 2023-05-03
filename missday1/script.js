// creating Objects
// let profile = {};
// console.log(typeof profile);

let profile = {
    name: "John Doe", // property
    email: "john@doe.com",
    skill: "UI/UX Developer",
};

// read an object
// console.log(profile);
let prop = "name";
// console.log(profile.name);
// console.log(profile[prop]);

// updation in an object
profile.name = "Ravi";
profile.contact = 1234567890;
// profile["name"] = "Ravi";

// deleting a property
delete profile.email;

// console.log(profile);

// creating array
// let array = [];
// console.log(array);
// console.log(typeof array);
let array = ["John", 12, "Ui UX"];

// reading array
console.log(array);
console.log(array[2]);

// updation
array[1] = 123;
// array[array.length] = true;
array[5] = true;

// deleting
delete array[1];
console.log(array);

// hello = [h,e,l,l,o]
