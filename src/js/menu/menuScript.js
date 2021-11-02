//The module is responsible for the functionality of menu
'use strict';

function menuInit(hamburgerSelector, menuSelector, overlaySelector, linksSelector) {
	const doc = document;
	let isOpened = false;

	const hamburger = doc.querySelector(hamburgerSelector),
		menu = doc.querySelector(menuSelector),
		overlay = doc.querySelector(overlaySelector),
		links = doc.querySelectorAll(linksSelector);

	menu.classList.add('active');

	hamburger.addEventListener('click', () => {
		if (isOpened) {
			isOpened = false;
			closeMenu();
		} else {
			isOpened = true;
			openMenu();
		}
	});

	links.forEach((item) => {
		item.addEventListener('click', () => {
			setTimeout(closeMenu, 500);
		});
	});

	function openMenu() {
		setTimeout(() => {
			menu.classList.toggle('menu_opened');
		}, 500);
		overlay.classList.toggle('overlay_opened');
		hamburger.classList.toggle('hamburger_opened');
	}

	function closeMenu() {
		menu.classList.toggle('menu_opened');
		setTimeout(() => {
			overlay.classList.toggle('overlay_opened');
		}, 500);
		hamburger.classList.toggle('hamburger_opened');
	}
}

export default menuInit;
