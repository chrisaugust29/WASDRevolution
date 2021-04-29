
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let firstModal = document.getElementById("firstModal");
let startModal = document.getElementById("startModal");
let directionModal = document.getElementById("directionModal");
let buttonPlay = document.getElementById("buttonPlay");
let showScore = document.getElementById("score");
let allArrows = [];
let health = 50;
let score = 0;
let leftInput = false;
let downInput = false;
let upInput = false;
let rightInput = false;
let paused = false;
let replay = false;
let gameover = false;
let timeout;

window.onload = staticShowArrows;

buttonPlay.onclick = startGame;
// document.getElementById("restartButton").onclick = playAgain;
// pauseIcon.onclick = pauseGame;
// document.getElementById("restartIcon").onclick = gameRestart;
// document.getElementById("mainSong").onended = songEnd
let dirSty = window.getComputedStyle(directionModal).getPropertyValue("display");
document.getElementById("startButton").onclick = displayDirections;
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyPress);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    staticShowArrows();

    for (let i = 0; i < allArrows.length; i++) {
        if (leftInput) {
            if (
                allArrows[i].x === 50 &&
                allArrows[i].y < 15 &&
                allArrows[i].y > 1
            ) {
            if (allArrows[i].scores === true) {
                score += 1;
                health -=1;
                allArrows[i].scores = false;
            }
                showScore.innerHTML = "Score: " + `${score}`;
                allArrows[i].newDImg.src = "";
            }
        }   
        if (downInput) {
            if (
                allArrows[i].x === 200 &&
                allArrows[i].y < 30 &&
                allArrows[i].y > 1
            ) {
            if (allArrows[i].scores === true ) {
                score += 1;
                health -=1;
                allArrows[i].scores = false;
                }
                showScore.innerHTML = "Score: " + `${score}`;
                allArrows[i].newDImg.src = "";
            }
        }
        if (upInput) {
            if (
                allArrows[i].x ===  350 &&
                allArrows[i].y < 30 &&
                allArrows[i].y > 1
            ) {
            if (allArrows[i].scores === true) {
                score += 1;
                health -=1;
                allArrows[i].scores = false;
                }
                showScore.innerHTML = "Score: " + `${score}`;
                allArrows[i].newDImg.src = "";
             }   
        }
        if (rightInput) {
            if (
                allArrows[i].x === 500 &&
                allArrows[i].y < 30 &&
                allArrows[i].y > 1
            ) {
            if (allArrows[i].scores === true) {
                score += 1;
                health -=1;
                allArrows[i].scores = false;
                }
                showScore.innerHTML = "Score: " + `${score}`;
                allArrows[i].newDImg.src = "";
             }
        }
    }
}

function handleKeyPress(e) {
     console.log(e.key);
  switch (e.keyCode) {
      case 65:
      leftInput = !leftInput;
      break;
    case 87:
      upInput = !upInput;
      break;
    case 68:
      rightInput = !rightInput;
      break;
    case 83:
      downInput = !downInput;
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
        console.log("help",allArrows.length)
      let randomArrow = arrowNew();
      allArrows.push(randomArrow);
      allArrows[allArrows.length - 1].displayArrow();
      allArrows.forEach(arrow => (arrow.dy
         = -4));
      let time;
      if (allArrows.length <= 15) {
        time = 600;
      } else if (allArrows.length <= 30 && allArrows.length > 15) {
        time = Math.floor(Math.random() * (600 - 400 + 1)) + 400;
      } else {
        time = Math.floor(Math.random() * (600 - 250 + 1)) + 250;
      }
      timeout = setTimeout(arrowDraw, time);
    } else {
      for (let i = 0; i < allArrows.length; i++) {
        allArrows[i].dy = 0;
      }
      timeout = setTimeout(arrowDraw, 100);
    
    }
  }
}

function arrowNew() {
  let randomNum = Math.floor(Math.random() *4) + 1;
  switch (randomNum) {
    case 1:
      return new Arrowd("left");
    case 2:
      return new Arrowd("down");
    case 3:
      return new Arrowd("up");
    case 4:
      return new Arrowd("right");
  }
}

function startGame() {
  firstModal.style.visibility = "hidden";
//   playButton.style.display = "none";
//   directions.style.zIndex = 0;
  arrowDraw();
  setInterval(draw, 1);
}

function displayDirections() {
  startModal.style.display = "none";
  directionModal.style.zIndex = 10;
  if (dirSty === "none") {
    directionModal.style.display = "flex";
  }
};