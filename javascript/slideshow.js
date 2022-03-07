/* Using this as a base: https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/ */

var slidesARSOF = document.querySelectorAll('.slideshow-ARSOF .slide-ARSOF');
var currentSlideARSOF = 0;
var slideIntervalARSOF = setInterval(nextSlideARSOF,6000);

function nextSlideARSOF() {
    slidesARSOF[currentSlideARSOF].className = 'slide-ARSOF';
    currentSlideARSOF = (currentSlideARSOF+1)%slidesARSOF.length;
    slidesARSOF[currentSlideARSOF].className = 'slide-ARSOF active';
}

var slidesVITTORIA = document.querySelectorAll('.slideshow-VITTORIA .slide-VITTORIA');
var currentSlideVITTORIA = 0;
var slideIntervalVITTORIA = setInterval(nextSlideVITTORIA,6000);

function nextSlideVITTORIA() {
    slidesVITTORIA[currentSlideVITTORIA].className = 'slide-VITTORIA';
    currentSlideVITTORIA = (currentSlideVITTORIA+1)%slidesVITTORIA.length;
    slidesVITTORIA[currentSlideVITTORIA].className = 'slide-VITTORIA active';
}