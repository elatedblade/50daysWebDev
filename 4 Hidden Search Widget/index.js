const searchBtn = document.querySelector(".icon");
const search = document.querySelector(".search");
const inputBox = document.querySelector(".input");

searchBtn.addEventListener("click", () => {
    search.classList.toggle("bigsearch");
    inputBox.classList.toggle("input-on");
    inputBox.focus();
});