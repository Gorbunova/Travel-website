//The module is responsible for the functionality of the button to return to the beginning of the document
'use strict';

function pageUp(pageUpSelector) {
	const doc = document;
	const pageup = document.querySelector(pageUpSelector);
	window.addEventListener('scroll', function (e) {
		if (this.scrollY > 1000) {
			pageup.style.display = 'block';
		} else {
			pageup.style.display = 'none';
		}
	});

	const smoothLinks = document.querySelectorAll('a[href^="#"]');
	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener('click', (e) => {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');

			doc.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	}
}

export default pageUp;
