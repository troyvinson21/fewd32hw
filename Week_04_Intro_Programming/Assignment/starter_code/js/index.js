jQuery(document).ready(function(){


jQuery('.learnmore').click(hidetext)
	function hidetext() {
		jQuery('.learnmore').hide();
	}
jQuery('.learnmore').click(showtext)
	function showtext() {
		jQuery('#learnmoretext').show();
	}

jQuery('.readmore').click(changetext)
	function changetext () {
		jQuery('.readless').show()
		jQuery('.readmore').hide()
		jQuery('#show-this-on-click').show();
	}

jQuery('.readless').click(less)
	function less() {
		jQuery('.readmore').show()
		jQuery('.readless').hide()
		jQuery('#show-this-on-click').hide();
	}

});