var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      468: {
        slidesPerView: 2,
      },
      820: {
        slidesPerView: 2,
      },
    },
  });