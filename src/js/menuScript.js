'use strict';

export function menuInit() {
    const doc = document;

    let isOpened = false;

    const hamburger = doc.querySelector('.hamburger');
    const menu = doc.querySelector('.menu');
    const overlay = doc.querySelector('.overlay');

    hamburger.addEventListener('click', ()=>{
        hamburger.classList.toggle('hamburger_opened');
        if (isOpened) {
            isOpened = false;
            menu.classList.toggle('menu_opened');
            setTimeout(()=>{
                overlay.classList.toggle('overlay_opened');
            }, 1000);
        } else {
            isOpened = true;
            setTimeout(()=>{
                menu.classList.toggle('menu_opened');
            }, 1000);
            overlay.classList.toggle('overlay_opened');
        }        
    });
}