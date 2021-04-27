const Util = require("./util");

function Arrow(direction) {

	// CSS spacings for the arrows //
	var arrowPos = null;

	switch(direction) {

		case "left" : arrowPos = "115px";
		break;

		case "up" : arrowPos = "182";
		break;

		case "down" : arrowPos = "252px";
		break;

		case "right" : arrowPos = "322px";
		break;

	}

	this.direction = direction;
	this.image = $("<img src='./arrows/" + direction + ".gif'/>");
	this.image.css({

		position: "absolute",
		top: "0px",
		left: xPos

	});


