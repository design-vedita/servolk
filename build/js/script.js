(function () {
    "use strict";

    $(function(){

        $('.js-slider').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });

        $('.js-reviews').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            slidesToShow: 1,
            adaptiveHeight: true
        });

        $('.js-map-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-map-slider-nav'
        });

        $('.js-map-slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.js-map-slider',
            dots: false,
            arrows: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });


        $(".fancybox").fancybox({
            openEffect	: 'none',
            closeEffect	: 'none'
        });



    });
}());