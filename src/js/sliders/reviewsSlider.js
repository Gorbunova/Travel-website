//The module is responsible for the functionality of the slider in the "reviews" section
'use strict';

function reviewsSlider(prevSelector, nextSelector, sliderSelector, sliderInnerSelector, slidesSelector) {
	const doc = document;

	const prev = doc.querySelector(prevSelector);
	const next = doc.querySelector(nextSelector);
	const sliderWrapper = doc.querySelector(sliderSelector);
	const sliderInner = doc.querySelector(sliderInnerSelector);
	const slides = doc.querySelectorAll(slidesSelector);

	const height = window.getComputedStyle(sliderWrapper).height;
	const heightSlide = +height.slice(0, height.length - 2);

	let offset = 0;

	prev.addEventListener('click', (e) => {
		e.preventDefault();
		offset--;
		if (offset === 0) {
			prev.firstElementChild.style.display = 'none';
		}
		if (offset === slides.length - 2) {
			next.firstElementChild.style.display = 'block';
		}
		sliderInner.style.transform = `translateY(-${heightSlide * offset}px)`;
	});

	next.addEventListener('click', (e) => {
		e.preventDefault();
		offset++;
		if (offset === 1) {
			prev.firstElementChild.style.display = 'block';
		}
		if (offset === slides.length - 1) {
			next.firstElementChild.style.display = 'none';
		}
		sliderInner.style.transform = `translateY(-${heightSlide * offset}px)`;
	});
}

export default reviewsSlider;
