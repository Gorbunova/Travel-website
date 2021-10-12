"use strict";

import { createSlide, drawLeftSlide, drawRightSlide, updateWidth } from "./slider.js";

export function promoSlider(){
    
    const doc = document;

    const slideWrapper = doc.querySelector('.promo__carousel'),
          promo = doc.querySelector('.promo');

    let slides = doc.querySelectorAll('.promo__slide'),
        slider = [],
        widthSlide,
        step = 1;

    let firstPosX = 0,
        posX = 0,
        ifMouseDown = false,
        offsets = [];

    const startPoint={};
    let nowPoint;

    promoSliderInit();
    promo.addEventListener('mousedown', pressMouseButton);
    promo.addEventListener('mousemove', moveMouse);
    promo.addEventListener('mouseup', releaseMouseButton);

    promo.addEventListener('touchstart', touchEventStart);
    promo.addEventListener('touchend', touchEventEnd);

    function promoSliderInit() {
        for (let i = 0; i < slides.length; i++) {
            slider[i] = slides[i].innerHTML;
            slides[i].remove();
        }
        const div = createSlide(slider, 'promo__slide', step, 0);
        slideWrapper.appendChild(div);

        drawRightSlide(slider, slideWrapper, step, "promo__slide");
        drawLeftSlide(slider, slideWrapper, step, "promo__slide");
    }

    function scrollRight() {
        const prompt = doc.querySelector('.promo__prompt');
        if (prompt) {
            prompt.remove();
        }
        if (step == 0) {
            step = slider.length - 1;
        } else {
            step--;
        }

        startAnimation();

        const slides = doc.querySelectorAll('.promo__slide');
        const widthSlide = updateWidth(slideWrapper);
        let currentOffset = 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = currentOffset * widthSlide - widthSlide + 'px';
            currentOffset++;
        }
        
        setTimeout(function() {
            slides[2].remove();
            drawLeftSlide(slider, slideWrapper, step, "promo__slide", widthSlide);
            endAnimation();
        }, 1000);
    }

    function scrollLeft() {
        const prompt = doc.querySelector('.promo__prompt');
        if (prompt) {
            prompt.remove();
        }
        if (step == slider.length - 1) {
            step = 0;
        } else {
            step++;
        }

        startAnimation();

        const slides = doc.querySelectorAll('.promo__slide');
        const widthSlide = updateWidth(slideWrapper);
        let currentOffset = -1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = currentOffset * widthSlide - widthSlide + 'px';
            currentOffset++;
        }
        
        setTimeout(function() {
            slides[0].remove();
            drawRightSlide(slider, slideWrapper, step, "promo__slide", widthSlide);
            endAnimation();
        }, 1100);
    }

    function startAnimation() {
        const slides = doc.querySelectorAll('.promo__slide');
        slides.forEach(slide => {
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
        
        let slides = doc.querySelectorAll('.promo__slide');
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

        if (posX-firstPosX == 0) {
            callScroll(e);
        } else if (Math.abs(posX-firstPosX) > widthSlide*0.3 && posX-firstPosX < 0) {
            scrollLeft(slider, step, slideWrapper);
        } else if (Math.abs(posX-firstPosX) > widthSlide*0.3 && posX-firstPosX > 0) {
            scrollRight();
        } else {
            toStartPos();
        }
    }

    function moveMouse(e){
        if (!ifMouseDown) {
            return;
        }
        posX = e.clientX;
        
        let slides = doc.querySelectorAll('.promo__slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = -firstPosX + offsets[i] + posX + 'px';
        }
    }

    function callScroll(e){
        const rect = e.target.getBoundingClientRect();
    
        if (100 * e.offsetX / rect.width > 50) {
            scrollLeft();
        } else {
            scrollRight();
        }
    }

    function toStartPos() {
        let slides = doc.querySelectorAll('.promo__slide');
    
        slides.forEach(slide => {
            slide.style.transition = '1s all';
        });
    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.left = offsets[i] + 'px';
        }
    }

    //MOUSE AND TOUCH EVENTS
    function touchEventStart(e) {
        startPoint.x=e.changedTouches[0].pageX;
        slides = doc.querySelectorAll('.promo__slide');

        for (let i = 0; i < slides.length; i++) {
            const leftOffset = window.getComputedStyle(slides[i]).left;
            offsets[i] = +leftOffset.slice(0, leftOffset.length - 2);
        }
    }

    function touchEventEnd(e) {
        nowPoint=e.changedTouches[0];

        const xAbs = startPoint.x - nowPoint.pageX;
        widthSlide = updateWidth(slideWrapper);

        if (Math.abs(xAbs) < 20) {
            if (nowPoint.pageX < widthSlide/2) {
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
}
