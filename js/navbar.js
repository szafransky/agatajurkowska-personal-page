
// let drop_menu = document.querySelector(".menu");
// console.log(drop_menu);



// let liEl = document.querySelectorAll(".menu li");
// console.log(liEl);

// let hideMenu = (event) => {
// 	event.stopPropagation();
// 	drop_menu.style.display = "none";
// }

// liEl.forEach((el) => {
// 	el.addEventListener("click", hideMenu);

// })

// let menuIcon = document.querySelector(".menu-icon");
// console.log(menuIcon);

let navCheckbox = document.querySelector("input.menu-btn");
let menuLi = document.querySelectorAll(".menu li");

console.log(navCheckbox);
console.log(menuLi);

menuLi.forEach(el => {
	el.addEventListener("click", () => {
		navCheckbox.checked = false;
	});
})
