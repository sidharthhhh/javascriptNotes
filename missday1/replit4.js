const users = [];
while(true){
  let n = +prompt("1. create an user\n 2. to show all users\n 3.exit");

  if(n===1){
    let username = prompt("enter name");
let email = prompt("enter email")
let designation= prompt("enter designation");

    let user = {
      username,
      email,
      designation
    }
users.push(user)



  }else if(n===2){
    console.log(users);
break;

  }else if(n===3){
    break;
  }else{
    console.log(`choose again`)
}}


let user= {
  name : "sidharth ",
  class : "4th year"
}
let update ={
  ...user,
  name: "gurpreet "
}
console.log(update);
