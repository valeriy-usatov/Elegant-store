import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function swiper(){

    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 24,
        breakpoints: {
          375: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          750: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
            2440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
      });
}

  export default swiper