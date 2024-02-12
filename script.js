document.querySelector(".hamburger").addEventListener("click", abc);
function abc() {
  document.querySelector(".nav-links").classList.toggle("show");
  document.querySelector("body").classList.toggle("block-scroll");
}