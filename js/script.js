// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = header.querySelector("nav ul");

  // Debugging: Ensure elements are selected correctly
  console.log("Menu Toggle:", menuToggle);
  console.log("Nav Menu:", navMenu);

  // Change header background on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("solid");
      header.classList.remove("transparent");
    } else {
      header.classList.add("transparent");
      header.classList.remove("solid");
    }
  });

  // Toggle mobile menu visibility
  menuToggle.addEventListener("click", () => {
    console.log("Menu Toggle Clicked"); // Debugging log
    navMenu.classList.toggle("show");
    console.log("Nav Menu Classes:", navMenu.classList); // Debugging log
  });
});
