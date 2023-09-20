(function($) {
    'use strict';
    const surl = {
        instagram: "https://www.instagram.com/ullhaq_ali",
        linkedin: "https://www.linkedin.com/in/ali-faishal-51006423a",
        whatsapp: "https://wa.me/6281252283473",
        github: "https://github.com/ishala"
    }
    var navbar = $('.js-navbar:not(.navbar-fixed)');

    $(".social-list").each(function(id, e) {
        for (let i = 0; i < e.children.length; i++) {
            const social = e.children[i]
            social.setAttribute("href", surl[social.className])
        }
    })

    $(window).on('load', function() {
        $('.loader').fadeOut(1000);
    });

    $('.navbar-toggle').on('click', function() {
        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    });
    $('.close-menu, .click-capture').on('click', function() {
        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
    });

    if ($('.pagepiling').length > 0) {
        $('.pagepiling').pagepiling({
            scrollingSpeed: 150,
            loopBottom: true,
            anchors: ['page1', 'page2', 'page3'],
            afterLoad: function(anchorLink, index) {
                if ($('.pp-section.active').scrollTop() > 0) {
                    $('.navbar').removeClass('navbar-white');
                } else {
                    $('.navbar').addClass('navbar-white');
                }
            }
        });
        $('.pp-scrollable').on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 0) {
                $('.navbar-2').removeClass('navbar-white');
            } else {
                $('.navbar-2').addClass('navbar-white');
            }
        });
        $('#pp-nav').remove().appendTo('body').addClass('white right-boxed hidden-xs');
        $('.pp-nav-up').on('click', function() {
            $.fn.pagepiling.moveSectionUp();
        });
        $('.pp-nav-down').on('click', function() {
            $.fn.pagepiling.moveSectionDown();
        });
    }

})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy-load");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.classList.remove("lazy-load");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy-load");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
})