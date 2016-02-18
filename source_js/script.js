$(document).ready(function() {



    // Slider
    var slideItems	= $("#slider").children('div'),
        sliderLen	= slideItems.length - 1,
        speed		= 500,
        timerLen	= 5000,
        timer,
        current;

    function changeSlide(index) {
        var i = index;
        if (index == 'prev') {
            i = ( current > 0 ) ? (current - 1) : sliderLen;
        }
        else {
            i = ( current < sliderLen ) ? (current + 1) : 0;
        }

        slideItems.fadeOut(speed);
        slideItems.eq(i).fadeIn(speed);

        current = i;

        clearTimeout(timer);
        timer = setTimeout(function() { changeSlide('next'); }, timerLen);
    }

    //initialize slider on load
    changeSlide('next');

    $("#slider_left").click( function() { changeSlide('prev'); });
    $("#slider_right").click( function() { changeSlide('next'); });

    // Sticky Navigation || Found @ http://www.hongkiat.com/blog/css-sticky-position/

    var navTop = 0;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        console.log(navTop);

        if (scrollTop > navTop) {
            console.log('Sticky navigation activated!');
            $('nav').addClass('stick');
            $('logo').addClass('stick');
        } else {
            console.log('Sticky navigation deactivated!');
            $('nav').removeClass('stick');
            $('logo').removeClass('stick');
        }
    };

    stickyNav();
    $(document).on("scroll", onScroll);

    $(window).scroll(function() {
        stickyNav();
    });
});


// Smooth Scrolling || Found @ http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
    $('a[href*="#author"]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(function() {
    $('a[href*="#video"]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(function() {
    $('a[href*="#description"]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(function() {
    $('a[href*="#characters"]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(function() {
    $('a[href*="#tribes"]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// Navigation Scroll Tracking || Found @ http://jsfiddle.net/cse_tushar/Dxtyu/141/
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
