const navBar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navBar.classList.toggle("scrolled", window.scrollY > 0);
});
