(function () {
    "use strict";

    $(function(){

        function heightPartners() {
            var clientWidth = document.documentElement.clientWidth,
                partners = document.getElementsByClassName('js-partner'),
                anchor = document.getElementsByClassName('anchor');

                var max = 0,
                    maxIndex = 0;

                if(!!partners || !!anchor) {

                    if(clientWidth >= 992) {

                        for (var m = 0; m < anchor.length; m++) {
                            anchor[m].classList.remove('anchor');
                        }


                        for (var i = 0; i < partners.length; i++) {

                            partners[i].style.height = '';

                            if (max < partners[i].offsetHeight) {
                                maxIndex = i;
                                max = partners[maxIndex].offsetHeight;
                            }

                        }

                        (!!partners || !!maxIndex) ? partners[maxIndex].classList.add('anchor') : '';

                        for (var n = 0; n < partners.length; n++) {

                            if (!partners[n].classList.contains('anchor')) {

                                partners[n].style.height = max + 'px';

                            }
                        }
                    }  else {

                        for (var k= 0; k < partners.length; k++) {
                            partners[k].classList.remove('anchor');
                            partners[k].style.height = '';
                        }
                    }
                }
        }
        heightPartners();



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
            heightPartners();
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

        function imgHover() {
            var link = document.getElementsByClassName('js-link');

                if(!!link) {



                    for (var i = 0; i < link.length; i++) {


                        link[i].onmouseover = function(e) {

                            var flag = true;

                            var img = e.target.querySelector('img');

                                if(flag) {
                                    var url = img.getAttribute('src');

                                        img.setAttribute('data-url', url);
                                        var type = (url.slice(-4)),
                                            address = (url.slice(0, -4));

                                        var str  = address + '-hover' + type;
                                        img.setAttribute('src', str);
                                }


                        };

                        link[i].onmouseleave = function(e) {

                            var flag = false;

                                var img = e.target.querySelector('img');

                                var url = img.getAttribute('data-url');

                                img.setAttribute('src', url);

                        };

                    }


                }
        }

        imgHover();

    });
}());