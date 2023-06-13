const redbtn = document.querySelector(".redbtn");
const greenbtn = document.querySelector(".greenbtn");
const box = document.querySelector(".box");
redbtn.addEventListener("click", (event) => {
    // box.style.backgroundColor = "red";
    // box.classList.add("red");
    // box.classList.remove("red");
    box.classList.toggle("red");
    box.innerHTML = "<h1>Heloo</h1>";
});
