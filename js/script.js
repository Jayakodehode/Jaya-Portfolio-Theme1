const menu = document.querySelector("#menubar");
const header = document.querySelector(".header");
const i = document.getElementsByClassName("fa-solid");

function onClick() {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
}
window.onscroll = () => {
  header.classList.remove("active");
};
