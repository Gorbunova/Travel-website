"use strict";

import { menuInit } from "./menuScript.js";
import { pageUp } from "./pageUp.js";

const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
    menuInit();

    const menu = doc.querySelector('nav');

    pageUp();
    window.addEventListener('scroll', function(e) {
        if (this.scrollY === 0) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
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

});
