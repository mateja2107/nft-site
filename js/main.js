const body = document.querySelector("body");
const navbar = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}

cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

if(cancelBtn.style.display !== 'none') {
    let navElements = document.querySelectorAll('.nav-el');

    for(let el of navElements) {
        el.onclick = () => {
            body.classList.remove("disabled");
            navbar.classList.remove("show");
            menuBtn.classList.remove("hide");
        }
    }
}