$(function(){
    $('.slider').slick({ 
               
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/next.svg" alt="arrow-next"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/prev.svg" alt="arrow-prev"></button>',
        fade: true,
        responsive:[
            {
                breakpoint:441,
                settings: {
                    arrows: false
                }
            }
        ]
     
});
});