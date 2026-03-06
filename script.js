// HERO ANIMATION (keep)
window.addEventListener("load", function () {

    const text = document.getElementById("heroText");
    const image = document.getElementById("heroImage");

    setTimeout(() => {
        text.classList.add("animate");
    }, 300);

    setTimeout(() => {
        image.classList.add("animate");
    }, 800);
});


// SCROLL REVEAL USING INTERSECTION OBSERVER
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach((section) => {
    observer.observe(section);
});