// JavaScript Document
	(function($) {
		"use strict";
		$.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
						
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
	})(jQuery);
	
	/*Settings of Counters*/
	
	jQuery(function($) {
		
		$('#counters').waypoint(function(direction) {
			
        $('.quantity-counter1').countTo({
            from: 0,
            to: 114,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		$('.quantity-counter2').countTo({
            from: 0,
            to: 86430,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		$('.quantity-counter3').countTo({
            from: 0,
            to: 30,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		$('.quantity-counter4').countTo({
            from: 0,
            to: 730,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		
		// COUNTER 2
		
		$('.counter2-1').countTo({
            from: 0,
            to: 914,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		$('.counter2-2').countTo({
            from: 0,
            to: 33,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		$('.counter2-3').countTo({
            from: 0,
            to: 192,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		$('.counter2-4').countTo({
            from: 0,
            to: 420,
            speed: 2000,
            refreshInterval: 50,
            onComplete: function(value) {
                console.debug(this);
            }
        });
		
		
		
		
		
		}, {
				offset: function() {
					return $.waypoints('viewportHeight') - $(this).height() + 100;
				}
			});
			
		
    });