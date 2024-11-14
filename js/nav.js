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