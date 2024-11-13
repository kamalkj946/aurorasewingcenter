$(document).ready(function(){
    
  $('.buyadd').click(function(){
	$(this).parents().siblings('.item-buy').show();
  });
  
  $('.menu').click(function(){
	$('.row-drops').slideToggle(300);
  });
  
  $('.topex').click(function(e){
    e.preventDefault();
	$('.topbar').slideUp();
	$('.topspace').slideUp();
  });
  
  $(".single-option-selector").change(function(){
    $("#img1").attr('src','');
  });
  
});
  
$(document).scroll(function() {


    if ($(document).scrollTop()>=400){
        $(".topbar").slideUp();
    } else {
        $(".topbar").slideDown();
    };


  
});

function searchgo() {
	$(".nav-search").slideToggle();	
	$("#search").focus();	
};