const headerEl = document.querySelector(".header");
const navBarEl = document.querySelector(".mobile-nav");

navBarEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});
