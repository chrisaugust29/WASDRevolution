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
// document.addEventListener("keydown", handleKeyPress);
// document.addEventListener("keyup", handleKeyPress);

function staticShowArrows() {
  let sLeftImg = document.getElementById("left");
  let leftPos =  (canvas.width /8 ) 
  console.log(leftPos)
  let sDownImg = document.getElementById("down");
  let downPos = leftPos + (canvas.width / 4);
//   let sUpImg = document.getElementById("up");
//   let upPos = 4.0 * (canvas.width / 12);
//   let sRightImg = document.getElementById("right");
//   let rightPos = 5.25 * (canvas.width / 12);

  let pic;
  let sx;
  let sy = 15;
  let width = 200;
  let height = 150;

  ["left", "down", "up", "right"].forEach(dir => {
    switch (dir) {
      case "left": pic = sLeftImg; sx = leftPos;
        break;
      case "down": pic= sDownImg; sx = downPos;
        break;
      case "up": pic = sUpImg;  sx = upPos;
        break;
      case "right": pic = sRightImg; sx = rightPos;
    }
    ctx.drawImage(pic, sx, sy, width, height,  );
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
      allArrows.forEach(arrow => (arrow.dy = -4));
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