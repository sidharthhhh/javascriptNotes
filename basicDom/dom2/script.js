var istatus = document.querySelector("h5")
var btn = document.querySelector("button")

btn.addEventListener("click",function(){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove Fraaands"
})