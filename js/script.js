const swiper = new Swiper('.slider .swiper', {
   // Optional parameters
   direction: 'vertical',
   loop: false,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
   freeMode: false,
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   grabCursor: false,
   slideToClickedSlide: true,
   keyboard: {
      enabled: true,
      onIyViewport: true,
      pageUpDown: true,
   },
   preloadImages: false,
   lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: true,
   },

   autoplay: {
      delay: 50000,
   },
   speed: 700,
   mousewheel: {
      sensitivity: 1,
      eventsTarget: ".slider",
   },
});