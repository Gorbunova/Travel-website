'use strict';

export function aboutSlider(){
    const doc = document;

    const radioBtns = doc.querySelectorAll('.about__carousel-nav > input');
    const slides = doc.querySelectorAll('.about__carousel-inner > img');

    let checkedIndex = 1;
    setMainSlide(0);

    radioBtns.forEach((radioBtn, i) => {
        radioBtn.addEventListener('change', ()=>{
            checkedIndex = i;
            setMainSlide(checkedIndex);
        });
    });

    setInterval(autoChangeSlide, 5000);

    
    function autoChangeSlide() {
        radioBtns[checkedIndex].checked = true;
        setMainSlide(checkedIndex);
        if (checkedIndex < slides.length - 1) {
            checkedIndex++;
        } else {
            checkedIndex = 0;
        }
    }

    function setMainSlide(index) {
        slides.forEach((slide,i) => {
            if (i === index) {
                slide.style.opacity = '1';
            } else {
                setTimeout(()=>{
                    slide.style.opacity = '0';
                }, 500); 
            }
        });
    }
}