$(document).ready(function() {

    $('.arrow_a').click(function(e) {
        e.preventDefault();
        var attrAr = $(this).attr('href');
        var heightAr = $(attrAr).offset().top;
        $('html').animate({
            scrollTop: heightAr
        }, 1000);
    })





    $(window).scroll(function() {
        if ($(window).scrollTop() >= 500) {
            $(".circle-up").css("opacity", 0.6);
        } else {
            $(".circle-up").css("opacity", 0);
        }
    });



    $('.circle-up').click(function() {
        $("html, body").animate({
            scrollTop: $(".header").height() + -1000
        }, 1000);
    });












    $('.header__bars').click(function() {
        if ($('.header-menu').css('display') == 'none') {
            $('.header-menu').show();
            $('.fa-bars').removeClass('fa-bars');
            $('.header .fa').addClass('fa-times');
        } else {
            $('.header-menu').hide();
            $('.fa-times').removeClass('fa-times');
            $('.header .fa').addClass('fa-bars');
        }

    });


    $('.header-page__bars').click(function() {
        if ($('.header-page-menu').css('display') == 'none') {
            $('.header-page-menu').show();
            $('.fa-bars').removeClass('fa-bars');
            $('.header-page__bars .fa').addClass('fa-times');
        } else {
            $('.header-page-menu').hide();
            $('.fa-times').removeClass('fa-times');
            $('.header-page__bars .fa').addClass('fa-bars');
        }

    });






    $('.area__name-tap').click(function(t) {
        t.preventDefault();
        let attrSud = $(this).attr('href');
        $(attrSud).show('area__sud');
        $('.area__close').click(function() {
            $('.area__sud').hide();
        });
    })



    $('.sayti-blocks').slick({
        infinity: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });




});