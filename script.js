// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
// Infinite horizontal parallax background
let positionX = 0;

function animateBackground() {
    positionX -= 0.5; // speed (negative = moves left, positive = moves right)
    document.querySelector(".parallax").style.backgroundPosition = `${positionX}px center`;
    requestAnimationFrame(animateBackground);
}

animateBackground();
// Autoplay video preview on hover
document.querySelectorAll(".project-card").forEach(card => {
    const video = card.querySelector(".preview-video");

    card.addEventListener("mouseenter", () => {
        video.currentTime = 0;
        video.play();
    });

    card.addEventListener("mouseleave", () => {
        video.pause();
    });
});

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");

    setTimeout(() => {
        preloader.style.display = "none";
    }, 600);
});
