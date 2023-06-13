var menu = document.querySelector("h3");
var full = document.querySelector("#full-screen");

var flag = 0;

menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    menu.innerHTML = '<i class="ri-close-fill"></i>';
    flag = 1
  }else{
    full.style.top = "-100%";
    menu.innerHTML = '<i class="ri-menu-3-line"></i>';
    flag = 0
  }
});
