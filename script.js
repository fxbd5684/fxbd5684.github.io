$(document).ready(function () {
    $(window).scroll(function () {
      var windowScroll = $(window).scrollTop();
  
      $(".section").each(function (index, element) {
        var offset = $(element).offset().top;
        var height = $(element).outerHeight();
        
        // 在此之前，您可能需要添加一些条件来确保元素在屏幕中央时设置为 translateX(0)
  
        if (windowScroll >= offset && windowScroll < offset + height) {
          if (index % 3 === 0) {
            $(element).css("transform", "translateX(-300px)");
          } else if (index % 3 === 1) {
            $(element).css("transform", "translateX(300px)");
          } else {
            $(element).css("transform", "translateX(0)");
          }
          $(element).css("opacity", 1);
        } else {
          $(element).css("transform", "translateX(0)");
          $(element).css("opacity", 0);
        }
      });
    });
  });