jQuery(document).ready(function(){
	var cssdisabled = is_css_disabled();
	if (cssdisabled) {
		return;
	}
	jQuery(".wooslider").each(function(){
		jQuery(this).flexslider2({
			namespace: "wooslider-",
			useCSS: true,
			slideshow: true,
			video: true,
			"animation": "fade",
			"start": slider_start(this),
			"after": slider_after(this),
			"controlNav": false,
			"directionNav": false,
		});
	});

	function slider_start(slider) {
		// Custom controls

		var id = "#"+jQuery(slider).attr('id');

		jQuery(slider).prepend('<div aria-hidden="true" id="slider-controls"></div>');
		jQuery("#slider-controls").prepend('<span id="slider-prevnext"> <a aria-hidden="true" href="#" role="button" id="slider-prev"><span>Previous</span></a> <a aria-hidden="true" href="#" role="button" id="slider-next"><span>Next</span></a> </span>');
		jQuery("#slider-controls").prepend('<a aria-hidden="true" href="#" role="button" id="slider-pauseplay" class="pause" data-state="playing"><span>Pause</span></a>');

		jQuery("#slider-pauseplay").click(function(e){
            e.preventDefault();
			slider_update_aria();
            var button = jQuery(this);
            var state = button.attr("data-state");
            if (state === "playing") {
                // Slider is playing, we pause
                jQuery(slider).flexslider2("pause");
                button.removeClass("pause");
                button.addClass("play");
                button.attr("data-state","paused");
                button.html("<span>Play</span>");
            } else {
            	// Slider is paused, we play
                jQuery(slider).flexslider2("play");
                button.removeClass("play");
                button.addClass("pause");
                button.attr("data-state","playing");
                button.html("<span>Pause</span>");
            }
        });
  
        jQuery("#slider-prev").click(function(e){
            e.preventDefault();
			slider_update_aria();
            jQuery(slider).flexslider2('prev');
            slider_pause(slider);
        });

        jQuery("#slider-next").click(function(e){
            e.preventDefault();
            slider_update_aria();
            jQuery(slider).flexslider2('next');
            slider_pause();
        });

		jQuery(id+" .slides li a").focus(function() {
			jQuery(".wooslider").flexslider2("pause");
		});

		jQuery(id+" .slides li a").blur(function() {
			var state = jQuery("#slider-pauseplay").attr("data-state");
			if (state  === "playing") {
				jQuery(slider).flexslider2("play");
			}
		});

		jQuery(id+" .slides").hover(function() {
			jQuery(slider).flexslider2("pause");
		},function() {
			var state = jQuery("#slider-pauseplay").attr("data-state");
			if (state  === "playing") {
				jQuery(slider).flexslider2("play");
			}
		});

		// This code nicked from Wooslider
		var wooslider_holder = jQuery(slider).find("li.slide"); 
		if(0 !== wooslider_holder.length){
			var wooslides = ([]).concat(wooslider_holder.splice(0,2), wooslider_holder.splice(-2,2), jQuery.makeArray(wooslider_holder));
			jQuery.each(wooslides, function(i,el){
				var content = jQuery(this).attr("data-wooslidercontent"); 
				if(typeof content == "undefined" || false == content) return; 
				jQuery(this).append(content).removeAttr("data-wooslidercontent"); 
			}); 
		} 
	}

	function slider_after(elem) {
	}

	function slider_pause (slider) {
		var state = jQuery("#slider-pauseplay").attr("data-state");
		if (state === "playing") {
			jQuery("#slider-pauseplay").click();
		}
	}

	function slider_update_aria () {
		jQuery("ul.slides li").attr("aria-hidden","true");
		jQuery("ul.slides li.wooslider-active-slide").attr("aria-hidden","false");
		jQuery("ul.slides li a").attr("tabindex","-1");
		jQuery("ul.slides li.wooslider-active-slide a").attr("tabindex","0");
	}

	function is_css_disabled() {
		// cargo-culted from... somwhere?
		var testcss = document.createElement('div');
		testcss.style.position = 'absolute';
		document.getElementsByTagName('body')[0].appendChild(testcss);
		if (testcss.currentStyle) {
			var currstyle = testcss.currentStyle['position'];
		} else if (window.getComputedStyle) {
			var currstyle = document.defaultView.getComputedStyle(testcss, null).getPropertyValue('position');
		}
		var cssdisabled = (currstyle == 'static') ? true : false;
		document.getElementsByTagName('body')[0].removeChild(testcss);
		return cssdisabled;
	}
});
