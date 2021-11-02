/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*********************************!*\
  !*** ./src/js/scriptNewPage.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_menuScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menuScript */ "./src/js/menu/menuScript.js");
/* harmony import */ var _menu_pageUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/pageUp */ "./src/js/menu/pageUp.js");
//Minimized main script for the pages of the tour program and privacy policy




const doc = document;
doc.addEventListener('DOMContentLoaded', function () {
  (0,_menu_menuScript__WEBPACK_IMPORTED_MODULE_0__["default"])('.hamburger', '.menu', '.overlay', '.menu__item');
  (0,_menu_pageUp__WEBPACK_IMPORTED_MODULE_1__["default"])('.pageup');
  const menu = doc.querySelector('nav');
  window.addEventListener('scroll', function (e) {
    if (this.scrollY === 0) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=scriptNewPage.js.map