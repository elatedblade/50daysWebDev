
const bar = document.getElementById("progress-bar");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");


let index = 0;
let temp = 0;

document.getElementById("next").disabled = false;
document.getElementById("prev").disabled = true;

function next() {

    if (index < 3) {
        index += 1;
        temp = index/3 * 100;
        bar.style.width = temp + "%";
    }


    if (index == 1) {
        c2.classList.add("active");
        document.getElementById("next").disabled = false;

    }
    if (index == 2) {
        c3.classList.add("active");
        document.getElementById("next").disabled = false;
    }
    if (index == 3) {
        c4.classList.add("active");
        document.getElementById("next").disabled = true;
        document.getElementById("prev").disabled = false;


    }

}

function prev() {

    if (index > 0) {
        index -= 1;
        temp = index/3 * 100;
        bar.style.width = temp + "%";
    }


    if (index == 1) {
        c3.classList.remove("active");
        document.getElementById("prev").disabled = false;
        document.getElementById("next").disabled = false;


    }
    if (index == 0) {
        c2.classList.remove("active");
        document.getElementById("prev").disabled = true;

    }
    if (index == 2) {
        c4.classList.remove("active")
        document.getElementById("prev").disabled = false;

    }
    if (index == 3){
        document.getElementById("next").disabled = true;
        document.getElementById("prev").disabled = false;

    }
}