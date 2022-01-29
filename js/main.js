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

// window.onload  = () => { window.scrollTo(0, 0) };

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

// scroll button
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.myBtn').fadeIn();
    } else {
        $('.myBtn').fadeOut();
    }
});

$(".myBtn").click(function topFunction() {
    // 1 second of animation time
    // html works for FFX but not Chrome
    // body works for Chrome but not FFX
    // This strange selector seems to work universally
    $("html, body").animate({scrollTop: 0}, 0);
});

//    // loading sections on scroll
//    const allSections = document.querySelectorAll('.section');

//    allSections.forEach(section => { section.classList.add('transition'); })

//    const revealSection = function (entries, observer) {
//        const [entry] = entries;
//        if(!entry.isIntersecting) return;
//        entry.target.classList.remove('section-hidden');
//        observer.unobserve(entry.target);
//    }

//    const sectionObserver = new IntersectionObserver(revealSection, {
//        root: null,
//        threshold: 0.15
//    });

//    allSections.forEach(section => {
//        sectionObserver.observe(section);
//        section.classList.add('section-hidden');
//    });
