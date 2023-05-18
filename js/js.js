$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        // spaceBetween: 30,
        breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
    var gtswiper = new Swiper('.gtswiper', {
        autoHeight: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
            fill: 'row',
            rows: 2,
        },
        // breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1000: {
            //     slidesPerView: 1,
            //     spaceBetween: 0,
            // }
        // },
        navigation: {
            nextEl: '.gtswiper-button-next',
            prevEl: '.gtswiper-button-prev',
          },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
    });
})