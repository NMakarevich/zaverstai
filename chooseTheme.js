let themesNav = document.querySelector('.themes-nav');
let themeButton = document.querySelector('.themes');
let themeItems = themesNav.querySelectorAll('li');

themeButton.onclick = function() {
	themesNav.classList.toggle('hidden');
};
