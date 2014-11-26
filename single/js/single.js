(function($) {

    $.fn.single = function(options) {

        var opts = $.extend({}, $.fn.single.defaults, options);

        return this.each(function(){

            // Get the instance
            var element = $(this);

            // Resize the "data-target" divs
            changeCSS(element);

            // Bind the methods changeCSS and changeIMG to the resize window event
            $(window).bind("resize", function(){
                changeCSS(element);
            });

            // Bind the method click to the data-link
			element.find("[data-link]").bind("click", function(event){
                event.preventDefault();
                goToSection(this, opts);
            });

        });

    };

    // function to resize all the "data-target" divs
    function changeCSS(element) {

		var sections = element.find("[data-section]");

        // Grab the screen resolution
        var windowHeight = $(window).height();

        // Count how many targets the div has
        var sectionLength	= sections.length;

        // Resize the parent div
        element.css({
            "width" : "100%",
            "height": windowHeight * sectionLength
        });

        // Resize all the sections
		sections.css({
            "width" : "100%",
            "height": windowHeight
        });

    }

    // function to scroll the page to a section
    function goToSection(obj, opts) {

        var goingTo = $(obj).attr('data-link'); // get the data-link value
        var targetPosition = $('[data-section="'+goingTo+'"]').position().top - opts.away; // get the position of the target

        // jQuery Easing animation
        $("html, body").animate({
            scrollTop: targetPosition
        }, {
            duration: opts.speed,
            easing: opts.animation
        });

    }

    // Plugin defaults
    $.fn.single.defaults = {
        speed: 2000,
        animation: "easeOutExpo",
		away: 0
    };

})(jQuery);