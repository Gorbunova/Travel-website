export function animate(){
    let isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
    const logo = document.querySelector(".promo__logo");
    var titles = document.querySelectorAll(".title");
    var aboutCarousel = document.querySelector(".about__carousel");
    var benefits = document.querySelectorAll(".about__benefits > li");
    var listBenefit = document.querySelector(".about__benefits");
    const mountainDivider = document.querySelector(".why__divider");
    const whySect = document.querySelector(".why");
    const listReasons = document.querySelector('.why__reasons');
    const reasons = document.querySelectorAll('.why__reasons-item');
    const buttons = document.querySelectorAll('.button');
    const promo = document.querySelector('.promo');
    const menu = document.querySelector('nav');

 
    function scrolling(e) {

        if (isFullyVisible(promo)) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        } 

        if (isFullyVisible(logo)) {
            logo.classList.add("active");
        } else {
            logo.classList.remove("active");
        } 

        titles.forEach(title => {
            if (isPartiallyVisible(title) && !title.classList.contains('used')) {
                title.classList.add("active");
                setTimeout(() => {
                    title.classList.remove("active");
                    title.classList.add('used');
                }, 4000);
        }
        });
        /* else {
                    title.classList.remove("anim-typewriter");
                } */
        buttons.forEach(btn => {
            if (isFullyVisible(btn)) {
                btn.classList.add("active");
                /* setTimeout(title.classList.remove("active"), 5000); */
            } else {
                btn.classList.remove("active");
            }
        }
        );
         
        
        if (isPartiallyVisible(aboutCarousel)) {
            aboutCarousel.classList.add("carousel-active");
        } /* else {
            aboutCarousel.classList.remove("carousel-active");
        } */

        var request = function(index) {
            if (isPartiallyVisible(listBenefit)){
                                    if (index + 1 <= benefits.length) {
                        setTimeout(function () {
                            benefits[index].classList.add("active");
                            request(index + 1);
                        }, 200); 
                    }
            } else {
                benefits.forEach(benefit => {
                    benefit.classList.remove("active");
                });
            }
        };
        
        request(0);

        if (isFullyVisible(whySect)) {
            mountainDivider.classList.add("active");
        } /* else {
            mountainDivider.classList.remove("active");
        } */

        var request2 = function(index) {
            if (isFullyVisible(listReasons)){
                if (index + 1 <= reasons.length) {
                    setTimeout(function () {
                        reasons[index].classList.add("active");
                        request2(index + 1);
                    }, 200); 
                }
            } else {
                reasons.forEach(reason => {
                    reason.classList.remove("active");
                });
            }
        };
        
        request2(0);
    }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }
}