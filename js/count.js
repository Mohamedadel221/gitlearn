//count down days //
const targetDate = new Date("Mar 10, 2024 20:00:00").getTime();
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("min").textContent = minutes;
  document.getElementById("sec").textContent = seconds;
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = "The Sale Endedd Follow Website and See All New Sale";
  }
}, 1000);

//count down days //eeerrreeee

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
