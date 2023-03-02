$('.carousel_1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<span class="arr_1"><i class="fa-solid fa-arrow-left"></i></span>','<span class="arr_2"><i class="fa-solid fa-arrow-right"></i></span>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


$('.carousel_2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dotClass:'carou_dots',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// counter

// $(selector).countMe(delay,speed)
$("#count1").countMe(85,8);

// $(selector).countMe(delay,speed)
$("#count2").countMe(85,8);

// $(selector).countMe(delay,speed)
$("#count3").countMe(85,8);










// + and -

    var $buttonPlus = $('.increase-btn');
var $buttonMin = $('.decrease-btn');
var $quantity = $('.quantity');
/*For plus and minus buttons*/
$buttonPlus.click(function(){
  $quantity.val( parseInt($quantity.val()) + 1 );
});
$buttonMin.click(function(){
  $quantity.val( parseInt($quantity.val()) - 1 );


  
    if ( ($quantity.val()) < 0    ) {
        document.querySelector(".quantity").value = "0";
    } 
  
  
});










/*For total*/
$(document).ready(function(){
    $(".checkout").on("keyup", ".quantity", function(){
        var price = +$(".price").data("price");
        var quantity = +$(this).val();
        $("#total").text("$" + price * quantity);
    })
})


// zoom

$(document).ready(function() {
  $("#img1").elevateZoom({ gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: "active" });
  $("#img1").bind("click", function(e) {
  var ez = $('#img1').data('elevateZoom');
  ez.closeAll();
  $.fancybox(ez.getGalleryList());
  return false;
  });
  });


  $(document).ready(function() {
    $("#img2").elevateZoom({ gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: "active" });
    $("#img2").bind("click", function(e) {
    var ez = $('#img2').data('elevateZoom');
    ez.closeAll();
    $.fancybox(ez.getGalleryList());
    return false;
    });
    });


// tabs colapse
$(function(){
    $('a[data-toggle="tab"]').historyTabs();
  });

























