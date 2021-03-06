//Module with animations of sections on first / second viewing
'use strict';

import { isFullyVisible, isPartiallyVisible, setSteppedAnimation, setAnimation } from './animationFunctions.js';

function animate() {
	const doc = document;
	const screenWidth = window.screen.width;
	let isScrolling = false;

	window.addEventListener('scroll', throttleScroll, false);

	//Scroll tracking function
	function throttleScroll(e) {
		if (isScrolling == false) {
			window.requestAnimationFrame(function () {
				scroll(e);
				isScrolling = false;
			});
		}
		isScrolling = true;
	}

	//Scroll animations
	function scroll(e) {
		//Titles animations
		const titles = doc.querySelectorAll('.title');
		titles.forEach((title) => {
			if (isPartiallyVisible(title) && !title.classList.contains('used')) {
				title.classList.add('active');
				setTimeout(() => {
					title.classList.remove('active');
					title.classList.add('used');
				}, 4000);
			}
		});

		//Btns animations
		const buttons = doc.querySelectorAll('.button');
		buttons.forEach((btn) => {
			setAnimation(isFullyVisible(btn), btn, true);
		});

		//Promo Section
		const promo = doc.querySelector('.promo');
		const menu = doc.querySelector('nav');
		setAnimation(isFullyVisible(promo), menu, true);

		const logo = doc.querySelector('.promo__logo');
		setAnimation(isFullyVisible(logo), logo, true);

		//About Section
		const aboutCarousel = doc.querySelector('.about__carousel');
		setAnimation(isPartiallyVisible(aboutCarousel), aboutCarousel, false);

		const listBenefit = doc.querySelector('.about__benefits');
		const benefits = doc.querySelectorAll('.about__benefits > li');
		setSteppedAnimation(isPartiallyVisible(listBenefit), 0, benefits, true);

		//Why Section
		const whySect = doc.querySelector('.why');
		const mountainDivider = doc.querySelector('.why__divider');
		setAnimation(isFullyVisible(whySect), mountainDivider, false);

		const listReasons = doc.querySelector('.why__reasons');
		const reasons = doc.querySelectorAll('.why__reasons-item');
		setSteppedAnimation(isFullyVisible(listReasons), 0, reasons, true);

		//Tours Section
		const navItems = doc.querySelectorAll('.tours__navigation');
		const toursMainSlide = doc.querySelector('.tours__img-slider > .main');
		const toursSlider = doc.querySelector('.tours__img-slider');
		navItems.forEach((item) => {
			setAnimation(isFullyVisible(toursMainSlide), item, true);
		});
		setAnimation(isFullyVisible(toursMainSlide), toursSlider, true);

		//Team Section
		const teamSlider = doc.querySelector('.team__slider');
		const teamSliderDescrs = doc.querySelectorAll('.team__slider-item');
		if (screenWidth >= 577) {
			setSteppedAnimation(isPartiallyVisible(teamSlider), 0, teamSliderDescrs, true);
		} else {
			teamSliderDescrs.forEach((item) => {
				setAnimation(isPartiallyVisible(item), item, false);
			});
		}
		//Reviews Section
		const reviewsSlider = doc.querySelector('.reviews__slider');
		setAnimation(isFullyVisible(reviewsSlider), reviewsSlider, true);

		//Contacts Section
		const contactsSection = doc.querySelector('.contacts');
		const contactsItems = doc.querySelectorAll('.contacts__item');
		const contactsWrapper = doc.querySelector('.contacts__wrapper');
		setSteppedAnimation(isPartiallyVisible(contactsWrapper), 0, contactsItems, true);
		setAnimation(isPartiallyVisible(contactsSection), contactsSection, false);

		//Footer
		const footer = doc.querySelector('.footer');
		setAnimation(isPartiallyVisible(footer), footer, false);
	}
}

export default animate;
