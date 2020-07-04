$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('active');
    })

    $('nav ul li a').click(function () {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    })
    
    
    
    //banner small slider


    $('.slider_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots: false,
        speed: 1000,


    })

    //  
    
//    wow js
    new WOW().init();
    
//    go to top
    $('.totop').tottTop({
            scrollTop:250
        });

    
});





   





