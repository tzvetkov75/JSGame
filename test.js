function start() {
	// Start crafty and set a background color so that we can see it's working

	Crafty.init(500, 350, document.getElementById('game'));

	Crafty.e('Floor, 2D, Canvas, Color').attr({
		x : 0,
		y : 250,
		w : 500,
		h : 10
	}).color('green');

	Crafty.e('2D, Canvas, Color, Fourway, Gravity').attr({
		x : 0,
		y : 0,
		w : 10,
		h : 10
	}).color('#F00').fourway(4).gravity('Floor');

}