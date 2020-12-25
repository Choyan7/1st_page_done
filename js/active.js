$(document).ready(function () {

    $('#mobile-menu').slicknav({
    });

    $('.video-link').magnificPopup({
        type: 'image'
        // other options
    });



    $('.testimonials').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })









});