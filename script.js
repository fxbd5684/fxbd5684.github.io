$(document).ready(function() {
    $(window).scroll(function() {
        var windowScroll = $(window).scrollTop();
        
        $(".section").each(function(index, element) {
            var offset = $(element).offset().top;
            var height = $(element).outerHeight();

            if (windowScroll >= offset && windowScroll < offset + height) {
                if (index % 4 === 0) {
                    $(element).css("transform", "translateX(0)");
                } else if (index % 4 === 1) {
                    $(element).css("transform", "translateX(0)");
                } else if (index % 4 === 2) {
                    $(element).css("transform", "translateX(0)");
                } else {
                    $(element).css("transform", "translateX(0)");
                }
                $(element).css("opacity", 1);
            } else {
                if (index % 4 === 0) {
                    $(element).css("transform", "translateX(-50px)");
                } else if (index % 4 === 1) {
                    $(element).css("transform", "translateX(50px)");
                } else if (index % 4 === 2) {
                    $(element).css("transform", "translateX(-50px)");
                } else {
                    $(element).css("transform", "translateX(50px)");
                }
                $(element).css("opacity", 0);
            }
        });
    });
});