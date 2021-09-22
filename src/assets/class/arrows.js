class Arrowd {
	constructor(dir) {
		// const canvas = document.getElementById("game-canvas");
		// const ctx = canvas.getContext("2d");
		this.dir = dir;
		this.width = 250;
		this.height = 175;
		this.y = 700;
		this.dy = 0;
		this.scores = true;
		this.healths = true;
		this.myhps = true;
		this.hit = false;
		this.displayArrow = this.displayArrow.bind(this);
		this.arrowDirection(dir);
	// 	this.ctx = document.getElementById("game-canvas").getContext("2d")
	}


   arrowDirection(dir) {
    this.newDImg = new Image();
    switch (dir) {
      case "left":
		//   "../img/dLeft.png";
        this.newDImg.src = "./src/assets/img/dLeft.png";
        this.x = 75;
        break;
      case "down":
		//   "../img/dDown.png";
        this.newDImg.src = "./src/assets/img/dDown.png";
        this.x = 225;
        break;
      case "up":
		//   "../src/assets/img/dUp.png";
        this.newDImg.src = "./src/assets/img/dUp.png";
        this.x = 375;
        break;
      case "right":
		//   "../src/assets/img/dRight.png";
        this.newDImg.src = "./src/assets/img/dRight.png";
        this.x = 525;
        break;
    }
  }

  	displayArrow() {
		let fps = 0;
		const moveArrows = () => {
			fps++;
			ctx.drawImage(
				this.newDImg,
				0,
				0,
				this.width,
				this.height,
				this.x,
				this.y,
				this.width,
				this.height
			);
			this.y += this.dy;
			
			requestAnimationFrame(moveArrows);
		};
			moveArrows();
  }
  
}