var scroll = function(e) {
    // compute state
    if (stopScrollX || stopScrollY) {
        e.preventDefault();              // this one is the key
        e.stopPropagation();
        window.scroll(scrollToX, scrollToY);
    }
}

document.addEventListener('mousewheel', scroll, false);;
