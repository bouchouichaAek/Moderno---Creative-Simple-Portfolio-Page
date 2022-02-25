var menuBar = document.getElementById("menu-bar");
var Home = document.getElementById("home");
function displayMenu() {
  menuBar.style.right = 0;
}

Home.onclick = displayMenu;

function closeMenu() {
  menuBar.style.right = "-330px";
}

document.getElementById("close").onclick = closeMenu;
