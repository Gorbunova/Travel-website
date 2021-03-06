//The module is responsible for the functionality of the slider in the "tours" section
'use strict';

function toursSlider(slidesSelector, prevSelector, nextSelector, countriesSelector) {
	const doc = document;

	const slides = doc.querySelectorAll(slidesSelector);
	const next = doc.querySelector(nextSelector);
	const prev = doc.querySelector(prevSelector);
	const countries = doc.querySelectorAll(countriesSelector);
	const stateClasses = ['before-prev', 'prev', 'main', 'next', 'after-next'];

	let step = 2;

	next.addEventListener('click', (e) => {
		e.preventDefault();
		nextSlide();
	});

	prev.addEventListener('click', (e) => {
		e.preventDefault();
		prevSlide();
	});

	toursSliderInit();

	const titles = doc.querySelectorAll('.country__title');
	const titlesArr = [];
	titles.forEach((title) => {
		titlesArr.push(title.innerHTML);
	});

	const btnApplication = doc.querySelector('.btn_application');
	const textarea = doc.querySelector('.application__textarea > textarea');
	btnApplication.addEventListener('click', (e) => {
		e.preventDefault();
		textarea.innerHTML = `Добрый день! Хотел(а) бы поподробнее узнать о вашем туре "${titlesArr[getIndex(step)]}".`;
	});

	const btnTour = doc.querySelector('.btn_tour');
	btnTour.addEventListener('click', (e) => {
		e.preventDefault();
		const countryId = countries[getIndex(step)].id;
		window.location.href = `tours/${countryId}.html`;
	});

	function toursSliderInit() {
		for (let i = -2; i <= 2; i++) {
			slides[getIndex(step + i)].classList.add(stateClasses[i + 2]);
		}
		setAllCountriesInvisible();
		setCountryVisible();
	}

	function nextSlide() {
		step++;
		slides[getIndex(step - 3)].classList.remove(stateClasses[0]);

		for (let i = -2; i < 2; i++) {
			slides[getIndex(step + i)].classList.add(stateClasses[i + 2]);
			slides[getIndex(step + i)].classList.remove(stateClasses[i + 3]);
		}

		slides[getIndex(step + 2)].classList.add(stateClasses[4]);
		setCountryVisible();
	}

	function prevSlide() {
		step--;
		slides[getIndex(step - 2)].classList.add(stateClasses[0]);

		for (let i = -1; i <= 2; i++) {
			slides[getIndex(step + i)].classList.add(stateClasses[i + 2]);
			slides[getIndex(step + i)].classList.remove(stateClasses[i + 1]);
		}

		slides[getIndex(step + 3)].classList.remove(stateClasses[4]);
		setCountryVisible();
	}

	function getIndex(index) {
		if (index % slides.length < 0) {
			index = (index % slides.length) + slides.length;
		}
		return index % slides.length;
	}

	function setAllCountriesInvisible() {
		countries.forEach((country) => {
			country.style.display = 'none';
			country.style.opacity = '0';
		});
	}

	function setCountryVisible() {
		setAllCountriesInvisible();
		countries[getIndex(step)].style.display = 'block';
		setTimeout(() => {
			countries[getIndex(step)].style.opacity = '1';
		}, 100);
	}
}

export default toursSlider;
