var main = document.querySelector("#main")
var crsr = document.querySelector("#main #cursor")
var h1 = document.querySelector("h1")

main.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+30 + "px"
  crsr.style.top = dets.y + "px"
})
h1.addEventListener("mouseenter",function(){
  crsr.style.scale = 3
})
h1.addEventListener("mouseleave",function(){
  crsr.style.scale = 1
})