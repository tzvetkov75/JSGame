function start() {
	// Start crafty and set a background color so that we can see it's working

	Crafty.init(500, 350, document.getElementById('game'));

	// when it walks
	Crafty.e('Floor, 2D, Canvas, Color').attr({
		x : 0,
		y : 250,
		w : 500,
		h : 10
	}).color('green');

	Crafty
			.e("2D, Canvas, Color, Fourway, Gravity, Collision")
			.attr({
				x : 20,
				y : 20,
				w : 30,
				h : 30
			})
			.color('#11AAB0')
			.fourway(4)
			.gravity('Floor')
			.checkHits('Solid')
			// check for collisions with entities that have the Solid component
			// in each frame
			.bind(
					'HitOn',
					function(hitData) {

						console
								.log('Collision with Solid entity occurred for the first time.');
						console.log("x=" + this.x);

						if (this._movement) {
							this.x -= this._movement.x;
							this.y -= this._movement.y;
							console.log('stop the movement');
						}
						this.resetHitChecks();
						// return this;
					}).bind('HitOff', function(comp) {
				console.log('Collision with Solid entity ended.');
			});

	// wall on the right
	Crafty.e('Wall, 2D, Canvas, Color, Solid, Floor').attr({
		x : 0,
		y : 230,
		w : 10,
		h : 20
	}).color('green');

	// wall on the left
	Crafty.e('Wall, 2D, Canvas, Color, Solid, Floor').attr({
		x : 370,
		y : 230,
		w : 10,
		h : 20
	}).color('green');

}
