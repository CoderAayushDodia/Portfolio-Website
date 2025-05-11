const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

const elements = document.querySelectorAll(".animate-on-scroll");
elements.forEach((el) => observer.observe(el));
