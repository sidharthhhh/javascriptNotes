let heading = document.querySelector("h1");
let btn = document.querySelector(".change-btn");
let flag = 1;
btn.addEventListener("click", () => {
    // heading.innerHTML = "ooor heloo bhai"


    if(flag === 0){
        heading.innerHTML = "ooor heloo bhai";
        heading.style.fontSize = "4rem"
        flag = 1;
    }else{
        heading.innerHTML = "hello"
        flag = 0;
    }

    
});