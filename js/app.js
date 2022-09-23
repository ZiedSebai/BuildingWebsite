$(document).ready(function(){
    $('#menu-button').click(function(){
        $(".fixed-nav").animate({left: '0'},200);
    });
    $('#close-menu').click(function(){
        $(".fixed-nav").animate({left: '-350px'},200);
    });
    $('.single-service-container').mouseenter(function(){
        $(this).children('.single-service').children('h4').animate({
            color:"#ff5e15"
        }, 150);
        $(this).children('.service-line').css("background-position","-100% 0");
    }).mouseleave(function(){
        $(this).children('.single-service').children('h4').animate({
            color: "rgb(0, 8, 77)"
        }, 150);
        $(this).children('.service-line').css("background-position","0 100%");
    })
     $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav:true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
     });
})
// window.onload = function() {
//     if (screen.width < 400) {
//         var mvp = document.getElementById('vp');
//         mvp.setAttribute('content','user-scalable=no,width=400');
//     }
// }

