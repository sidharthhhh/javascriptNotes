const form = document.querySelector("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    // console.log("hellooooooooooooooo")

    // console.log(input, textarea.value)
    // console.log(event)

    // console.log(event.target[0].value);


    const[title, description]= event.target;
    console.log(title.value, description.value);


    
})
