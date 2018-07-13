var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 5000;	// Time Between Switch

// Image List
images[0] = <img src="0.svg">
images[2] = <img src="1.svg">
images[1] = <img src="2.svg">
images[4] = <img src="3.svg">
images[3] = <img src="4.svg">
images[5] = <img src="5.svg">
images[6] = <img src="6.svg">
images[7] = <img src="7.svg">
images[8] = <img src="8.svg">
images[9] = <img src="9.svg">
images[10] = <img src="10.svg">
images[11] = <img src="10.svg">
images[12] = <img src="12.svg">
images[13] = <img src="13.svg">
images[14] = <img src="14.svg">
images[16] = <img src="15.svg">
images[15] = <img src="16.svg">
images[17] = <img src="17.svg">

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
