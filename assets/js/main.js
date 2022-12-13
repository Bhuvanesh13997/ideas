var addClassOnScroll = function () {
    var windowTop = $(window).scrollTop();
    $('section[id]').each(function (index, elem) {
        var offsetTop = $(elem).offset().top;
        var outerHeight = $(this).outerHeight(true);

        if( windowTop > (offsetTop - 50) && windowTop < ( offsetTop + outerHeight)) {
            var elemId = $(elem).attr('id');
            $("nav ul li a.active").removeClass('active');
            $("nav ul li a[href='#" + elemId + "']").addClass('active');
        }
    });
};

$(function () {
    $(window).on('scroll', function () {
        addClassOnScroll();
    });
});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});










// $("img").click(function(){
//     var t = $(this).attr("src");
//     alert(t)
//     $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
//     $("#myModal").modal();
//   });
  



