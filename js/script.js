<!-- Wlaczenie pluginu Slicknav -->

$(document).ready(function() {
	$('#menu').slicknav({
					closeOnClick:true,
					removeIds:false,
					removeClasses:false,
					label: '',										
			});		
	});
	

<!-- Powrot do gory strony -->				

$(".back-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});			



<!-- scrollowanie do wybranej sekcji strony po kliknieciu odpowiadajacy tej sekcji link menu -->			

$(document).ready(function() {
	$(document).on('click', 'a', function(event){
	    event.preventDefault();
			$target = $($.attr(this, 'href'));
			if ($(document).width() >= 1200) {	 
				$('body').animate({
						scrollTop: $target.offset().top -104
					}, 500);
			} else if ($target.length){
				$('body').animate({
						scrollTop: $target.offset().top}, 500);		
				}
	});
});



<!-- dodanie tzw. sticky navigation -->

$(document).ready(function () {
		  $(window).scroll(function() {
      			var ScrollPos = $(window).scrollTop();
                  if(ScrollPos > 60) {
                  $('nav').addClass('fixednav');               
            } else {
                  $('nav').removeClass('fixednav');
            } 
     });
});	 




<!-- właczenie/wyłaczanie karuzeli owl-carousel w zaleznosci od szerokosci strony" -->
	 
var imght = function () {
			if ($(document).width() >= 1200) {	 
			// destroy owl-carousel and remove all depending classes if window screensize is bigger then 767px
			$('.owl-carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
			$('.owl-carousel').find('.owl-stage-outer').children().unwrap();
			$('.opinions').addClass('owl-carousel');
				} else if ($(document).width() < 1200) {
							$('.owl-carousel').owlCarousel({
							loop:false,
							nav:false,
							items:1	
						});						
				}
			};
$(document).ready(imght);
$(window).resize(imght);