// document.getElementById('grayButton').onclick = switchGray;
//document.getElementById('whiteButton').onclick = switchWhite;

jQuery('#grayButton').on('click',switchGray);
jQuery('#whiteButton').on('click',switchWhite);

//function switchGray() {
  //document.body.style.backgroundColor = 'gray';
 //document.body.style.color = 'white';
//}

function switchGray(){
	jQuery('body').css('background-color','gray');
	jQuery('body').css('color','white');
}

function switchWhite(){
	jQuery('body').css('background-color','white');
	jQuery('body').css('color','gray');
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
