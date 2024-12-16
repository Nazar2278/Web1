const menuTrigger = document.querySelector(".menu-trigger");
const mobileMenu = document.querySelector("nav ul");

menuTrigger.addEventListener('click', ()=>{
	mobileMenu.classList.toggle("active");
})