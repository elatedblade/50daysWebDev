const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", checkCards);

checkCards();

function checkCards() {
    let threshold = window.innerHeight * 0.98;
    cards.forEach(card => {
        let bottom = card.getBoundingClientRect().bottom
        console.log("threshold: " + threshold);
        console.log("bottom: " + bottom);
        if (bottom < threshold) {
            card.classList.add("show");
        }
        else{
            card.classList.remove("show");
        }
    });
}