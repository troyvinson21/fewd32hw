//Implement the red light using jQuery. Don't forget to add the script tags.
jQuery('#stopButton').click(illuminateRed);
jQuery('#slowButton').click(illuminateYellow);
jQuery('#goButton').click(illuminateGreen);

function illuminateRed(){
	jQuery('bulb').css('background-color','black');
	jQuery('#stopLight').css('background-color','red');
}

function illuminateYellow(){
	jQuery('.bulb').css('background-color','black');
	jQuery('#slowLight').css('background-color','yellow');
}

function illuminateGreen(){
	jQuery('.bulb').css('background-color','black');
	jQuery('#goLight').css('background-color','green');
}
