//Form submit - AJAX POST
'use strict';

function formSubmit(e, form) {
	const doc = document;
	e.preventDefault();
	var status = doc.querySelector('.application__status');
	var data = new FormData(e.target);
	fetch(e.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => {
			status.innerHTML = 'Спасибо за вашу заявку! <br> Мы свяжемся с вами в ближайшее время!';
			form.reset();
			doc.querySelector('.application__textarea > textarea').innerHTML = '';
			setTimeout(() => {
				status.innerHTML = '';
			}, 5000);
		})
		.catch((error) => {
			status.innerHTML = 'Упс! Что-то пошло не так';
		});
}

export default formSubmit;
