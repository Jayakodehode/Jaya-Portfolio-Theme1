const menu = document.querySelector("#menubar");
const header = document.querySelector(".header");

function onClick() {
  header.classList.toggle("active");
}
window.onscroll = () => {
  header.classList.remove("active");
};

/**  about page opentabs */

const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const link = document.getElementsByClassName("link");
function openTab(tabname) {
  for (const tablink of tabLinks) {
    if (tablink.classList.contains("active-link")) {
      tablink.classList.remove("active-link");
    }
    tablink.classList.add("active-link");
  }
  for (const tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }

  document.getElementById(tabname).classList.add("active-tab");
  tabname.classList.toggle("active-link");
}

/* ------ JS code  projecttab links  */

const projecttabLinks = document.getElementsByClassName("projecttab-links");
const projecttabContents = document.getElementsByClassName(
  "projecttab-contents"
);
function openProjectTab(tabname) {
  for (const tablink of projecttabLinks) {
    tablink.classList.remove("projectactive-link");
  }
  for (const tabcontent of projecttabContents) {
    tabcontent.classList.remove("projectactive-tab");
  }
  document.getElementById(tabname).classList.add("projectactive-tab");
}
