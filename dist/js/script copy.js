const doc = document;

const slidesWrapper = doc.querySelector('.promo__carousel'),
      slidesField = doc.querySelector('.promo__carousel__inner'),
      width = window.getComputedStyle(slidesField).width,
      slides = doc.querySelectorAll('.slide'),
      next = doc.querySelector('.next'),
      prev = doc.querySelector('.prev');

const descrWrapper = doc.querySelector('.promo__descr'),
      descrs = doc.querySelectorAll('.slide-descr');

let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}
console.log(slider);

let step = 0, 
    offset = -1;

function draw() {
    let img = doc.createElement('img');
    img.src = slider[step];
    img.classList.add('slide');
    img.style.left = offset * 1440 + 'px';
    slidesField.appendChild(img);
    if (step + 1 == slider.length){
        step = 0;
    } else {
        step++;
    }
    if (offset != 1){
        offset++;
    }
}

function draw2() {
    let img = doc.createElement('img');
    img.src = slider[step];
    img.classList.add('slide');
    img.style.left = -1440 + 'px';
    slidesField.insertBefore(img, slidesField.firstChild);

    if (step + 1 == slider.length){
        step = 0;
    } else {
        step++;
    }
    if (offset != 1){
        offset++;
    }
}

function left() {
    next.removeEventListener('click', left);
    let slides2 = doc.querySelectorAll('.slide');
    let offset2 = -1;
    for (let i = 0; i < slides2.length; i++){
        slides2[i].style.left = offset2 * 1440 - 1440 + 'px';
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove();
        draw();
        next.addEventListener('click', left);
    }, 1000);
}

function right() {
    prev.removeEventListener('click', right);
    let slides2 = doc.querySelectorAll('.slide');
    let offset2 = 1;
    for (let i = 0; i < slides2.length; i++){
        slides2[i].style.left = offset2 * 1440 - 1440 + 'px';
        console.log(slides2[i].src);
        console.log(offset2 * 1440 - 1440 + 'px');
        offset2++;
    }
    setTimeout(function(){
        slides2[2].remove();
        draw2();
        prev.addEventListener('click', right);
    }, 1000);
}

next.addEventListener('click', left);
prev.addEventListener('click', right);

draw(); draw(); draw();
      /* descrField.style.width = 100 * slides.length + '%';
      descrs.forEach(slide => {
        slide.style.width = width;
      });

      slidesField.style.width = 100 * slides.length + '%';
      slides.forEach(slide => {
        slide.style.width = width;
      });

      let slideIndex = 1;
      let offset = 0;

      next.addEventListener('click', () => {
          if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)){
              offset = 0;
          } else {
              offset += +width.slice(0, width.length - 2);
          }
          descrField.style.transform = `translateX(-${offset}px)`;
          slidesField.style.transform = `translateX(-${offset}px)`;
          setTimeout(() => {  
            if (offset == +width.slice(0, width.length - 2)){
                let slide = document.createElement("div");
                slide.innerHTML = slides[0].innerHTML;
                slide.classList.add('slide');
                console.log(slide);
                slide.style.width = width;
                slidesField.appendChild(slide);
                slides[0].remove();
                offset -= +width.slice(0, width.length - 2);
                slidesField.style.transform = `translateX(-${offset}px)`;
              }
           }, 2000);
          if (offset == +width.slice(0, width.length - 2)){ //DERRER
            let slide = document.createElement("div");
            slide.innerHTML = slides[0].innerHTML;
            slide.classList.add('slide');
            console.log(slide);
            slide.style.width = width;
            slidesField.appendChild(slide);
            slides[0].remove(); //RFEFEWGG
          }
      });

      prev.addEventListener('click', () => {
        if (offset == 0 ) {
            offset == +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    }); */