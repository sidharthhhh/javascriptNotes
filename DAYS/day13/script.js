// decructing object

// let obj = {
//     name: "John",
//     email: "jonh@doe.com",
//     contact: 1234567890
// }

// normal way
// let name = obj.name;
// let email = obj.email;
// let contact = obj.contact;


// destructing way
// let { name, email, contact, city } = obj;
// console.log(obj)
// console.log(name, email, contact, city)

// destructing array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [a, b, c, ,d] = arr;  // d = 5
// console.log(a, b, c, d)


// map , filter, reduce

let profiles = [
    {id: "234mk2", name : "jonh doe"},
    {id: "234mk2", name : "rahul"},
    {id: "254mk2", name : "ranjan"},
    {id: "2432mk2", name : "aakash"},
    {id: "23456mk2", name : "lavkesh"},
    {id: "23434mk2", name : "sachin"}
]

// normal method
// let newarr = [];
// profiles.forEach((e)=>{
//     newarr.push({...e, name: e.name + "."})
// })
// console.log(profiles)
// console.log(newarr)


// map method :- treversing karna hai aur return karna hai new array
// let newarr = profiles.map((e)=>{
//     return {...e, name: e.name + "."}
// })
// console.log(profiles)
// console.log(newarr)


// filter method
let newarr = profiles.filter((e)=>{
    return e.id !== "234mk2";
})
console.log(newarr)


