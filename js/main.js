let topNavbar = document.getElementById("nav");
let topBtn = document.getElementById("top");
window.onscroll = function () {
    if(window.scrollY >=300) {
        topNavbar.classList.add("top");
    }else {
        topNavbar.classList.remove("top");
    }
    if(window.scrollY >= 290){
      topBtn.style.display = "block";

     }else{
       topBtn.style.display = "none";
     }
};
topBtn.onclick = function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth",
  });
};
//loader//


//loader//

// onchange // 
const plus = document.querySelector(".plus"),
inputs = document.querySelector(".inputs"),
equ = document.querySelector("equals");

let a = 1;
plus.addEventListener("click", function(){
  a ++ ;
  a = (a < 10) ? "0" +  a:a ;
  inputs.innerText = a;
});

inputs.addEventListener("click",() =>{
  if(a > 1){
    a--;
    a = (a < 10) ? "0" +  a:a ;
    inputs.innerText = a;
  }
});

// onchange number

// onclick toggle ul li//
 
// onclick toggle ul li//
