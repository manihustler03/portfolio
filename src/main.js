// Navbar scripts

const navLinks = document.querySelector(".nav-links");
// const navItem = document.querySelectorAll(".nav-item");
function onToggle(e) {
  console.log(e.name);
  e.name = e.name === "menu-outline" ? "close-outline" : "menu-outline";
  navLinks.classList.toggle("left-3");
  

}

// Change Theme

const element = document.querySelector("html"); // Assuming the data-theme attribute is on the <body> tag
const button = document.getElementById("toggle-theme");
const iconChange = document.getElementById("theme-icon");
button.addEventListener("click", function () {
  const currentTheme = element.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  element.setAttribute("data-theme", newTheme);
  iconChange.setAttribute('name',newTheme==='dark'?'moon-outline':'sunny-outline')
 
});
