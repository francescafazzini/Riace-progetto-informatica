var Slider = new function() {

	var index = -1;
	var wrapper = $('#slideshow-wrapper', '#slideshow');
	var images = $('img', wrapper);

	var slide = setInterval(function() {

		index++;

		if(index == images.length) {

			index = 0;

			images.fadeIn();

		}

		images.eq(index).fadeOut(2000);


	}, 2000);

	this.init = function() {

		slide();

	};

}();

$(function() {

	Slider.init();

});
