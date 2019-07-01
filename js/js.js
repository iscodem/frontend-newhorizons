$(document).ready(function(){
    console.log('Paso ');
    // PRE LOADER
    $('.preloader').fadeOut(1000); // duración de la carga 
    
    // MENU
     $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
      });
  
    // PARALLAX EFFECT
   //$(window).stellar();


       // ABOUT SLIDER
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1000,
      });

});