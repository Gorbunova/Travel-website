//Main script

'use strict';

import animate from './animation/animationScript';

import menuInit from './menu/menuScript';
import pageUp from './menu/pageUp';

import promoSlider from './sliders/promoSlider';
import aboutSlider from './sliders/aboutSlider';
import toursSlider from './sliders/toursSlider';
import reviewsSlider from './sliders/reviewsSlider';
import formSubmit from './form/formSubmit';

const doc = document;

doc.addEventListener('DOMContentLoaded', function () {
	const screenWidth = window.screen.width;
	promoInit();
	if (screenWidth >= 1200) {
		teamInit();
	}
	menuInit('.hamburger', '.menu', '.overlay', '.menu__item');
	animate();
	pageUp('.pageup');

	aboutSlider('.about__carousel-nav > input', '.about__carousel-inner > img');
	toursSlider('.tours__img-slider > picture', '.tours__slider > .prev', '.tours__slider > .next', '.country');
	reviewsSlider('.reviews__slider > .prev', '.reviews__slider > .next', '.slider', '.slider__inner', '.slider__item');

	const form = doc.querySelector('.application__form');
	form.addEventListener('submit', (e) => formSubmit(e, form));
});

function promoInit() {
	const logo = doc.querySelector('.promo__logo'),
		logoContainerText = doc.querySelector('.promo__logo-container-text'),
		menu = doc.querySelector('.menu');

	logo.classList.add('active');
	logoContainerText.classList.add('active');
	menu.classList.add('active');

	promoSlider('.promo__carousel', '.promo__slide', '.promo__markers');
}

function teamInit() {
	const teamPhotos = doc.querySelectorAll('.team__slider-photo');
	teamPhotos.forEach((item) => {
		item.addEventListener('mouseover', () => {
			item.nextElementSibling.style.maxHeight = '300px';
		});
		item.addEventListener('mouseout', () => {
			item.nextElementSibling.style.maxHeight = '70px';
		});
	});
}
