// mobile hamburger
$(".mobile-user-hamburger").click(function () {
  $(".mobile-user-bar").toggleClass("active");
});
//跑馬燈
var mediaTitle = "關心門拓的大家：Mentor門拓數位教育平台，許多功能仍在建置中目前僅開放首頁瀏覽與課程介紹，預計6月底開始課程陸續完成可上網訂購課程,享受早鳥優惠，預計8月中平台正式上線，敬請期待";
var count = 20;
if (mediaTitle.length > count) {
  $("#title").html("<marquee>" + mediaTitle + "</marquee>");
}
$(document).ready(function(){
//slider items teacher-list
$(".responsive").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1000,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 840,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 780,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 720,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
  ],
  prevArrow: "<img class='slick-prev' src='./img/arrow-left.png'>",
  nextArrow: "<img class='slick-next' src='./img/arrow-right.png'>",
});

//slider items teacher-list
$(".list").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 1000,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 840,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
  ],
  prevArrow: "<img class='slick-prev' src='./img/arrow-left.png'>",
  nextArrow: "<img class='slick-next' src='./img/arrow-right.png'>",
});

//slider items cart
$(".cart-list").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1000,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 840,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 780,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 720,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
  ],
  prevArrow: "<img class='slick-prev' src='./img/arrow-left.png'>",
  nextArrow: "<img class='slick-next' src='./img/arrow-right.png'>",
});
$(".discover-slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
    prevArrow: "<img class='slick-prev' src='./img/arrow-left.png'>",
    nextArrow: "<img class='slick-next' src='./img/arrow-right.png'>",
  });
});
//將數字加入千分位逗號
$.fn.digits = function () {
  return this.each(function () {
      $(this).text(
          $(this)
              .text()
              .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
      );
  });
};
$(".price-cma").digits();
//tr整列可點擊
$(function() {
    $('tr.link').click(function() {  
        window.location = $(this).data("href");
    }); 
})
//課程介紹 章節
$(".chapter").click(function () {
  $(this).parent("li").find("ul").toggleClass("active");
});
//頁籤
$(".tab-section li").click(function () {
    $(".tab-section li").removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("course-introduce") === true) {
        $(this).parents(".tab").find("section").removeClass("active");
        $(this).parents(".tab").find(".tab-course-introduce").addClass("active");
    } else if ($(this).hasClass("discuss") === true) {
        $(this).parents(".tab").find("section").removeClass("active");
        $(this).parents(".tab").find(".tab-discuss").addClass("active");
    } else if ($(this).hasClass("student-review") === true) {
        $(this).parents(".tab").find("section").removeClass("active");
        $(this).parents(".tab").find(".tab-student-review").addClass("active");
    } else if ($(this).hasClass("homework-review") === true) {
        $(this).parents(".tab").find("section").removeClass("active");
        $(this).parents(".tab").find(".tab-homework-review").addClass("active");
    } else if ($(this).hasClass("tab5") === true) {
        $(this).parents(".tab").find("section").removeClass("active");
        $(this).parents(".tab").find(".tab5-block").addClass("active");
        $('.discover-slider').slick('setPosition');
        $('.discover-slider').slick('refresh');
    } else if ($(this).hasClass("tab6") === true) {
        $(this).parents(".tab").find("section").removeClass("active");
        $(this).parents(".tab").find(".tab6-block").addClass("active");
    } else {
        $(this).parents(".tab").find("section").removeClass("active");
        $(this).parents(".tab").find(".tab7-block").addClass("active");
    }
  });


//一般課程頁面 推薦課程 top頁籤
$(".course-top-tab-ul li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("tab-list-recommend") === true) {
        $(this).parents(".course-list-top-tab").find("ul").removeClass("active");
        $(this).parents(".course-list-top-tab").find(".course-list-recommend").addClass("active");
        // $('.discover-slider').slick('setPosition');
        // $('.discover-slider').slick('refresh');
    } else if ($(this).hasClass("tab-high-review") === true) {
        $(this).parents(".course-list-top-tab").find("ul").removeClass("active");
        $(this).parents(".course-list-top-tab").find(".high-review").addClass("active");
    } else {
        $(this).parents(".course-list-top-tab").find("ul").removeClass("active");
        $(this).parents(".course-list-top-tab").find(".live-course").addClass("active");
    }
  });

  $(".course-bottom-tab-ul li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    let parentDiv = $(this).parents(".course-list-bottom-tab")
    if ($(this).hasClass("tab-a") === true) {
        parentDiv.find(".tabblock-a").siblings().removeClass("active");
        parentDiv.find(".tabblock-a").addClass("active");
        // $('.discover-slider').slick('setPosition');
        // $('.discover-slider').slick('refresh');
    } else if ($(this).hasClass("tab-b") === true) {
        parentDiv.find(".tabblock-b").siblings().removeClass("active");
        parentDiv.find(".tabblock-b").addClass("active");
    } else if ($(this).hasClass("tab-c") === true) {
        parentDiv.find(".tabblock-c").siblings().removeClass("active");
        parentDiv.find(".tabblock-c").addClass("active");
    } else {
        parentDiv.find(".tabblock-d").siblings().removeClass("active");
        parentDiv.find(".tabblock-d").addClass("active");
    }
  });
$('.tab5-block .add-new-major').click(function () {
    let container = $(this).parents('.tab5-block')
    let selected_option = container.find('.select option:selected').text()
    let selected_val = container.find('.select option:selected').val()
    let selected_block = container.find('ul.selected-block')
    let html = '<li>' + selected_option + '<i class="fas fa-times"></i></li>'
    if(selected_val == 0) {
        selected_block.append('')
    } else {
        selected_block.append(html)
    }
    $('.fa-times').click(function () {
        $(this).parent('li').remove()
    })
})
$('.fa-times').click(function () {
    $(this).parent('li').remove()
})
$('.tab6-block .add-new-major').click(function () {
    let container = $(this).parents('.tab6-block')
    let selected_option = container.find('.select option:selected').text()
    let selected_val = container.find('.select option:selected').val()
    let selected_block = container.find('ul.selected-block')
    let html = '<li>' + selected_option + '<i class="fas fa-times"></i></li>'
    if(selected_val == 0) {
        selected_block.append('')
    } else {
        selected_block.append(html)
    }
    $('.fa-times').click(function () {
        $(this).parent('li').remove()
    })
})
//課程詳細頁 直播、線上
$(".video-tabs li").click(function () {
    $(".video-tabs li").removeClass("active");
    $(this).addClass("active");
    if ($(this).hasClass("tab-live") === true) {
        $(this).parents(".video-tabs-block").find(".tab-online-block").removeClass("active");
        $(this).parents(".video-tabs-block").find(".tab-live-block").addClass("active");
        $('.your-class').slick('setPosition');
        $('.your-class').slick('refresh');
    } else {
        $(this).parents(".video-tabs-block").find(".tab-live-block").removeClass("active");
        $(this).parents(".video-tabs-block").find(".tab-online-block").addClass("active");
        $('.your-class').slick('setPosition');
        $('.your-class').slick('refresh');
    }
  });
/*訂單匯款回報*/
$('a[href="#report"]').click(function () {
  var newNB = $(this).parents("li").find(".order-number").text();
  console.log(newNB);
  $("#hidden-input").val(newNB); //將訂單號碼存在hidden input中
  $('input[name="text1"]').val();
  $('input[name="text2"]').val();
});
/*lightbox*/
$("a.fl").featherlight({
  targetAttr: "href",
  closeOnClick: "background",
});

var storeNumber = null;
$("a.fl-report").featherlight({
  targetAttr: "href",
  closeOnClick: "background",
  persist: false,
  afterClose: function () {
      if (!storeNumber) {
          var newAcc = $(this).find("#payAccount").val();
          console.log(this.$content.find("#payAccount").val());
          console.log(this.$content.find("#payAmount").val());
      }
  },
});

function f1(objButton) {
  console.log("get value");
}




//加入我的最愛 icon
$(".heart-box").click(function () {
  $(this).toggleClass("active");
});
function set_ddl_date(year_start) {
  var now = new Date();

  //年(year_start~今年)
  for (var i = now.getFullYear(); i >= year_start; i--) {
      $("#ddl_year").append(
          $("<option></option>")
              .attr("value", i)
              .text(i + "年")
      );
  }

  //月
  for (var i = 1; i <= 12; i++) {
      $("#ddl_month").append(
          $("<option></option>")
              .attr("value", i)
              .text(i + "月")
      );
  }

  $("#ddl_year").change(onChang_date);
  $("#ddl_month").change(onChang_date);

  //年、月選單改變時
  function onChang_date() {
      if ($("#ddl_year").val() != -1 && $("#ddl_month").val() != -1) {
          var date_temp = new Date($("#ddl_year").val(), $("#ddl_month").val(), 0);

          //移除超過此月份的天數
          $("#ddl_day option").each(function () {
              if ($(this).val() != -1 && $(this).val() > date_temp.getDate()) $(this).remove();
          });

          //加入此月份的天數
          for (var i = 1; i <= date_temp.getDate(); i++) {
              if (!$("#ddl_day option[value='" + i + "']").length) {
                  $("#ddl_day").append(
                      $("<option></option>")
                          .attr("value", i)
                          .text(i + "日")
                  );
              }
          }
      } else {
          $("#ddl_day option:selected").removeAttr("selected");
      }
  }
}

//開始年份
set_ddl_date(1940);


//考試系統 圖片
$(".owl-carousel").owlCarousel({
  loop: false,
  nav: true,
  lazyLoad: true,
  items: 1,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
});
$(".exam-none-background").click(function () {
  $(this).toggleClass("active");
  $(this).parents("li").find(".exam-question-container").toggleClass("show");
});
$(".exam-answer li.answers").click(function () {
  $(this).toggleClass("active");
});
//管理題庫
$('.showLess').hide();
$(".first-category .fas").click(function () {
  $(this).toggleClass("fa-plus fa-minus");
  $(this).parents(".category-container").find(".second-container").toggleClass("show");
});
$(".second-category .fa-plus").click(function () {
    $(this).toggleClass("fa-plus fa-minus");
  let thisParent = $(this).parents(".category-container")
  thisParent.find(".category-table").toggleClass("show");
  
  size_li = thisParent.find(".category-table.show li").size();
  x=3;
  thisParent.find('.category-table.show li:lt('+x+')').show();
  thisParent.find('.category-table.show li').not(':lt('+x+')').hide();

  $('.loadMore').click(function () {
    $(this).hide();
    $(this).next().show();
    $(this).parent('.category-table').find('li:gt(3)').show();
  });
  $('.showLess').click(function () {
    $(this).prev().show();
    $(this).hide();
    $(this).parent('.category-table').find('li:gt(3)').hide();
  });
});

//考試系統 倒數計時
var timer2 = "90:01";
var interval = setInterval(function () {
  var timer = timer2.split(":");
  //by parsing integer, I avoid all extra string processing
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  --seconds;
  minutes = seconds < 0 ? --minutes : minutes;
  if (minutes < 0) clearInterval(interval);
  seconds = seconds < 0 ? 59 : seconds;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  //minutes = (minutes < 10) ?  minutes : minutes;
  $(".countdown").html(minutes + ":" + seconds);
  timer2 = minutes + ":" + seconds;
}, 1000);

/*lightbox*/
$("a.fl").featherlight({
  targetAttr: "href",
  closeOnClick: "background",
});
//密碼
$(".password-eye-icon").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});
function validate() {
  var validationField = document.getElementById("validation-txt");
  var password = document.getElementById("password");
  var content = password.value;
  var errors = [];
  if (content.length < 6) {
      errors.push("密碼必需六個以上字元 ");
  }
  if (content.search(/[a-z]/i) < 0) {
      errors.push(" 需有一個英文字母 ");
  }
  if (content.search(/[0-9]/i) < 0) {
      errors.push(" 需有一個數字 ");
  }
  if (errors.length > 0) {
      validationField.innerHTML = errors.join("");
      return false;
  }
  validationField.innerHTML = errors.join("");
  return true;
}
function check_data() {
    if (document.getElementById("phone").value != "") {
      var cellphone = /^09[0-9]{8}$/;
      if (!cellphone.test(document.getElementById("phone").value)) {
        alert("請正確輸入10碼的手機號碼");
        return false;
      }
    }
    if ($("#password-confirmation").val() != $("#password").val()) {
      alert("二次密碼不一致");
      return false;
    }
    if (!$("#agreement").prop("checked")) {
      alert("請勾選同意服務條款和隱私政策。");
      return false;
    }
    return true;
  }
  
// tw zip code
new TwCitySelector({
  el: ".city-selector-set",
  elCounty: ".county", // 在 el 裡查找 element
  elDistrict: ".district", // 在 el 裡查找 element
  elZipcode: ".zipcode", // 在 el 裡查找 element
});
// ck editor
CKEDITOR.replace( 'editor1' );
CKEDITOR.replace( 'editor2' );
CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'document', 'mode', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Save,NewPage,Preview,Print,Source,Templates,Cut,Undo,Redo,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,TextColor,Format,Maximize,ShowBlocks,About,Image,Link,Unlink,Anchor,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Bold,Italic,Underline,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,BulletedList,NumberedList,Outdent,Indent,CreateDiv,Blockquote,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Language,BidiRtl,BidiLtr,Form,TextField,Radio,Textarea,Select,Button,ImageButton,HiddenField,Checkbox';
};
//chart
var marksCanvas = document.getElementById("marksChart");
var marksData = {
  labels: ["推理力", "計算力", "創造力", "觀察力", "記憶力", "空間力"],
  datasets: [
      {
          label: "",
          borderWidth: 1,
          backgroundColor: "#000",
          borderColor: "#000",
          backgroundColor: "rgba(210,64,31,0.8)",
          data: [5, 2, 3, 4, 4, 5],
      },
  ],
};
var radarChart = new Chart(marksCanvas, {
  type: "radar",
  data: marksData,
  options: {
      scale: {
          ticks: {
              display: false,
              maxTicksLimit: 7,
          },
          pointLabels: {
              fontSize: 18,
          },
      },
      responsive: true,
      maintainAspectRatio: true,
      title: {
          display: false,
      },
      legend: {
          display: false,
      },
      elements: {
          point: {
              radius: 0,
          },
      },
  },
});
