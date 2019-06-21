// Toggles navigation pane from right to left for mobile devicess

let toggleNavStatus = false;

let toggleNav = () => {
  let getSidebar = document.querySelector(".nav-slider");

  if (toggleNavStatus === false) {
    getSidebar.style.transform = "translateX(0)";

    toggleNavStatus = true;
    // console.log(toggleNavStatus);
  } else if (toggleNavStatus === true) {
    getSidebar.style.transform = "translateX(100%)";

    toggleNavStatus = false;
    // console.log(toggleNavStatus);
  }
};
