let index = 0; // posición actual
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".pizza").length;

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}
