$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:1,
        dots:true,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
    
     
})