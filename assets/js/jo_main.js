$(document).ready(function() {
  $('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
  });
  $('map').imageMapResize();
  $('.btnbox-tabs').tabs();
  $(".tab-selection li").click(function () {
    $(".tab-selection li").removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("tab-a") === true) {
        $(this).parents(".tabs-article-container").find(".tab-content").removeClass("active");
        $(this).parents(".tabs-article-container").find(".tab-content-a").addClass("active");
    } else if ($(this).hasClass("tab-b") === true) {
        $(this).parents(".tabs-article-container").find(".tab-content").removeClass("active");
        $(this).parents(".tabs-article-container").find(".tab-content-b").addClass("active");
    } else {
        $(this).parents(".tabs-article-container").find(".tab-content").removeClass("active");
        $(this).parents(".tabs-article-container").find(".tab-content-c").addClass("active");
    }
  });
})
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
$(document).ready(function() {   
  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event){
      $(sel).toggleClass('in');
      $(sel2).toggleClass('out');
  });
  if($(window).width() < 420) {
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      console.log(y)
      if (y > 1400 && y < 1900) {
        $('.discover-entry').addClass('mobile-active')
      }  
      if (y > 1900 && y < 2250) {
        $('.discover-entry').removeClass('mobile-active')
        $('.discover').addClass('mobile-active')
      }
      if (y > 2250 && y < 2850) {
        $('.discover').removeClass('mobile-active')
        $('.energy').addClass('mobile-active')
      }
      if (y > 2850 && y < 3100) {
        $('.energy').removeClass('mobile-active')
        $('.relationship-entry').addClass('mobile-active')
      }
      if (y > 3100 && y < 3500) {
        $('.relationship-entry').removeClass('mobile-active')
        $('.relationship').addClass('mobile-active')
      }
      if (y > 3500 && y < 3800) {
        $('.relationship').removeClass('mobile-active')
        $('.relationship-level').addClass('mobile-active')
      }
      if (y > 3800 && y < 4200) {
        $('.relationship-level').removeClass('mobile-active')
        $('.cases').addClass('mobile-active')
      } 
    });
  }
});
