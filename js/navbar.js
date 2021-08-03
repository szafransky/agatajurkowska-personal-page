let lastScrollpos = window.pageYOffset;
let menuButtonCheck = document.querySelector(".menu-btn");
console.log(menuButtonCheck);
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (lastScrollpos > currentScrollPos) {
		document.getElementById("top-nav").style.top = "0";
        console.log(document.getElementById("top-nav"));
	} else {
		document.getElementById("top-nav").style.top = "-75px";
        console.log(document.getElementById("top-nav"));
	}
	lastScrollpos = currentScrollPos;
	menuButtonCheck.checked = false;
} 