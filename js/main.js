"use strict";

$(document).ready(function () {

    $("#top-menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 700);
    });
});

// var menu_selector = "#menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
// var links = $('.sidebar__link');

// function onScroll() {
//     var scroll_top = $(document).scrollTop();
//     $(menu_selector + " a").each(function () {
//         var hash = $(this).attr("href");
//         var target = $(hash);
//         if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
//             links.removeClass("sidebar__link--active");
//             $(this).addClass("sidebar__link--active");
//         } else {
//             $(this).removeClass("sidebar__link--active");
//         }
//     });
// }

// $(document).ready(function () {

//     $(document).on("scroll", onScroll);
//     $("#menu").on('click', 'a', function (e) {
//         e.preventDefault();

//         $(document).off("scroll");
//         links.removeClass("sidebar__link--active");
//         $(this).addClass("sidebar__link--active");
//         var hash = $(this).attr("href");
//         var target = $(hash);

//         $("html, body").animate({
//             scrollTop: target.offset().top
//         }, 500, function () {
//             window.location.hash = hash;
//             $(document).on("scroll", onScroll);
//         });

//     });

// });

$(function () {
    var menu = $('.hamburger__menu');

    // $('.hamburger').on('click', e => {
    //     e.preventDefault();
    //     menu.css({'display': 'flex'});
    //     setTimeout(function () {
    //         menu.addClass('hamburger__menu--active');
    //     }, 100);

    // })

    // $('.close-btn').on('click', e => {
    //     e.preventDefault();
    //     menu.removeClass('hamburger__menu--active');
    //     setTimeout(function () {
    //         menu.css({'display': 'none'});
    //     }, 1500);
    // })

    $("#ham-menu").on("click", "a", function (event) {
        event.preventDefault();
        $('.navbar-collapse').removeClass('show');
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        setTimeout(function () {
            // menu.css({'display': 'none'});
            $('body,html').animate({
                scrollTop: top
            }, 700);
        }, 500);
    });
});

$(function () {
    $('.acco__link').on('click', function (e) {
        var triggers = $('.acco__trigger');
        var trigger = $(e.currentTarget.closest('.acco__trigger'));
        if (!trigger.hasClass('acco__trigger--active')) {
            triggers.removeClass('acco__trigger--active');
            trigger.addClass('acco__trigger--active');
        } else {
            trigger.removeClass('acco__trigger--active');
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var navHeight = $('.header__fixed').height();
        if ($(window).scrollTop() > 0) {
            $('.header__fixed').addClass('header__fixed--fixed');
        } else {
            $('.header__fixed').removeClass('header__fixed--fixed');
        }
    });
});

// $(function () {
//     let link = $('.video__link');
//     let video = $('.video__player');
//     let stop = false;
//     link.on('click', e => {
//         e.preventDefault();
//         if(!stop) {
//             video[0].play();
//             stop = true;
//             link.addClass('video__link--hidden');
//             video.attr('controls', 'controls');
//         } else {
//             video[0].pause();
//             stop = false;
//             link.removeClass('video__link--hidden');
//         }
//     })
// })


$(function () {
    var link = $('.video__link');
    var player = $('.video__player');

    link.on('click', function (e) {
        e.preventDefault();
        link.css({
            'display': 'none'
        });
        player.css({
            'display': 'initial'
        });
        player.attr('src', 'https://www.youtube.com/embed/OA2-ma32sfg?autoplay=1');
    });
});

$(function () {
    var trigger = $('.navbar-toggler');
    var header = $('.header__fixed');
    var flag = header.hasClass('header__fixed--fixed');
    trigger.on('click', function (e) {
        e.preventDefault();
        if (!flag) {
            header.addClass('header__fixed--fixed');
        }
    });
});

// $(function() {  
//     // Default
//     jQuery.scrollSpeed(20, 30);
// });