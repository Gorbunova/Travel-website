'use strict';

export function pageUp() {
    const pageup = document.querySelector('.pageup');
    window.addEventListener('scroll', function(e) {
        if (this.scrollY > 1000) {
            pageup.style.display = 'block';
        } else {
            pageup.style.display = 'none';
        }
    });
}