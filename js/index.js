$(function(){
  const swiper1 = new Swiper('.slider1', {
    slidesPerView: 6,
    spaceBetween: 18,
    navigation: {
      nextEl: '.swiper1-next',
      prevEl: '.swiper1-prev',
    }, 
    pagination: {
      el: '.swiper1-pagination',
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 8,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 18,
        grid: {
        rows: 1,
      },
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 18,
        grid: {
        rows: 1,
      },
      },
      1399: {
        slidesPerView: 6,
        spaceBetween: 18,
        grid: {
        rows: 1,
      },
      },
    }
  });

  const swiper2 = new Swiper('.slider2', {
    slidesPerView: 6,
    spaceBetween: 18,
    navigation: {
      nextEl: '.swiper2-next',
      prevEl: '.swiper2-prev',
    }, 
    pagination: {
      el: '.swiper2-pagination',
      type: 'bullets',
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 8,
      },
      768: {
        slidesPerView: 4,
        grid: {
        rows: 1,
      },
      },
      1199: {
        slidesPerView: 5,
        grid: {
        rows: 1,
      },
      },
      1399: {
        slidesPerView: 6,
        grid: {
        rows: 1,
      },
      },
    }
  });
 
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header').addClass('scroll');
      $('.btn-top').addClass('active');
      $(".middle_header").css('border-bottom','1px solid #e7e7e7');
    } else {
      $('header').removeClass('scroll');
      $('.btn-top').removeClass('active');
      $(".middle_header").css('border-bottom','none');
    }
  })

  $(".lang button").click(function(){
    $(".lang ul").slideToggle();
  })

  $('.header_2 .tab').mouseenter(function(){
    $('header, .header_2 .tab ul').addClass('active');
    $(".middle_header").css('border-bottom','1px solid #e7e7e7');
  })
  $('header').mouseleave(function(){
    $('header, .header_2 .tab ul').removeClass('active');
    $(".middle_header").css('border-bottom','none');
  })

  let tab = $(".burgerTab .trigger");
  tab.change(function(){
    if(tab.is(":checked")){
      $(".side-nev").fadeIn(200);
      $(".header_2").fadeOut(200);
      $('header').css('z-index', 100);
      $('header').removeClass('active');
      $('body').css('overflow', "hidden");
      
      if($(window).width() <= 1024) {
        $('header').css('z-index', 0);
      }
    } else {
      $(".side-nev").fadeOut(200);
      $(".header_2").fadeIn(200);;
      $('header').css('z-index', 100);
      $('body').css('overflow', "visible");
    }
    $(".side-close").click(function(){
      $('.side-nev').fadeOut(200);
      $("input:checkbox[id='trigger']").prop("checked", false);
    })
  })
  $(".mid-menu .tab > li").click(function(){
    if($(window).width() <= 1024) {
      $(this).children('ul').slideToggle();
      $(this).siblings().children('ul').slideUp()
    }
  })
  
  $(window).resize(function(){
    if($(window).width() > 1024) {
      $(".mid-menu .tab ul").css('display','block');
    } else if ( $(window).width() <= 768) {

    } 
    $(".mid-menu .tab ul").css('display','none');
  })

  $(window).scroll(function(){
    console.log($(document).scrollTop())
  });
  $(window).scroll(desktopScrollEvent);
  const numbers = [1, 2, 3, 4, 5, 6];
  
function desktopScrollEvent() {
  $(window).resize(function(){
     if( $(window).width() > 1024 ) { 
      this.scrollY > 10 ? numbers.forEach(number => $('.slider1 .swiper-slide:nth-child('+number+') a').addClass('btt-nth-'+number)) : numbers.forEach(number => $('.slider1 .swiper-slide:nth-child('+number+') a').removeClass('btt-nth-'+number))
      
      this.scrollY > 584 ? numbers.forEach(number => $('.slider2 .swiper-slide:nth-child('+number+') a').addClass('btt-nth-'+number)) : numbers.forEach(number => $('.slider2 .swiper-slide:nth-child('+number+') a').removeClass('btt-nth-'+number).css('opacity', 0));
      
      this.scrollY > 975 ? $('.inquiry .common_h2:nth-child(1)').addClass('btt_2') : $('.inquiry .common_h2').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1066 ? $('.inquiry_wrap').addClass('btt_2') : $('.inquiry_wrap').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1156 ? $('.inquiry_wrap .top_list').addClass('btt_2') : $('.inquiry_wrap .top_list').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1523 ? $('.bottom_list .btn.btn_more').addClass('btt_2') : $('.bottom_list .btn.btn_more').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 2000 ? $('.inquiry .common_h2:nth-child(3)').addClass('btt_2') : $('.inquiry .common_h2:nth-child(2)').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 2114 ? $('.inquiry .list_type').addClass('btt_2') : $('.inquiry .list_type').removeClass('btt_2').css('opacity', 0);
     } else if($(window).width() > 768 && $(window).width() <= 1024 ) {
      this.scrollY > -1 ? numbers.forEach(number => $('.slider1 .swiper-slide:nth-child('+number+') a').addClass('btt-nth-'+number)) : numbers.forEach(number => $('.slider1 .swiper-slide:nth-child('+number+') a').removeClass('btt-nth-'+number))

      this.scrollY > 296 ? numbers.forEach(number => $('.slider2 .swiper-slide:nth-child('+number+') a').addClass('btt-nth-'+number)) : numbers.forEach(number => $('.slider2 .swiper-slide:nth-child('+number+') a').removeClass('btt-nth-'+number).css('opacity', 0));

      this.scrollY > 723 ? $('.inquiry .common_h2:nth-child(1)').addClass('btt_2') : $('.inquiry .common_h2').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 745 ? $('.inquiry_wrap').addClass('btt_2') : $('.inquiry_wrap').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 793 ? $('.inquiry_wrap .top_list').addClass('btt_2') : $('.inquiry_wrap .top_list').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1177 ? $('.bottom_list .btn.btn_more').addClass('btt_2') : $('.bottom_list .btn.btn_more').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1863 ? $('.inquiry .common_h2:nth-child(3)').addClass('btt_2') : $('.inquiry .common_h2:nth-child(2)').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1939 ? $('.inquiry .list_type').addClass('btt_2') : $('.inquiry .list_type').removeClass('btt_2').css('opacity', 0);
     } else {
       this.scrollY > -1 ? $('.slider1 .swiper-wrapper').addClass('btt_2') : $('.slider1 .swiper-wrapper').removeClass('btt_2').css('opacity', 0);
       this.scrollY > 386 ? $('.slider2 .swiper-wrapper').addClass('btt_2') : $('.slider2 .swiper-wrapper').removeClass('btt_2').css('opacity', 0);

       this.scrollY > 1100 ? $('.inquiry .common_h2:nth-child(1)').addClass('btt_2') : $('.inquiry .common_h2').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1133 ? $('.inquiry_wrap').addClass('btt_2') : $('.inquiry_wrap').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1151 ? $('.inquiry_wrap .top_list').addClass('btt_2') : $('.inquiry_wrap .top_list').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 1477 ? $('.bottom_list .btn.btn_more').addClass('btt_2') : $('.bottom_list .btn.btn_more').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 2053 ? $('.inquiry .common_h2:nth-child(3)').addClass('btt_2') : $('.inquiry .common_h2:nth-child(2)').removeClass('btt_2').css('opacity', 0);
      this.scrollY > 2093 ? $('.inquiry .list_type').addClass('btt_2') : $('.inquiry .list_type').removeClass('btt_2').css('opacity', 0);
     }
   }).resize();
 }
})

