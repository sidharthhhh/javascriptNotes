// class  - documnet.getElementByClassNmae
//// id - document.getElementById
//tagname - documnet.getElementByTagname


let heading = document.querySelector("h1");
let changebtn = document.querySelector("button");
// console.log(heading);
// console.log(changebtn);

changebtn.addEventListener("click", ()=>{
    heading.innerHTML = "oor bhai kesa haii"
})

