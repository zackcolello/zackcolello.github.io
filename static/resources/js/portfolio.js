$(document).ready(function () {

    // Initialize foundation

    jQuery(document).foundation();

    // Resize elements of page to better fit smaller screens

    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);

    function resize() {
        if (window.innerWidth <= 541) {
            $(".sub-main-title").hide();
        } else {
            $(".sub-main-title").show();
        }
        if (window.innerWidth <= 880) {
            $(".main-content-headshot").css("height", "167px");
        } else {
            $(".main-content-headshot").css("height", "500px");
        }
    }

    // Initialize smooth-scroll.js

    smoothScroll.init({speed: 900, easing: 'easeInOutCubic'});


    // Color Wayfair text on hover

    $('.wayfair-1').mouseenter(function () {
        $(this).addClass('wayfair-1-color');
    }).mouseout(function () {
        setTimeout(function () {
            $('.wayfair-1').removeClass('wayfair-1-color');
        }, 2000);
    });

    $('.wayfair-2').mouseenter(function () {
        $(this).addClass('wayfair-2-color');
    }).mouseout(function () {
        setTimeout(function () {
            $('.wayfair-2').removeClass('wayfair-2-color');
        }, 2000);
    });

    $('.wayfair-3').mouseenter(function () {
        $(this).addClass('wayfair-3-color');
    }).mouseout(function () {
        setTimeout(function () {
            $('.wayfair-3').removeClass('wayfair-3-color');
        }, 2000);
    });

    $('.wayfair-4').mouseenter(function () {
        $(this).addClass('wayfair-4-color');
    }).mouseout(function () {
        setTimeout(function () {
            $('.wayfair-4').removeClass('wayfair-4-color');
        }, 2000);
    });

    // Parallax background image scrolling

    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;

    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el) {
            var windowYOffset = window.pageYOffset;
            el.style.backgroundPosition = "50% " + (windowYOffset * speed) + "px";
        });
    };

    // Cursor blink in hero text

    var $post = $(".cursor");
    setInterval(function () {
        $post.toggleClass("hidden");
    }, 500);

    // Fade in fade elements with ScrollReveal

    window.sr = ScrollReveal({reset: true});
    sr.reveal('.fade', {reset: true}, 50);
    sr.reveal('.fade-main', {reset: true}, 50);
    sr.reveal('.fade-about-text-1', {reset: true}, 50);
    sr.reveal('.fade-about-text-2', {reset: true}, 50);
    sr.reveal('.fade-about-text-3', {reset: true}, 50);
    sr.reveal('.fade-about-text-4', {reset: true}, 50);
    sr.reveal('.fade-email-text', {reset: true, duration: 1000});
    sr.reveal('.fade-image', {reset: true, duration: 1000});
    sr.reveal('.fade-icon', {reset: true}, 50);

});
