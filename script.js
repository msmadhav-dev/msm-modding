const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
let autoSlideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

/* Auto slide every 4 seconds */
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

/* Restart auto slide when user clicks arrows */
document.querySelector(".slider").addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

document.querySelector(".slider").addEventListener("mouseleave", () => {
  startAutoSlide();
});

/* Init */
startAutoSlide();

