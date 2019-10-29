function scrollToElement(target, offset) {
  var scroll_offset = $(target).offset();
  $("body,html").animate({
    scrollTop: scroll_offset.top + (offset || 0),
    easing: 'swing'
  })
}

function scrollToBoard() {
  scrollToElement('#board', -$("#navbar").height());
}

document.getElementById('board').onload = scrollToBoard;


$(document).ready(function () {
  var navbar = $("#navbar");
  if (navbar.offset().top > 0) {
    navbar.addClass("navbar-custom");
    navbar.removeClass("navbar-dark");
  }
  $(window).scroll(function () {
    if (navbar.offset().top > 0) {
      navbar.addClass("navbar-custom");
      navbar.removeClass("navbar-dark");
    } else {
      navbar.addClass("navbar-dark");
    }
  });
  $('#navbar-toggler-btn').on('click', function () {
    $('.animated-icon').toggleClass('open');
    $('#navbar').toggleClass('navbar-col-show');
  });

  var oldLoad = window.onload;
  window.onload = function () {
    oldLoad && oldLoad();
  };

  // 向下滚动箭头的点击
  $(".scroll-down-bar").on("click", scrollToBoard);

  // 向顶部滚动箭头
  var topArrow = $("#scroll-top-button");
  var posDisplay = false;
  var scrollDisplay = false;
  // 位置
  var setTopArrowPos = function () {
    var boardRight = document.getElementById('board').getClientRects()[0].right;
    var bodyWidth = document.body.offsetWidth;
    var right = bodyWidth - boardRight;
    posDisplay = right >= 50;
    topArrow.css({
      "bottom": posDisplay && scrollDisplay ? "20px" : "-60px",
      "right": right - 64 + "px"
    });
  };
  setTopArrowPos();
  $(window).resize(setTopArrowPos);
  // 显示
  var headerHeight = $("#board").offset().top;
  $(window).scroll(function () {
    var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
    scrollDisplay = scrollHeight >= headerHeight;
    topArrow.css({
      "bottom": posDisplay && scrollDisplay ? "20px" : "-60px"
    });
  });
  // 点击
  topArrow.on("click", function () {
    $("body,html").animate({
      scrollTop: 0,
      easing: 'swing'
    })
  });
});

/* Sidebar */
var toggleSidebar = function(){
  $("#sidebar").toggleClass('sidebar-hide');
  $("#toggle-sidebar").toggleClass('sidebar-button-shift');
}
var hideSidebar = function(){
  $("#sidebar").addClass('sidebar-hide');
  $("#toggle-sidebar").addClass('sidebar-button-shift');
}
$("#toggle-sidebar").on("click",toggleSidebar);
$("header").on("click",hideSidebar);
$("#mainContent").on("click",hideSidebar);
$("#footerContent").on("click",hideSidebar);

/*加载disqus评论框*/
$(document).ready(function(){
  if(document.getElementById('disqus_thread')) {
    //recheckDQ();
  }
});
/*重载disqus评论框*/
var reload_disqus = function () {
  recheckDQ();
  $('#disqus_loading').css('display','none');
}

/*显示博客运行时间*/
var runtime = function () {
  var runTime = document.getElementById("runtime");
  var runtimeDate = runTime.getAttribute("date");
	var createDate = new Date(runtimeDate);
	var nowDate = new Date();
	var dateLine = nowDate.getTime() - createDate.getTime();
	var runDate = Math.floor(dateLine / (1000 * 60 * 60 * 24));
	runTime.innerHTML = runDate;
};
$(document).ready(function(){
	runtime();
});

/*窗口监视*/
var originalTitle = document.title;
window.onblur = function(){document.title = '你不爱我了QAQ'};
window.onfocus = function(){document.title = originalTitle};

/*一言API*/
$(document).ready(function(){
  getHitokoto();
});
function hitokoto(e) {
  $("#hitokoto").stop().fadeOut(function() {
    $("#hitokoto").html(e.hitokoto);
    var element = document.getElementById('hitokotoa');
    element.href = "https://hitokoto.cn?id=" + e.id;
    $("#hitokoto").stop().fadeIn()
  })
};
function getHitokoto() {
  var e = ["a", "b", "c", "d"],
  t = document.createElement("script");
  t.type = "text/javascript";
  t.id = "hitokotoko_js";
  t.src = "https://v1.hitokoto.cn/?encode=json&callback=hitokoto&charset=utf-8&cat=" + e[Math.floor(Math.random() * e.length)];
  $("#hitokoto").append(t);
};
setInterval(getHitokoto, 1e4);