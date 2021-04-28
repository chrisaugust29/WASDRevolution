class Arrows {
	constructor(dir) {
		this.width = 80;
		this.height = 80;
		this.y = 700;
		this.dy = 0;
		this.dir = dir;
		this.scores = true;
		this.displayArrow = this.displayArrow.bind(this);
		this.arrowDirection(dir);
	}

	displayArrow() {
    let fps = 0;
    const move = () => {
      fps++;
      ctx.drawImage(
        this.newDImg,
        this.shift,
        0,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
      this.y += this.dy;
      if (fps === 20) {
        this.shift += this.width;
        fps = 0;
        this.shift = this.shift === 1200 ? 0 : this.shift;
      }
      requestAnimationFrame(move);
    };
    move();
  }

   arrowDirection(dir) {
    this.newDImg = new Image();
    switch (direction) {
      case "left":
        this.newDImg.src = "../dLeft.png";
        this.shift = 0;
        this.x = 84.375;
        break;
      case "down":
        this.newDImg.src = "../dDown.png";;
        this.shift = 300;
        this.x = 154.6875;
        break;
      case "up":
        this.newDImg.src = "../dUp.png";;
        this.shift = 600;
        this.x = 225;
        break;
      case "right":
        this.newDImg.src = "../dRight.png";;
        this.shift = 900;
        this.x = 295.3125;
        break;
    }
  }
}