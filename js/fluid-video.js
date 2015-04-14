
jQuery(function ($) {
"use strict";
		
		/*full screen video*/
		var $allVideos = jQuery("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
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
		})(jQuery);
