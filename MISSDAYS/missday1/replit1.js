let arr = [12,41,46,79,89,32,44,80];

// pop and unshift
//arr.pop();
//console.log(arr);

//arr.unshift(123);
//console.log(arr);

// push and shift
//arr.push(15367474);
//console.log(arr);

//arr.shift();


// rest operator ka use....
// isma bhi 3 dots hoti haii

function rest(name,age,...hobby){
  console.log(name,age,hobby);
}

rest("sid",15, "lol", "bakchodi", "chess", "cricket");

// map and filter

// let copyarr = arr.map((e, i)=>{
//   return e*2;
// })
// console.log(copyarr);

// let copyarr1 = arr.filter((e,i)=>{
//   return e%2;
// })
// console.log(copyarr1);
