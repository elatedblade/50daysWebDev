let i = 100;

function Timeout() {
  if (i > 0) {
    i--;
    let calc = i;
    console.log(i);
    document.querySelector(".bg").style.filter = "blur(" + calc + "px)";
    document.querySelector(".loading-text").innerText = 100-i + "%";
    document.querySelector(".loadingtext").style.opacity = i/100 ;

  }
}
var myInterval = setInterval(Timeout, 30);