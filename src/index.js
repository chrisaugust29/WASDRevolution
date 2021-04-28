document.addEventListener("DOMContentLoaded", () => {
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let firstModal = document.getElementById("firstModal");
let startModal = document.getElementById("startModal");
let buttonPlay = document.getElementById("buttonPlay");
let allArrows = [];
let health = 0;
let score = 0;
let leftInput = false;
let downInput = false;
let upInput = false;
let rightInput = false;
let paused = false;
let replay = false;
let gameover = false;

window.onload = staticShowArrows;
// document.getElementById("startButton").onclick = popupDirections;
buttonPlay.onclick = startGame;
// document.getElementById("restartButton").onclick = playAgain;
// pauseIcon.onclick = pauseGame;
// document.getElementById("restartIcon").onclick = gameRestart;
// document.getElementById("mainSong").onended = songEnd;
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyPress);


function handleKeyPress(e) {
  switch (e.keyCode) {
    case 37:
      leftPressed = !a;
      break;
    case 38:
      upPressed = !w;
      break;
    case 39:
      rightPressed = !d;
      break;
    case 40:
      downPressed = !s;
      break;
  }
}


function staticShowArrows() {
    let pic;
    let posx;
    let posy = 15;
    let width = 250;
    let height = 175;
    let sLeftImg = document.getElementById("left");
    let leftPos =  (canvas.width /8 -50) 
    let sDownImg = document.getElementById("down");
    let downPos = (canvas.width /2 - 200)
    let sUpImg = document.getElementById("up");
    let upPos = (canvas.width /2 -50) 
    let sRightImg = document.getElementById("right");
    let rightPos = (canvas.width/2 +100 );
   
    ["left", "down", "up", "right"].forEach(dir => {
    switch (dir) {
      case "left": pic = sLeftImg; posx = leftPos;
        break;
      case "down": pic= sDownImg; posx = downPos;
        break;
      case "up": pic = sUpImg;  posx = upPos;
        break;
      case "right": pic = sRightImg; posx = rightPos;
    }
    ctx.drawImage(pic, posx, posy, width, height,);
  });
}

function arrowDraw() {
  if (gameover || replay) {
    return;
  } else {
    if (!paused) {
      let nextArrow = arrowNew();
      allArrows.push(nextArrow);
      allArrows[allArrows.length - 1].displayArrow();
      allArrows.forEach(arrow => (arrow.dy
         = -4));
      let time;
      if (allArrows.length <= 20) {
        time = 600;
      } else if (allArrows.length <= 40 && allArrows.length > 20) {
        time = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
      } else {
        time = Math.floor(Math.random() * (600 - 250 + 1)) + 250;
      }
      arrowDrawTimeout = setTimeout(arrowDraw, time);
    } else {
      for (let i = 0; i < allArrows.length; i++) {
        allArrows[i].dy = 0;
      }
      arrowDrawTimeout = setTimeout(arrowDraw, 100);
    }
  }
}

function arrowNew() {
  let randomNum = Math.round(Math.random() * 5) + 2;
  switch (randomNum) {
    case 1:
      return new Arrows("left");
    case 2:
      return new Arrows("down");
    case 3:
      return new Arrows("up");
    case 4:
      return new Arrows("right");
  }
}

function startGame() {
  firstModal.style.visibility = "hidden";
//   playButton.style.display = "none";
  directions.style.zIndex = 0;
  arrowDraw();
  setInterval(draw, 1);
}

});