"use strict";

const doc = document;

export function createSlide(slider, className, imgNumber, offset) {
    const div = doc.createElement('div');
    div.innerHTML = slider[imgNumber];
    div.classList.add(className);
    div.style.left = offset + 'px';

    return div;
}

export function drawRightSlide(slider, container, step, className) {
    let stepNewSlide;
    if (step === slider.length - 1) {
        stepNewSlide = 0;
    } else {
        stepNewSlide = step + 1;
    }
    const widthSlide = updateWidth(container);
    const div = createSlide(slider, className, stepNewSlide, widthSlide);
    container.appendChild(div);
}

export function drawLeftSlide(slider, container, step, className) {
    let stepNewSlide;
    if (step === 0) {
        stepNewSlide = slider.length - 1;
    } else {
        stepNewSlide = step - 1;
    }
    const widthSlide = updateWidth(container);
    const div = createSlide(slider, className, stepNewSlide, -widthSlide);
    container.insertBefore(div, container.firstChild);
}

export function updateWidth(container){
    const width = window.getComputedStyle(container).width;
    return +width.slice(0, width.length - 2);
}