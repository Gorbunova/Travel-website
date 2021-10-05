'use strict';

export function toursSlider(){
    const doc = document;

    const slides = doc.querySelectorAll('.tours__img-slider > img');
    const next = doc.querySelector('.tours__slider > .next');
    const prev = doc.querySelector('.tours__slider > .prev');
    const countries = doc.querySelectorAll('.country');
    const stateClasses = ['before-prev', 'prev', 'main', 'next', 'after-next'];

    let step = 2;

    next.addEventListener('click', (e)=>{
        e.preventDefault();
        nextSlide();
    });
    
    prev.addEventListener('click', (e)=>{
        e.preventDefault();
        prevSlide();
    });

    toursSliderInit();

    function toursSliderInit(){
        for (let i = -2; i <= 2; i++) {
            slides[getIndex(step+i)].classList.add(stateClasses[i+2]);
        }
        setAllCountriesInvisible();
        setCountryVisible();
    }

    function nextSlide(){
        step++;
        slides[getIndex(step - 3)].classList.remove('before-prev');

        for (let i = -2; i < 2; i++) {
            slides[getIndex(step+i)].classList.add(stateClasses[i+2]);
            slides[getIndex(step+i)].classList.remove(stateClasses[i+3]);
        }

        slides[getIndex(step + 2)].classList.add('after-next');
        setCountryVisible();
    }

    function prevSlide(){
        step--;
        slides[getIndex(step - 2)].classList.add('before-prev');

        for (let i = -1; i <= 2; i++) {
            slides[getIndex(step+i)].classList.add(stateClasses[i+2]);
            slides[getIndex(step+i)].classList.remove(stateClasses[i+1]);
        }

        slides[getIndex(step + 3)].classList.remove('after-next');
        setCountryVisible();
    }

    function getIndex(index) {
        if (index % slides.length < 0) {
            index = index % slides.length + slides.length;
        }
        return index % slides.length;
    }

    function setAllCountriesInvisible() {
        countries.forEach(country => {
            country.style.display = 'none';
            country.style.opacity = '0';
        });
    }

    function setCountryVisible() {
        setAllCountriesInvisible();
        countries[getIndex(step)].style.display = 'block';
        setTimeout(()=> {
            countries[getIndex(step)].style.opacity = '1';
        }, 100);
    }
}