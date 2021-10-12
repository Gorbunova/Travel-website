'use strict';

export function menuInit() {
    const doc = document;

    let isOpened = false;
    
    const hamburger = doc.querySelector('.hamburger'),
          menu = doc.querySelector('.menu'),
          overlay = doc.querySelector('.overlay'),
          nav = doc.querySelector('nav'),
          links = doc.querySelectorAll('.menu__item');
    
    nav.classList.add('active');

    hamburger.addEventListener('click', ()=>{
        if (isOpened) {
            isOpened = false;
            closeMenu();
        } else {
            isOpened = true;
            openMenu();
        }        
    });

    links.forEach(item => {
        item.addEventListener('click', ()=> {
            setTimeout(closeMenu, 500);
        });
    });

    function openMenu() {
        setTimeout(()=>{
            menu.classList.toggle('menu_opened');
        }, 500);
        overlay.classList.toggle('overlay_opened');
        hamburger.classList.toggle('hamburger_opened');
    }

    function closeMenu() {
        menu.classList.toggle('menu_opened');
        setTimeout(()=>{
            overlay.classList.toggle('overlay_opened');
        }, 500);
        hamburger.classList.toggle('hamburger_opened');
    }
}