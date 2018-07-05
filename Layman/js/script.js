var showNav = document.getElementById("show-nav");
var nav = document.querySelector(".main-nav");
showNav.addEventListener("click", showHideNav);
function showHideNav() {
	nav.classList.toggle("visually-hidden-mobile");
}