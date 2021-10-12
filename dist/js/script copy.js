"use strict";

import { animate } from "./animationScript.js";
import { promoSlider } from "./promoSlider.js";
import { aboutSlider } from "./aboutSlider.js";
import { toursSlider } from "./toursSlider.js";
import { reviewsSlider } from "./reviewsSlider.js";
import { menuInit } from "./menuScript.js";

const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
    const screenWidth = window.screen.width;
    promoInit();
    menuInit();
    animate();
    aboutSlider();
    toursSlider();
    if (screenWidth >= 1200) {
        teamInit();
    }
    reviewsSlider();

    const pageup = doc.querySelector('.pageup');
    window.addEventListener('scroll', function(e) {
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
                block: 'start'
            });
        });
    };

/*     const btnApplication = doc.querySelector('.btn_application');
    btnApplication.addEventListener('click', (e)=>{
        e.preventDefault();
        window.location.href = '#application';
    });
 */
});

function promoInit() {
    const menu = doc.querySelector('nav'),
          logo = doc.querySelector('.promo__logo'),
          logoContainerText = doc.querySelector('.promo__logo-container-text');

    logo.classList.add('active');
    menu.classList.add('active');
    logoContainerText.classList.add('active');

    promoSlider();
}

function teamInit() {
    const teamPhotos = doc.querySelectorAll('.team__slider-photo');
    teamPhotos.forEach(item=> {
        item.addEventListener('mouseover', ()=>{
            item.nextElementSibling.style.maxHeight = '300px';
        });
        item.addEventListener('mouseout', ()=>{
            item.nextElementSibling.style.maxHeight = '70px';
        });
    });
}