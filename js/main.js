var scrollMinX = 0;
var scrollMinY = 0;
var scrollMaxX = document.body.scrollWidth - window.innerWidth;
var scrollMaxY = document.body.scrollHeight - window.innerHeight;

// make sure that we work with the correct dimensions
window.onresize = function () {
    scrollMaxX = document.body.scrollWidth - window.innerWidth;
    scrollMaxY = document.body.scrollHeight - window.innerHeight;
};

// where the magic happens
document.onscroll = function () {    
    if (window.scrollX <= scrollMinX) scrollTo(scrollMinX, window.scrollY);
    if (window.scrollX >= scrollMaxX) scrollTo(scrollMaxX, window.scrollY);

    if (window.scrollY <= scrollMinY) scrollTo(window.scrollX, scrollMinY);
    if (window.scrollY >= scrollMaxY) scrollTo(window.scrollX, scrollMaxY);
};
