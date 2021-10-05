"use strict";

export function isFullyVisible(item) {
    const elementBoundary = item.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}

export function isPartiallyVisible(item) {
    const elementBoundary = item.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;

    return ((top + height >= 0) && (bottom <= height + window.innerHeight));
}

export function setAnimation(condition, item, isrepeat) {
    if (condition) {
        item.classList.add("active");
    } else if (isrepeat) {
        item.classList.remove("active");
    } 
}

export function setSteppedAnimation(condition, index, arrayItems, isrepeat) {
    if (condition) {
        if (index + 1 <= arrayItems.length) {
            setTimeout(function () {
                arrayItems[index].classList.add("active");
                setSteppedAnimation(condition, index + 1, arrayItems);
            }, 200); 
        }
    } else if (isrepeat) {
        arrayItems.forEach(item => {
            item.classList.remove("active");
        });
    }
}