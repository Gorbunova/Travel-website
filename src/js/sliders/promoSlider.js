//The module is responsible for the functionality of the slider in the "promo" section
'use strict';

import { createSlide, drawLeftSlide, drawRightSlide, updateWidth } from './slider';

function promoSlider(carouselSelector, slidesSelector, markersContainerSelector) {
	const doc = document;

	const slideWrapper = doc.querySelector(carouselSelector),
		promo = slideWrapper.parentElement;

	let slides = getSlides(),
		slider = [],
		widthSlide,
		step = 1;

	let firstPosX = 0,
		posX = 0,
		ifMouseDown = false,
		offsets = [];

	const startPoint = {};
	let nowPoint;

	promoSliderInit();
	createPromoMarkers(markersContainerSelector);

	promo.addEventListener('mousedown', pressMouseButton);
	promo.addEventListener('mousemove', moveMouse);
	promo.addEventListener('mouseup', releaseMouseButton);

	promo.addEventListener('touchstart', touchEventStart);
	promo.addEventListener('touchend', touchEventEnd);

	//The function initializes the slider
	function promoSliderInit() {
		for (let i = 0; i < slides.length; i++) {
			slider[i] = slides[i].innerHTML;
			slides[i].remove();
		}

		const slideClass = slidesSelector.replace('.', '');
		const div = createSlide(slider, slideClass, step, 0);
		slideWrapper.appendChild(div);

		drawRightSlide(slider, slideWrapper, step, slideClass);
		drawLeftSlide(slider, slideWrapper, step, slideClass);
	}

	//The function returns currently rendered slides
	function getSlides(slides = slidesSelector) {
		return doc.querySelectorAll(slides);
	}

	//Scroll slider to the right
	function scrollRight() {
		if (step == 0) {
			step = slider.length - 1;
		} else {
			step--;
		}

		startAnimation();

		const slides = getSlides();
		const widthSlide = updateWidth(slideWrapper);
		let currentOffset = 1;

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.left = currentOffset * widthSlide - widthSlide + 'px';
			currentOffset++;
		}

		setTimeout(function () {
			slides[2].remove();
			drawLeftSlide(slider, slideWrapper, step, slidesSelector.replace('.', ''), widthSlide);
			endAnimation();
		}, 1000);

		setActiveMarker(step, markersContainerSelector);
	}

	//Scroll slider to the left
	function scrollLeft() {
		if (step == slider.length - 1) {
			step = 0;
		} else {
			step++;
		}

		startAnimation();

		const slides = getSlides();
		const widthSlide = updateWidth(slideWrapper);
		let currentOffset = -1;

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.left = currentOffset * widthSlide - widthSlide + 'px';
			currentOffset++;
		}

		setTimeout(function () {
			slides[0].remove();
			drawRightSlide(slider, slideWrapper, step, slidesSelector.replace('.', ''), widthSlide);
			endAnimation();
		}, 1100);

		setActiveMarker(step, markersContainerSelector);
	}

	//Functions to enable / disable slider events for the animation period
	function startAnimation() {
		const slides = getSlides();
		slides.forEach((slide) => {
			slide.style.transition = '1s all';
		});
		promo.removeEventListener('mousedown', pressMouseButton);
		promo.removeEventListener('mouseup', releaseMouseButton);
		promo.addEventListener('mousemove', (e) => {
			e.preventDefault();
		});
		promo.removeEventListener('touchstart', touchEventStart);
		promo.removeEventListener('touchend', touchEventEnd);
	}

	function endAnimation() {
		promo.addEventListener('mousedown', pressMouseButton);
		promo.addEventListener('mouseup', releaseMouseButton);
		promo.addEventListener('touchstart', touchEventStart);
		promo.addEventListener('touchend', touchEventEnd);
	}

	//MOUSE EVENTS
	function pressMouseButton(e) {
		e.preventDefault();

		ifMouseDown = true;

		if (e.button == 2) {
			return;
		}

		firstPosX = e.clientX;

		let slides = getSlides();
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.transition = 'none';
			const leftOffset = window.getComputedStyle(slides[i]).left;
			offsets[i] = +leftOffset.slice(0, leftOffset.length - 2);
		}
	}

	function releaseMouseButton(e) {
		ifMouseDown = false;

		posX = e.clientX;
		const widthSlide = updateWidth(slideWrapper);

		if (posX - firstPosX == 0) {
			callScroll(e);
		} else if (Math.abs(posX - firstPosX) > widthSlide * 0.3 && posX - firstPosX < 0) {
			scrollLeft(slider, step, slideWrapper);
		} else if (Math.abs(posX - firstPosX) > widthSlide * 0.3 && posX - firstPosX > 0) {
			scrollRight();
		} else {
			toStartPos();
		}
	}

	function moveMouse(e) {
		if (!ifMouseDown) {
			return;
		}
		posX = e.clientX;

		let slides = getSlides();
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.left = -firstPosX + offsets[i] + posX + 'px';
		}
	}

	//Determining the direction of the scroll
	function callScroll(e) {
		const rect = e.target.getBoundingClientRect();

		if ((100 * e.offsetX) / rect.width > 50) {
			scrollLeft();
		} else {
			scrollRight();
		}
	}

	//Return to original state when not dragging the slide fully
	function toStartPos() {
		let slides = getSlides();

		slides.forEach((slide) => {
			slide.style.transition = '1s all';
		});

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.left = offsets[i] + 'px';
		}
	}

	//TOUCH EVENTS
	function touchEventStart(e) {
		startPoint.x = e.changedTouches[0].pageX;
		slides = getSlides();

		for (let i = 0; i < slides.length; i++) {
			const leftOffset = window.getComputedStyle(slides[i]).left;
			offsets[i] = +leftOffset.slice(0, leftOffset.length - 2);
		}
	}

	function touchEventEnd(e) {
		nowPoint = e.changedTouches[0];

		const xAbs = startPoint.x - nowPoint.pageX;
		widthSlide = updateWidth(slideWrapper);

		if (Math.abs(xAbs) < 20) {
			if (nowPoint.pageX < widthSlide / 2) {
				scrollRight();
			} else {
				scrollLeft();
			}
		} else if (xAbs > 0) {
			scrollLeft();
		} else {
			scrollRight();
		}
	}

	//PROMO MARKERS
	function createPromoMarkers(markersContainerSelector) {
		const markersContainer = doc.querySelector(markersContainerSelector);
		for (let i = 0; i < slider.length; i++) {
			const liItem = doc.createElement('li');
			markersContainer.appendChild(liItem);
		}
		const markers = doc.querySelectorAll(markersContainerSelector + ' > li');
		markers[0].classList.add('active');
	}

	function makeInactiveAllMarkers(markersSelector) {
		const markers = doc.querySelectorAll(markersSelector);
		for (let i = 0; i < markers.length; i++) {
			markers[i].classList.remove('active');
		}
	}

	function setActiveMarker(step, markersContainerSelector) {
		const markersSelector = markersContainerSelector + ' > li';
		let stepMarker;
		if (step === 0) {
			stepMarker = slider.length - 1;
		} else {
			stepMarker = step - 1;
		}
		makeInactiveAllMarkers(markersSelector);
		const markers = doc.querySelectorAll(markersSelector);
		markers[stepMarker].classList.add('active');
	}
}

export default promoSlider;
