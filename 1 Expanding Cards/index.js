function toggle(x) {
    document.querySelectorAll(".card").forEach(element => {
        if (element.classList.contains("active")) {
            element.classList.remove("active")
        }
    });
    
    document.getElementById(x).classList.add("active");
}
