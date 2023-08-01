const menuBtn = document.querySelector('.menu')
const uList = document.getElementById("listAndBtn")
const triangle = document.querySelector('.triangle')
menuBtn.addEventListener("click", function(){
   uList.style.display = "flex"
   triangle.style.display = "flex"
})

