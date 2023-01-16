const xbox = document.querySelector(".xbox");
const ps = document.querySelector(".ps");

console.log(xbox);
console.log(ps);

xbox.addEventListener("mouseenter", () => {
    xbox.classList.add("hover");
    ps.classList.add("no-hover");
    console.log("Mouse on xbox");
});
xbox.addEventListener("mouseleave", () => {
    xbox.classList.remove("hover");
    ps.classList.remove("no-hover");
    console.log("Mouse off xbox");
});

ps.addEventListener("mouseenter", () => {
    ps.classList.add("hover");
    xbox.classList.add("no-hover");
    console.log("Mouse on ps");
});
ps.addEventListener("mouseleave", () => {
    ps.classList.remove("hover");
    xbox.classList.remove("no-hover");
    console.log("Mouse off ps");
});
