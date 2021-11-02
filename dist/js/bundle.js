/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation/animationFunctions.js":
/*!************************************************!*\
  !*** ./src/js/animation/animationFunctions.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFullyVisible": function() { return /* binding */ isFullyVisible; },
/* harmony export */   "isPartiallyVisible": function() { return /* binding */ isPartiallyVisible; },
/* harmony export */   "setAnimation": function() { return /* binding */ setAnimation; },
/* harmony export */   "setSteppedAnimation": function() { return /* binding */ setSteppedAnimation; }
/* harmony export */ });
//Module with basic animate functions


function isFullyVisible(item) {
  const elementBoundary = item.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  return top >= 0 && bottom <= window.innerHeight;
}
function isPartiallyVisible(item) {
  const elementBoundary = item.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;
  return top + height >= 0 && bottom <= height + window.innerHeight;
}
function setAnimation(condition, item, isrepeat) {
  if (condition) {
    item.classList.add('active');
  } else if (isrepeat) {
    item.classList.remove('active');
  }
}
function setSteppedAnimation(condition, index, arrayItems, isrepeat) {
  if (condition) {
    if (index + 1 <= arrayItems.length) {
      setTimeout(function () {
        arrayItems[index].classList.add('active');
        setSteppedAnimation(condition, index + 1, arrayItems);
      }, 200);
    }
  } else if (isrepeat) {
    arrayItems.forEach(item => {
      item.classList.remove('active');
    });
  }
}

/***/ }),

/***/ "./src/js/animation/animationScript.js":
/*!*********************************************!*\
  !*** ./src/js/animation/animationScript.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animationFunctions.js */ "./src/js/animation/animationFunctions.js");
//Module with animations of sections on first / second viewing




function animate() {
  const doc = document;
  const screenWidth = window.screen.width;
  let isScrolling = false;
  window.addEventListener('scroll', throttleScroll, false); //Scroll tracking function

  function throttleScroll(e) {
    if (isScrolling == false) {
      window.requestAnimationFrame(function () {
        scroll(e);
        isScrolling = false;
      });
    }

    isScrolling = true;
  } //Scroll animations


  function scroll(e) {
    //Titles animations
    const titles = doc.querySelectorAll('.title');
    titles.forEach(title => {
      if ((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(title) && !title.classList.contains('used')) {
        title.classList.add('active');
        setTimeout(() => {
          title.classList.remove('active');
          title.classList.add('used');
        }, 4000);
      }
    }); //Btns animations

    const buttons = doc.querySelectorAll('.button');
    buttons.forEach(btn => {
      (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(btn), btn, true);
    }); //Promo Section

    const promo = doc.querySelector('.promo');
    const menu = doc.querySelector('nav');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(promo), menu, true);
    const logo = doc.querySelector('.promo__logo');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(logo), logo, true); //About Section

    const aboutCarousel = doc.querySelector('.about__carousel');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(aboutCarousel), aboutCarousel, false);
    const listBenefit = doc.querySelector('.about__benefits');
    const benefits = doc.querySelectorAll('.about__benefits > li');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setSteppedAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(listBenefit), 0, benefits, true); //Why Section

    const whySect = doc.querySelector('.why');
    const mountainDivider = doc.querySelector('.why__divider');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(whySect), mountainDivider, false);
    const listReasons = doc.querySelector('.why__reasons');
    const reasons = doc.querySelectorAll('.why__reasons-item');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setSteppedAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(listReasons), 0, reasons, true); //Tours Section

    const navItems = doc.querySelectorAll('.tours__navigation');
    const toursMainSlide = doc.querySelector('.tours__img-slider > .main');
    const toursSlider = doc.querySelector('.tours__img-slider');
    navItems.forEach(item => {
      (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(toursMainSlide), item, true);
    });
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(toursMainSlide), toursSlider, true); //Team Section

    const teamSlider = doc.querySelector('.team__slider');
    const teamSliderDescrs = doc.querySelectorAll('.team__slider-item');

    if (screenWidth >= 577) {
      (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setSteppedAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(teamSlider), 0, teamSliderDescrs, true);
    } else {
      teamSliderDescrs.forEach(item => {
        (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(item), item, false);
      });
    } //Reviews Section


    const reviewsSlider = doc.querySelector('.reviews__slider');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isFullyVisible)(reviewsSlider), reviewsSlider, true); //Contacts Section

    const contactsSection = doc.querySelector('.contacts');
    const contactsItems = doc.querySelectorAll('.contacts__item');
    const contactsWrapper = doc.querySelector('.contacts__wrapper');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setSteppedAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(contactsWrapper), 0, contactsItems, true);
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(contactsSection), contactsSection, false); //Footer

    const footer = doc.querySelector('.footer');
    (0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.setAnimation)((0,_animationFunctions_js__WEBPACK_IMPORTED_MODULE_0__.isPartiallyVisible)(footer), footer, false);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (animate);

/***/ }),

/***/ "./src/js/form/formSubmit.js":
/*!***********************************!*\
  !*** ./src/js/form/formSubmit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//Form submit - AJAX POST


function formSubmit(e, form) {
  const doc = document;
  e.preventDefault();
  var status = doc.querySelector('.application__status');
  var data = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json'
    }
  }).then(response => {
    status.innerHTML = 'Спасибо за вашу заявку! <br> Мы свяжемся с вами в ближайшее время!';
    form.reset();
    doc.querySelector('.application__textarea > textarea').innerHTML = '';
    setTimeout(() => {
      status.innerHTML = '';
    }, 5000);
  }).catch(error => {
    status.innerHTML = 'Упс! Что-то пошло не так';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (formSubmit);

/***/ }),

/***/ "./src/js/menu/menuScript.js":
/*!***********************************!*\
  !*** ./src/js/menu/menuScript.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//The module is responsible for the functionality of menu


function menuInit(hamburgerSelector, menuSelector, overlaySelector, linksSelector) {
  const doc = document;
  let isOpened = false;
  const hamburger = doc.querySelector(hamburgerSelector),
        menu = doc.querySelector(menuSelector),
        overlay = doc.querySelector(overlaySelector),
        links = doc.querySelectorAll(linksSelector);
  menu.classList.add('active');
  hamburger.addEventListener('click', () => {
    if (isOpened) {
      isOpened = false;
      closeMenu();
    } else {
      isOpened = true;
      openMenu();
    }
  });
  links.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(closeMenu, 500);
    });
  });

  function openMenu() {
    setTimeout(() => {
      menu.classList.toggle('menu_opened');
    }, 500);
    overlay.classList.toggle('overlay_opened');
    hamburger.classList.toggle('hamburger_opened');
  }

  function closeMenu() {
    menu.classList.toggle('menu_opened');
    setTimeout(() => {
      overlay.classList.toggle('overlay_opened');
    }, 500);
    hamburger.classList.toggle('hamburger_opened');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (menuInit);

/***/ }),

/***/ "./src/js/menu/pageUp.js":
/*!*******************************!*\
  !*** ./src/js/menu/pageUp.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//The module is responsible for the functionality of the button to return to the beginning of the document


function pageUp(pageUpSelector) {
  const doc = document;
  const pageup = document.querySelector(pageUpSelector);
  window.addEventListener('scroll', function (e) {
    if (this.scrollY > 1000) {
      pageup.style.display = 'block';
    } else {
      pageup.style.display = 'none';
    }
  });
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', e => {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');
      doc.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (pageUp);

/***/ }),

/***/ "./src/js/sliders/aboutSlider.js":
/*!***************************************!*\
  !*** ./src/js/sliders/aboutSlider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//The module is responsible for the functionality of the slider in the "about" section


function aboutSlider(radioBtnsSelector, slidesSelector) {
  const doc = document;
  const radioBtns = doc.querySelectorAll(radioBtnsSelector);
  const slides = doc.querySelectorAll(slidesSelector);
  let checkedIndex = 1;
  setMainSlide(0);
  radioBtns.forEach((radioBtn, i) => {
    radioBtn.addEventListener('change', () => {
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
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.opacity = '1';
      } else {
        setTimeout(() => {
          slide.style.opacity = '0';
        }, 500);
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (aboutSlider);

/***/ }),

/***/ "./src/js/sliders/promoSlider.js":
/*!***************************************!*\
  !*** ./src/js/sliders/promoSlider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/sliders/slider.js");
//The module is responsible for the functionality of the slider in the "promo" section




function promoSlider(carouselSelector, slidesSelector, markersContainerSelector) {
  const doc = document;
  const slideWrapper = doc.querySelector(carouselSelector),
        promo = slideWrapper.parentElement;
  let slides = getSlides(),
      slider = [],
      widthSlide,
      step = 1;
  let firstPosX = 0,
      posX = 0,
      ifMouseDown = false,
      offsets = [];
  const startPoint = {};
  let nowPoint;
  promoSliderInit();
  createPromoMarkers(markersContainerSelector);
  promo.addEventListener('mousedown', pressMouseButton);
  promo.addEventListener('mousemove', moveMouse);
  promo.addEventListener('mouseup', releaseMouseButton);
  promo.addEventListener('touchstart', touchEventStart);
  promo.addEventListener('touchend', touchEventEnd); //The function initializes the slider

  function promoSliderInit() {
    for (let i = 0; i < slides.length; i++) {
      slider[i] = slides[i].innerHTML;
      slides[i].remove();
    }

    const slideClass = slidesSelector.replace('.', '');
    const div = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.createSlide)(slider, slideClass, step, 0);
    slideWrapper.appendChild(div);
    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.drawRightSlide)(slider, slideWrapper, step, slideClass);
    (0,_slider__WEBPACK_IMPORTED_MODULE_0__.drawLeftSlide)(slider, slideWrapper, step, slideClass);
  } //The function returns currently rendered slides


  function getSlides() {
    let slides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : slidesSelector;
    return doc.querySelectorAll(slides);
  } //Scroll slider to the right


  function scrollRight() {
    if (step == 0) {
      step = slider.length - 1;
    } else {
      step--;
    }

    startAnimation();
    const slides = getSlides();
    const widthSlide = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.updateWidth)(slideWrapper);
    let currentOffset = 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.left = currentOffset * widthSlide - widthSlide + 'px';
      currentOffset++;
    }

    setTimeout(function () {
      slides[2].remove();
      (0,_slider__WEBPACK_IMPORTED_MODULE_0__.drawLeftSlide)(slider, slideWrapper, step, slidesSelector.replace('.', ''), widthSlide);
      endAnimation();
    }, 1000);
    setActiveMarker(step, markersContainerSelector);
  } //Scroll slider to the left


  function scrollLeft() {
    if (step == slider.length - 1) {
      step = 0;
    } else {
      step++;
    }

    startAnimation();
    const slides = getSlides();
    const widthSlide = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.updateWidth)(slideWrapper);
    let currentOffset = -1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.left = currentOffset * widthSlide - widthSlide + 'px';
      currentOffset++;
    }

    setTimeout(function () {
      slides[0].remove();
      (0,_slider__WEBPACK_IMPORTED_MODULE_0__.drawRightSlide)(slider, slideWrapper, step, slidesSelector.replace('.', ''), widthSlide);
      endAnimation();
    }, 1100);
    setActiveMarker(step, markersContainerSelector);
  } //Functions to enable / disable slider events for the animation period


  function startAnimation() {
    const slides = getSlides();
    slides.forEach(slide => {
      slide.style.transition = '1s all';
    });
    promo.removeEventListener('mousedown', pressMouseButton);
    promo.removeEventListener('mouseup', releaseMouseButton);
    promo.addEventListener('mousemove', e => {
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
  } //MOUSE EVENTS


  function pressMouseButton(e) {
    e.preventDefault();
    ifMouseDown = true;

    if (e.button == 2) {
      return;
    }

    firstPosX = e.clientX;
    let slides = getSlides();

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.transition = 'none';
      const leftOffset = window.getComputedStyle(slides[i]).left;
      offsets[i] = +leftOffset.slice(0, leftOffset.length - 2);
    }
  }

  function releaseMouseButton(e) {
    ifMouseDown = false;
    posX = e.clientX;
    const widthSlide = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.updateWidth)(slideWrapper);

    if (posX - firstPosX == 0) {
      callScroll(e);
    } else if (Math.abs(posX - firstPosX) > widthSlide * 0.3 && posX - firstPosX < 0) {
      scrollLeft(slider, step, slideWrapper);
    } else if (Math.abs(posX - firstPosX) > widthSlide * 0.3 && posX - firstPosX > 0) {
      scrollRight();
    } else {
      toStartPos();
    }
  }

  function moveMouse(e) {
    if (!ifMouseDown) {
      return;
    }

    posX = e.clientX;
    let slides = getSlides();

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.left = -firstPosX + offsets[i] + posX + 'px';
    }
  } //Determining the direction of the scroll


  function callScroll(e) {
    const rect = e.target.getBoundingClientRect();

    if (100 * e.offsetX / rect.width > 50) {
      scrollLeft();
    } else {
      scrollRight();
    }
  } //Return to original state when not dragging the slide fully


  function toStartPos() {
    let slides = getSlides();
    slides.forEach(slide => {
      slide.style.transition = '1s all';
    });

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.left = offsets[i] + 'px';
    }
  } //TOUCH EVENTS


  function touchEventStart(e) {
    startPoint.x = e.changedTouches[0].pageX;
    slides = getSlides();

    for (let i = 0; i < slides.length; i++) {
      const leftOffset = window.getComputedStyle(slides[i]).left;
      offsets[i] = +leftOffset.slice(0, leftOffset.length - 2);
    }
  }

  function touchEventEnd(e) {
    nowPoint = e.changedTouches[0];
    const xAbs = startPoint.x - nowPoint.pageX;
    widthSlide = (0,_slider__WEBPACK_IMPORTED_MODULE_0__.updateWidth)(slideWrapper);

    if (Math.abs(xAbs) < 20) {
      if (nowPoint.pageX < widthSlide / 2) {
        scrollRight();
      } else {
        scrollLeft();
      }
    } else if (xAbs > 0) {
      scrollLeft();
    } else {
      scrollRight();
    }
  } //PROMO MARKERS


  function createPromoMarkers(markersContainerSelector) {
    const markersContainer = doc.querySelector(markersContainerSelector);

    for (let i = 0; i < slider.length; i++) {
      const liItem = doc.createElement('li');
      markersContainer.appendChild(liItem);
    }

    const markers = doc.querySelectorAll(markersContainerSelector + ' > li');
    markers[0].classList.add('active');
  }

  function makeInactiveAllMarkers(markersSelector) {
    const markers = doc.querySelectorAll(markersSelector);

    for (let i = 0; i < markers.length; i++) {
      markers[i].classList.remove('active');
    }
  }

  function setActiveMarker(step, markersContainerSelector) {
    const markersSelector = markersContainerSelector + ' > li';
    let stepMarker;

    if (step === 0) {
      stepMarker = slider.length - 1;
    } else {
      stepMarker = step - 1;
    }

    makeInactiveAllMarkers(markersSelector);
    const markers = doc.querySelectorAll(markersSelector);
    markers[stepMarker].classList.add('active');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (promoSlider);

/***/ }),

/***/ "./src/js/sliders/reviewsSlider.js":
/*!*****************************************!*\
  !*** ./src/js/sliders/reviewsSlider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//The module is responsible for the functionality of the slider in the "reviews" section


function reviewsSlider(prevSelector, nextSelector, sliderSelector, sliderInnerSelector, slidesSelector) {
  const doc = document;
  const prev = doc.querySelector(prevSelector);
  const next = doc.querySelector(nextSelector);
  const sliderWrapper = doc.querySelector(sliderSelector);
  const sliderInner = doc.querySelector(sliderInnerSelector);
  const slides = doc.querySelectorAll(slidesSelector);
  const height = window.getComputedStyle(sliderWrapper).height;
  const heightSlide = +height.slice(0, height.length - 2);
  let offset = 0;
  prev.addEventListener('click', e => {
    e.preventDefault();
    offset--;

    if (offset === 0) {
      prev.firstElementChild.style.display = 'none';
    }

    if (offset === slides.length - 2) {
      next.firstElementChild.style.display = 'block';
    }

    sliderInner.style.transform = `translateY(-${heightSlide * offset}px)`;
  });
  next.addEventListener('click', e => {
    e.preventDefault();
    offset++;

    if (offset === 1) {
      prev.firstElementChild.style.display = 'block';
    }

    if (offset === slides.length - 1) {
      next.firstElementChild.style.display = 'none';
    }

    sliderInner.style.transform = `translateY(-${heightSlide * offset}px)`;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (reviewsSlider);

/***/ }),

/***/ "./src/js/sliders/slider.js":
/*!**********************************!*\
  !*** ./src/js/sliders/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSlide": function() { return /* binding */ createSlide; },
/* harmony export */   "drawRightSlide": function() { return /* binding */ drawRightSlide; },
/* harmony export */   "drawLeftSlide": function() { return /* binding */ drawLeftSlide; },
/* harmony export */   "updateWidth": function() { return /* binding */ updateWidth; }
/* harmony export */ });
//Module with basic sliders functions


const doc = document;
function createSlide(slider, className, imgNumber, offset) {
  const div = doc.createElement('div');
  div.innerHTML = slider[imgNumber];
  div.classList.add(className);
  div.style.left = offset + 'px';
  return div;
}
function drawRightSlide(slider, container, step, className) {
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
function drawLeftSlide(slider, container, step, className) {
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
function updateWidth(container) {
  const width = window.getComputedStyle(container).width;
  return +width.slice(0, width.length - 2);
}

/***/ }),

/***/ "./src/js/sliders/toursSlider.js":
/*!***************************************!*\
  !*** ./src/js/sliders/toursSlider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//The module is responsible for the functionality of the slider in the "tours" section


function toursSlider(slidesSelector, prevSelector, nextSelector, countriesSelector) {
  const doc = document;
  const slides = doc.querySelectorAll(slidesSelector);
  const next = doc.querySelector(nextSelector);
  const prev = doc.querySelector(prevSelector);
  const countries = doc.querySelectorAll(countriesSelector);
  const stateClasses = ['before-prev', 'prev', 'main', 'next', 'after-next'];
  let step = 2;
  next.addEventListener('click', e => {
    e.preventDefault();
    nextSlide();
  });
  prev.addEventListener('click', e => {
    e.preventDefault();
    prevSlide();
  });
  toursSliderInit();
  const titles = doc.querySelectorAll('.country__title');
  const titlesArr = [];
  titles.forEach(title => {
    titlesArr.push(title.innerHTML);
  });
  const btnApplication = doc.querySelector('.btn_application');
  const textarea = doc.querySelector('.application__textarea > textarea');
  btnApplication.addEventListener('click', e => {
    e.preventDefault();
    textarea.innerHTML = `Добрый день! Хотел(а) бы поподробнее узнать о вашем туре "${titlesArr[getIndex(step)]}".`;
  });
  const btnTour = doc.querySelector('.btn_tour');
  btnTour.addEventListener('click', e => {
    e.preventDefault();
    const countryId = countries[getIndex(step)].id;
    window.location.href = `tours/${countryId}.html`;
  });

  function toursSliderInit() {
    for (let i = -2; i <= 2; i++) {
      slides[getIndex(step + i)].classList.add(stateClasses[i + 2]);
    }

    setAllCountriesInvisible();
    setCountryVisible();
  }

  function nextSlide() {
    step++;
    slides[getIndex(step - 3)].classList.remove(stateClasses[0]);

    for (let i = -2; i < 2; i++) {
      slides[getIndex(step + i)].classList.add(stateClasses[i + 2]);
      slides[getIndex(step + i)].classList.remove(stateClasses[i + 3]);
    }

    slides[getIndex(step + 2)].classList.add(stateClasses[4]);
    setCountryVisible();
  }

  function prevSlide() {
    step--;
    slides[getIndex(step - 2)].classList.add(stateClasses[0]);

    for (let i = -1; i <= 2; i++) {
      slides[getIndex(step + i)].classList.add(stateClasses[i + 2]);
      slides[getIndex(step + i)].classList.remove(stateClasses[i + 1]);
    }

    slides[getIndex(step + 3)].classList.remove(stateClasses[4]);
    setCountryVisible();
  }

  function getIndex(index) {
    if (index % slides.length < 0) {
      index = index % slides.length + slides.length;
    }

    return index % slides.length;
  }

  function setAllCountriesInvisible() {
    countries.forEach(country => {
      country.style.display = 'none';
      country.style.opacity = '0';
    });
  }

  function setCountryVisible() {
    setAllCountriesInvisible();
    countries[getIndex(step)].style.display = 'block';
    setTimeout(() => {
      countries[getIndex(step)].style.opacity = '1';
    }, 100);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (toursSlider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animation_animationScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation/animationScript */ "./src/js/animation/animationScript.js");
/* harmony import */ var _menu_menuScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menuScript */ "./src/js/menu/menuScript.js");
/* harmony import */ var _menu_pageUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/pageUp */ "./src/js/menu/pageUp.js");
/* harmony import */ var _sliders_promoSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliders/promoSlider */ "./src/js/sliders/promoSlider.js");
/* harmony import */ var _sliders_aboutSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliders/aboutSlider */ "./src/js/sliders/aboutSlider.js");
/* harmony import */ var _sliders_toursSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliders/toursSlider */ "./src/js/sliders/toursSlider.js");
/* harmony import */ var _sliders_reviewsSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sliders/reviewsSlider */ "./src/js/sliders/reviewsSlider.js");
/* harmony import */ var _form_formSubmit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/formSubmit */ "./src/js/form/formSubmit.js");
//Main script










const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
  const screenWidth = window.screen.width;
  promoInit();

  if (screenWidth >= 1200) {
    teamInit();
  }

  (0,_menu_menuScript__WEBPACK_IMPORTED_MODULE_1__["default"])('.hamburger', '.menu', '.overlay', '.menu__item');
  (0,_animation_animationScript__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_menu_pageUp__WEBPACK_IMPORTED_MODULE_2__["default"])('.pageup');
  (0,_sliders_aboutSlider__WEBPACK_IMPORTED_MODULE_4__["default"])('.about__carousel-nav > input', '.about__carousel-inner > img');
  (0,_sliders_toursSlider__WEBPACK_IMPORTED_MODULE_5__["default"])('.tours__img-slider > picture', '.tours__slider > .prev', '.tours__slider > .next', '.country');
  (0,_sliders_reviewsSlider__WEBPACK_IMPORTED_MODULE_6__["default"])('.reviews__slider > .prev', '.reviews__slider > .next', '.slider', '.slider__inner', '.slider__item');
  const form = doc.querySelector('.application__form');
  form.addEventListener('submit', e => (0,_form_formSubmit__WEBPACK_IMPORTED_MODULE_7__["default"])(e, form));
});

function promoInit() {
  const logo = doc.querySelector('.promo__logo'),
        logoContainerText = doc.querySelector('.promo__logo-container-text'),
        menu = doc.querySelector('.menu');
  logo.classList.add('active');
  logoContainerText.classList.add('active');
  menu.classList.add('active');
  (0,_sliders_promoSlider__WEBPACK_IMPORTED_MODULE_3__["default"])('.promo__carousel', '.promo__slide', '.promo__markers');
}

function teamInit() {
  const teamPhotos = doc.querySelectorAll('.team__slider-photo');
  teamPhotos.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.nextElementSibling.style.maxHeight = '300px';
    });
    item.addEventListener('mouseout', () => {
      item.nextElementSibling.style.maxHeight = '70px';
    });
  });
}
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map