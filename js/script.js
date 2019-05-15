$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#ay');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgb(52, 30, 20 )');
       } else {
          $('.navbar').css('background-color', 'rgb(52, 30, 20, 0.5)');
       }
   });
    }
    
    
});


$(document).ready(function(){
	$(".navbar").on("click","a", function (event) {
        
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top - 110}, 1500);
	});
});

$(".toggleMenu").click(function(e) {
   e.preventDefault();
   $(".nav").toggle();
});
if (ww < 800) {
   $(".toggleMenu").css("display", "inline-block");
   $(".nav").hide();
}