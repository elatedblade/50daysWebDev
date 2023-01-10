const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    document.querySelector(".navhide").classList.add("navshow");
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    document.querySelector(".navhide").classList.remove("navshow");
})

