//let arr=[12,42,45,21,55,56,13];

//arr.forEach((e) => console.log(e))

//for (let  i of arr) {
//   console.log(i);
//}

// arr.forEach(function (e,i){
//   console.log(i,e);
// });

// let obj = {
//   name : "sidharth ",
//   email: "sid@gmail.com",
//   password: "lol"
// }

// for (const k in obj) {
//    console.log(k, obj[k]);
// }
// object ke andarr key hoti haii

// how can copy array and objects

// let aar = [12,43,65,89,13];
// spread operator is used here
// let brr = [...aar]; 

// brr[0] = 00;
// brr[1] = 90;

// console.log(`aar` , aar);
// console.log(`brr`, brr);

// coping of objects

// let ojj = {
//   name : "sid",
//   age : 19
// }
// let ojj1 = {...ojj};

// ojj1.age = 20;

// console.log(`ojj`, ojj);
// console.log(`ojj1`, ojj1);



function calc(a){
    return function(b){
      return a+b;
    }
  }
  var ans = calc(12);
  var finalans = ans(13);