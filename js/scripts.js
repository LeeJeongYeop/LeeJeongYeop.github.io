	
	

	
/* ------------------------------------------------------------------------ */
/* BEGIN USE STRICT *///
/* ------------------------------------------------------------------------ */			
 
	

(function ($) {
	"use strict";
	
/* ------------------------------------------------------------------------ */
/* LOADER *///
/* ------------------------------------------------------------------------  */

 
		jQuery(window).load(function() { // makes sure the whole site is loaded
			jQuery('#status').fadeOut(); // will first fade out the loading animation
			jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			jQuery('body').delay(350).css({'overflow':'visible'});
		});



		

		
 
/* ------------------------------------------------------------------------ */
/* STICKY NAVIGATION *///
/* ------------------------------------------------------------------------ */ 
 

 

 
  $(window).scroll(function() {
    var windowTop = Math.max($('body').scrollTop(), $('html').scrollTop());
	var home_height =  $('.home, .sub-page-banner').outerHeight();
		$('nav.navbar-default').each(function (index) {
			
			if ($(window).scrollTop() < home_height){
			$('nav.navbar-default').removeClass('stickey-nav');
														
			}
			if (windowTop > ($(this).position().top - 0))
			{
				$('nav.navbar-default').removeClass('stickey-nav');
				$('nav.navbar-default:eq(' + index + ')').addClass('stickey-nav');

			}
		});
		
		
  });
 
 
 
 
 
 
/* ------------------------------------------------------------------------ */
/* SMALL HEADER *///
/* ------------------------------------------------------------------------ */ 
 
			 

			 $(window).scroll(function() {    
					var scroll = jQuery(window).scrollTop();	
					if (scroll >= 500) {
						$("body").addClass("classic-stickey");
					}
					else {
						$("body").removeClass("classic-stickey");
					}
				});
			 
 
 
		
		
		
/* ------------------------------------------------------------------------ */
/* BACK TO TOP 
/* ------------------------------------------------------------------------ */


	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$("#back-to-top").addClass('to-top');
		} else{
			$("#back-to-top").removeClass('to-top');
		}
	});
	
	$('#back-to-top, .back-to-top, .navbar-brand').click(function() {
		  $('html, body').animate({ scrollTop:0 }, '800');
		  return false;
	});
		
	
  
  
/* ------------------------------------------------------------------------ */
/* MENU SMOOTH SCROLLING *///
/* ------------------------------------------------------------------------ */ 
  

   
 
 	jQuery('.scroll').each( function() {
    var $this = jQuery(this), 
        target = this.hash;
		jQuery(this).click(function (e) { 
			e.preventDefault();
			if( $this.length > 0 ) {
				if($this.attr('href') == '#' ) {
					// Do nothing   
				} else {
				   jQuery('html, body').animate({ 
						scrollTop: (jQuery(target).offset().top) - -1
					}, 1000);
				}  
			}
		});
	});
 


 

 
 
/* ------------------------------------------------------------------------ */
/* ALL COMMON CODES *///
/* ------------------------------------------------------------------------ */			
 

 
 // You can also use "$(window).load(function() {"
    jQuery(function () {
		
		
		//NICE SCROLL
		var nice = jQuery("html").niceScroll();  // You can make The document page (body) Touchenable.....{touchbehavior:true}

		
		//PARALLAX
		jQuery.stellar({
			horizontalScrolling: false,
			verticalOffset: 0
		});
		
		
		//FULL PAGE
		jQuery.fn.fullpage({
			'verticalCentered': false
		});


		//FULL SCREEN VIDEO
		var $allVideos = jQuery("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com']"),/*, object, embed*/
		jQueryfluidEl = jQuery("figure");
				
		$allVideos.each(function() {
		
		  jQuery(this)
			// jQuery .data does not work on object/embed elements
			.attr('data-aspectRatio', this.height / this.width)
			.removeAttr('height')
			.removeAttr('width');
		
		});
		
		jQuery(window).resize(function() {
		
		  var newWidth = jQueryfluidEl.width();
		  $allVideos.each(function() {
		  
			var jQueryel = jQuery(this);
			jQueryel
				.width(newWidth)
				.height(newWidth * jQueryel.attr('data-aspectRatio'));
		  
		  });
		
		}).resize();

		
		// SEE ON GOOGLE MAP BUTTON
		jQuery('#see-on-google').click(function(e) {
            jQuery('.map .overlay-fajar').fadeOut(1000);
			jQuery('.map .contact-info-widget').fadeOut(1000);
			jQuery('.map .heading').fadeOut(1000);
			jQuery('.map .contact-form-widget').fadeOut(1000);
			jQuery('#back-to-map-overlay').fadeIn(0);
        });
		jQuery('#back-to-map-overlay').click(function(e) {
            jQuery('.map .overlay-fajar').fadeIn(1000);
			jQuery('.map .contact-info-widget').fadeIn(1000);
			jQuery('.map .heading').fadeIn(1000);
			jQuery('.map .contact-form-widget').fadeIn(1000);
			jQuery('#back-to-map-overlay').fadeOut(0);
        });
		
		//SHARE OPEN
		jQuery('#share-btn').click(function(e) {
            jQuery('#share-sec').fadeIn(1000);
        });
		
		//SHARE CLOSE
		jQuery('#share-sec-close, .share-sec .overlay-fajar').click(function(e) {
            jQuery('#share-sec').fadeOut(1000);
        });
		
		//MAP POPUP
		jQuery('#map-address-popup-btn').click(function(e) {
            jQuery('.map-address-popup').fadeToggle(1000);
			jQuery('#map-address-popup-btn i').toggleClass('fa-plus fa-minus');
        });
		
		
		//SHOW/Hide HIDDEN CONTENT
		jQuery('#show-hidden-content').click(function(e) {
			jQuery('#hidden-content').fadeToggle(1000);
        });
		jQuery('#show-hidden-content.down-arrow').click(function(e) {
			jQuery('#show-hidden-content i').toggleClass('icon-arrow-down6');
			jQuery('#show-hidden-content i').toggleClass('icon-arrow-up6');
        });
		
		
		//SLIDE-UP MENU ON MOBILE
		if (screen.width <990 ){	 
			jQuery('#navbar-default li a.scroll').click(function(e) {
				jQuery('.navbar-collapse').removeClass('in');
			});
			
			}

	});


	
	//ADD YOUR SCRIPTS HERE
	
	
	
	
	 
})(jQuery);












	
/* ------------------------------------------------------------------------ */
/* JavaScript Code For Video Must be Outside From jQuery Function *///
/* ------------------------------------------------------------------------ */			
 
	

   var VideoSec=document.getElementById("video"); 

	function playVid()
	  { 
	  VideoSec.play(); 
	  } 

	function pauseVid()
	  { 
	  VideoSec.pause(); 
	  } 
	  
	  
	  //form submit
			function checkmail(input)
			 {
				var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(pattern1.test(input)){ return true; }else{ return false; }
			 }     
			  function proceed(){
				 var fName = document.getElementById("fName");
				 var lastName = document.getElementById("lastName");
				 var email = document.getElementById("email");
				 var subject = document.getElementById("subject");
				 var msg = document.getElementById("message");
				 var errors = "";
				 
				 if(fName.value == "")
				  { 
				  fName.className = 'error';
					return false;
				  }
				 
				  else if(lastName.value == "")
				  {
					lastName.className = 'error';
					return false;
				  }
				  
				  else if(email.value == "")
				  {
					email.className = 'error';
					return false;
				  }
				  else if(checkmail(email.value)==false)
				  {
					alert('Please provide a valid email address.');
					return false;
			
				  }
				  
					else if(subject.value == "")
				  {
					subject.className = 'error';
					return false;
				  }
				  else if(msg.value == "")
				  {
					msg.className = 'error';
					return false;
				  }
				  else 
					{
							$.ajax({
								type: "POST",
								url: "process.php",
								data: $("#contact_form").serialize(),
								success: function(msg)
								{
									//alert(msg);
									if(msg == 'success'){
									$('#contact_form').fadeOut(1000);
									$('#contact_message').fadeIn(2000);
									document.getElementById("contact_message").innerHTML = "Your email has been sent.";
									return true;
									}else{
									
									$('#contact_form').fadeOut(500);
									$('#contact_message').fadeIn(2000);
									document.getElementById("contact_message").innerHTML = "Your email has been sent.";
									return true;
									}
								}
							});
					} 
			  }

	
	
	  
/* ------------------------------------------------------------------------ */
/* END JavaScript Code For Video *///
/* ------------------------------------------------------------------------ */			
 