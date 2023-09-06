/* ----- JS code for light and dark theme ----- */
const darkLight = document.querySelector(".theme-darklight");
function changeTheme() {
  darkLight.querySelector("i").classList.toggle("fa-moon");
  darkLight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("light");
  resetColors();
}

window.addEventListener("load", () => {
  if (document.body.classList.contains("light")) {
    darkLight.querySelector("i").classList.add("fa-moon");
  } else {
    darkLight.querySelector("i").classList.add("fa-sun");
  }
});
/* ----- JS code for maincolor changing ----- */

document.querySelectorAll(".color-picker .color").forEach((color) => {
  color.addEventListener("click", () => {
    const maincolor = color.getAttribute("data-color");

    if (document.body.classList.contains("light")) {
      document
        .querySelector("body.light")
        .style.setProperty("--main-color", maincolor);
    } else {
      document.body.style.setProperty("--main-color", maincolor);
    }
  });
});

function resetColors() {
  const originalLightColor = "#680ea0"; // Replace with your original light mode color
  const originalDarkColor = "#07edec"; // Replace with your original dark mode color

  document
    .querySelector(":root")
    .style.setProperty("--main-color", originalDarkColor);

  if (document.body.classList.contains("light")) {
    document
      .querySelector("body.light")
      .style.setProperty("--main-color", originalLightColor);
  } else {
    document.body.style.setProperty("--main-color", originalDarkColor);
  }
}
