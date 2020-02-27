$(document).ready(function(){

    $('.menu-btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    });


    $('.product-types__carousel').slick({
        autoplay: false,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

});
