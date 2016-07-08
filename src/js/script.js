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

        function seacrhView() {
            var closeSearch = document.getElementsByClassName('js-close')[0],
                openSearch = document.getElementsByClassName('js-search')[0],
                clientWidth = document.documentElement.clientWidth;

            closeSearch.onclick = function() {
                this.parentNode.classList.add('search-form--close');
            }

            openSearch.onclick = function() {
                closeSearch.parentNode.classList.remove('search-form--close');
            }

            if (clientWidth <= 545 ) {
                closeSearch.parentNode.classList.remove('search-form--close');
            }

        }

        function openMiniMenu() {
            var menu = document.getElementsByClassName('js-mini-menu')[0],
                topMenu = document.getElementsByClassName('js-top-menu')[0],
                search = document.getElementsByClassName('js-wrapper-search')[0];

                menu.onclick = function () {
                    topMenu.classList.toggle('view');
                    search.classList.toggle('view');
                }
        }

        seacrhView();
        openMiniMenu();



        window.onresize = function() {
            seacrhView();
        }

        function placeholder(elem) {

            var block = document.getElementsByClassName(elem)[0];

                if(!!block) {
                    var inp = block.querySelectorAll('input');

                    for (var i =0; i < inp.length; i++) {

                        if(inp[i].hasAttribute('placeholder') != false) {

                            inp[i].onfocus = function() {
                                var text = this.getAttribute('placeholder');
                                    this.setAttribute('data-text', text);
                                    this.removeAttribute('placeholder');
                            }

                            inp[i].onblur = function() {
                                var dataText = this.getAttribute('data-text');
                                this.setAttribute('placeholder', dataText);
                                this.removeAttribute('data-text');
                            }
                        }
                    }

                }


        }

        placeholder('contact-form');
        placeholder('map-content');

    });
}());