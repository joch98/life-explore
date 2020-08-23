$(document).ready(function() {
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