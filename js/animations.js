

(function ($) {
	"use strict";
	
	
/* ------------------------------------------------------------------------ */
/* ANIMATIONS *///
/* ------------------------------------------------------------------------ */			
 

		
			jQuery('.animate-it').appear();
			jQuery(document.body).on('appear', '.animate-it', function(e, $affected) {
				var fadeDelayAttr;
				var fadeDelay;
				jQuery(this).each(function(){
				
	
					if (jQuery(this).data("delay")) {
						fadeDelayAttr = jQuery(this).data("delay")
						fadeDelay = fadeDelayAttr;				
					} else {
						fadeDelay = 0;
					}			
					jQuery(this).delay(fadeDelay).queue(function(){
						jQuery(this).addClass('animated').clearQueue();
					});			
				})			
			});
			
			
			
 /* ------------------------------------------------------------------------ */
/* SKILLS ONE ANIMATION *///
/* ------------------------------------------------------------------------ */  



			jQuery('.skills-widget').appear();
			jQuery(document.body).on('appear', '.skills-widget', function(e, $affected) {
				var fadeDelayAttr;
				var fadeDelay;
				
				jQuery(this).each(function(){
				
					if (jQuery(this).data("delay")) {
						fadeDelayAttr = jQuery(this).data("delay")
						fadeDelay = fadeDelayAttr;				
					} else {
						fadeDelay = 0;
					}			
					jQuery(this).delay(fadeDelay).queue(function(){
						jQuery('.skills-widget .progress').each(function(){
							jQuery(this).css('width', jQuery(this).attr('data-width') + '%'), jQuery(this).find('.progress-bar').css('overflow', 'visible')
						});
						
					});			
				})			
			});

			
/* ------------------------------------------------------------------------ */
/* SKILLS TWO ANIMATION *///
/* ------------------------------------------------------------------------ */			
 
 
			
			jQuery('.skills-widget2').appear();
			jQuery(document.body).on('appear', '.skills-widget2', function(e, $affected) {
				var fadeDelayAttr;
				var fadeDelay;
				
				jQuery(this).each(function(){
				
					if (jQuery(this).data("delay")) {
						fadeDelayAttr = jQuery(this).data("delay")
						fadeDelay = fadeDelayAttr;				
					} else {
						fadeDelay = 0;
					}			
					jQuery(this).delay(fadeDelay).queue(function(){
						jQuery('.skills-widget2 .progress .progress-bar').each(function(){
							jQuery(this).css('width', jQuery(this).attr('aria-valuenow') + '%'), jQuery(this).css('overflow', 'visible'), jQuery('.skills-widget2 .progress-bar').css('font-size', '20px').clearQueue();
						});
						
					});			
				})			
			});

			//Remove animation on mobile
			var screenWidth = screen.width;
			if (screenWidth <720 ){
				jQuery('div, img, input, textarea, button, a').removeClass('animate-it'); // to remove transition
			}

})(jQuery);