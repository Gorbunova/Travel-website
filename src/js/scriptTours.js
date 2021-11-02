//Functionality script for the pages of the tour program
'use strict';

const doc = document;
const chapters = doc.querySelectorAll('.program__content');
const chaptersList = doc.querySelectorAll('.program__list > li');

doc.addEventListener('DOMContentLoaded', function () {
	chaptersList.forEach(function (item, i) {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			changeContentChapter(i);
			item.classList.add('active');
		});
	});

	//Getting daily currency using axios
	const currencyItems = doc.querySelectorAll('.currency__item');
	const currency = {};

	axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((res) => {
		currency.KZT = res.data.Valute.KZT.Value;
		currency.USD = res.data.Valute.USD.Value;
		setDataCurrency(res.data.Date);
	});

	//Satting daily currency
	const currencyPrices = doc.querySelectorAll('.currency-price');
	const currencyFirstPrices = [];

	currencyPrices.forEach((price) => {
		const str = price.innerHTML.replace(/\s/g, '');
		currencyFirstPrices.push(str);
	});

	currencyItems.forEach(function (item, i) {
		item.addEventListener('click', () => {
			currencyItems.forEach((item) => {
				item.classList.remove('active');
			});
			item.classList.add('active');
			changeCurrency(currency, currencyPrices, currencyFirstPrices, i);
		});
	});
});

function setDataCurrency(date) {
	const currencyDate = { Year: '', Month: '', Day: '' };
	currencyDate.Year = date.substr(0, 4);
	currencyDate.Month = date.substr(5, 2);
	currencyDate.Day = date.substr(8, 2);

	const dateText = doc.querySelector('.currency__date');
	dateText.innerHTML += ' ' + currencyDate.Day + '.' + currencyDate.Month + '.' + currencyDate.Year;
}

function changeCurrency(currency, currencyPrices, currencyFirstPrices, index) {
	if (index === 0) {
		currencyPrices.forEach(function (price, i) {
			price.innerHTML = currencyFirstPrices[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		});
	} else if (index === 1) {
		currencyPrices.forEach(function (price, i) {
			const newPrice = Math.round(((currencyFirstPrices[i] * currency.USD) / currency.KZT) * 100);
			price.innerHTML = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
			console.log(currency);
		});
	} else {
		currencyPrices.forEach(function (price, i) {
			const newPrice = Math.round(currencyFirstPrices[i] * currency.USD);
			price.innerHTML = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		});
	}
}
//Changing content chapters
function changeContentChapter(index) {
	closeAllChapters();
	chapters[index].style.display = 'block';
}

function closeAllChapters() {
	chaptersList.forEach((item) => {
		item.classList.remove('active');
	});
	chapters.forEach((chapter) => {
		chapter.style.display = 'none';
	});
}
