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
