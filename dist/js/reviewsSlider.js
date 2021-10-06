'use strict';

export function reviewsSlider() {
    const doc = document;

    const prev = doc.querySelector('.reviews__slider > .prev');
    const next = doc.querySelector('.reviews__slider > .next');
    const sliderWrapper = doc.querySelector('.slider');
    const sliderInner = doc.querySelector('.slider__inner');
    const slides = doc.querySelectorAll('.slider__item');

    const height = window.getComputedStyle(sliderWrapper).height;
    const heightSlide = +height.slice(0, height.length - 2);

    let offset = 0;
    console.log('slidesLen' + slides.length);
    prev.addEventListener('click', (e)=>{
        e.preventDefault();
        offset--;
        if (offset===0) {
            prev.firstElementChild.style.display = 'none';
        }
        if (offset===slides.length-2) {
            next.firstElementChild.style.display = 'block';
        }
        sliderInner.style.transform = `translateY(-${heightSlide*offset}px)`;
    });

    next.addEventListener('click', (e)=>{
        e.preventDefault();
        offset++;
        if (offset===1) {
            prev.firstElementChild.style.display = 'block';
        }
        if (offset===slides.length-1) {
            next.firstElementChild.style.display = 'none';
        }
        sliderInner.style.transform = `translateY(-${heightSlide*offset}px)`;
        
    });
}