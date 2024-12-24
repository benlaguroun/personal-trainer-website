// Example: Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle the mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector("#header nav").classList.toggle("active");
});

// Sticky Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const hero = document.getElementById("Hero");
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel .slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);
