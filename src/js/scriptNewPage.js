//Minimized main script for the pages of the tour program and privacy policy
'use strict';

import menuInit from './menu/menuScript';
import pageUp from './menu/pageUp';

const doc = document;

doc.addEventListener('DOMContentLoaded', function () {
	menuInit('.hamburger', '.menu', '.overlay', '.menu__item');
	pageUp('.pageup');

	const menu = doc.querySelector('nav');
	window.addEventListener('scroll', function (e) {
		if (this.scrollY === 0) {
			menu.classList.add('active');
		} else {
			menu.classList.remove('active');
		}
	});
});
