
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let firstModal = document.getElementById("firstModal");
let startModal = document.getElementById("startModal");
let directionModal = document.getElementById("directionModal");
let buttonPlay = document.getElementById("buttonPlay");
let showScore = document.getElementById("score");
let showHealth = document.getElementById("health");
let showMyHealth = document.getElementById("myhealth");
let hitMsg = document.getElementById("hit-message");
let song = document.getElementById("song");
let pauseIcon = document.getElementById("pauseIcon");
let drawn = true;
let allArrows = [];
let health = 200;
let myhp = 100;
let score = 0;
let pause = false;
let leftInput = false;
let downInput = false;
let upInput = false;
let rightInput = false;
let replay = false;
let gameover = false;
let timeout;

window.onload = staticShowArrows;

buttonPlay.onclick = startGame;
// document.getElementById("restartButton").onclick = playAgain;

document.getElementById("restartButton").onclick = restartDDr;
// document.getElementById("mainSong").onended = songEnd
let styleDirection = window.getComputedStyle(directionModal).getPropertyValue("display");
document.getElementById("startButton").onclick = displayDirections;
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyPress);
document.getElementById("muteIcon").onclick = toggleMute;
pauseIcon.onclick = gamePause;


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  staticShowArrows();

  for (let i = 0; i < allArrows.length; i++) {
    
    if (allArrows[i].hit === false) {
      
          if (leftInput) {
              if (
                  allArrows[i].x === 75 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ) {
              if (allArrows[i].scores === true && allArrows[i].healths === true ) {
                  score += 100;
                  health -= 5;
                  allArrows[i].scores = false;
                  allArrows[i].healths = false;
                  allArrows[i].hit = true;
                  allArrows[i].myhps = false;
                  hitMsg.className = "great";
                  setTimeout(() => {hitMsg.className = ""; }, 500);
                  hitMsg.innerText = "5 DMG NICE!";
                  setTimeout(() => {hitMsg.innerText = ""; }, 500);
              } 
              showScore.innerHTML = "Score: " + `${score}`;
              showHealth.innerHTML = "Enemy's HP:" + `${health}`;
              showMyHealth.innerHTML = "HP:" + `${myhp}`
              allArrows[i].newDImg.src = "";
            }
          } 
           if (!leftInput) {
              if (
                  allArrows[i].x === 75 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ){
              if (allArrows[i].myhps === true)
         
                myhp -= 10 
                allArrows.splice(i,1)
                hitMsg.className = "bad";
                setTimeout(() => {hitMsg.className = ""; }, 500);
                hitMsg.innerText = "MISSED -10 HP!";
                setTimeout(() => {hitMsg.innerText = ""; }, 500);
              }
               showMyHealth.innerHTML = "HP:" + `${myhp}`
            }
            
         if (downInput) {
              if (
                  allArrows[i].x === 225 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ) {
              if (allArrows[i].scores === true && allArrows[i].healths === true) {
                  score += 100;
                  health -= 5;
                  myhp += 0;
                  allArrows[i].scores = false;
                  allArrows[i].healths = false;
                  allArrows[i].myhps = false;
                  allArrows[i].hit == true;
                  hitMsg.className = "great";
                  setTimeout(() => {hitMsg.className = ""; }, 500);
                  hitMsg.innerText = "5 DMG NICE!";
                  setTimeout(() => {hitMsg.innerText = ""; }, 500);
                } 
                  showScore.innerHTML = "Score: " + `${score}`;
                  showHealth.innerHTML = "Enemy's HP:" + `${health}`;
                  showMyHealth.innerHTML = "HP:" + `${myhp}`
                  allArrows[i].newDImg.src = "";
              }
          }
          if (!downInput) {
              if (
                  allArrows[i].x === 225 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ){
              if (allArrows[i].myhps === true)
         
                myhp -= 10 
                allArrows.splice(i,1)
                hitMsg.className = "bad";
                setTimeout(() => {hitMsg.className = ""; }, 500);
                hitMsg.innerText = "MISSED -10 HP!";
                setTimeout(() => {hitMsg.innerText = ""; }, 500);
              }
               showMyHealth.innerHTML = "HP:" + `${myhp}`
            }
          if (upInput) {
              if (
                  allArrows[i].x ===  375 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ) {
              if (allArrows[i].scores === true && allArrows[i].healths === true) {
                score += 100;
                health -= 5;
                myhp += 0;
                allArrows[i].scores = false;
                allArrows[i].healths = false;
                allArrows[i].hit == true;
                allArrows[i].myhps = false;
                hitMsg.className = "great";
                setTimeout(() => {hitMsg.className = ""; }, 500);
                hitMsg.innerText = "5 DMG NICE!";
                setTimeout(() => {hitMsg.innerText = ""; }, 500);
                }
                showScore.innerHTML = "Score: " + `${score}`;
                showHealth.innerHTML = "Enemy's HP:" + `${health}`;
                showMyHealth.innerHTML = "HP:" + `${myhp}`
                allArrows[i].newDImg.src = "";
              }   
            }
            if (!upInput) {
              if (
                  allArrows[i].x === 375 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ){
              if (allArrows[i].myhps === true)
         
                myhp -= 10 
                allArrows.splice(i,1)
                hitMsg.className = "bad";
                setTimeout(() => {hitMsg.className = ""; }, 500);
                hitMsg.innerText = "MISSED -10 HP!";
                setTimeout(() => {hitMsg.innerText = ""; }, 500);
              }
               showMyHealth.innerHTML = "HP:" + `${myhp}`
            }
            if (rightInput) {
              if (
                  allArrows[i].x === 525 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ) {
              if (allArrows[i].scores === true && allArrows[i].healths === true) {
                score += 100;
                health -= 5;
                myhp += 0;
                allArrows[i].scores = false;
                allArrows[i].healths = false;
                allArrows[i].hit == true;
                allArrows[i].myhps = false;
                hitMsg.className = "great";
                setTimeout(() => {hitMsg.className = ""; }, 500);
                hitMsg.innerText = "5 DMG NICE!";
                setTimeout(() => {hitMsg.innerText = ""; }, 500);
                }
                showScore.innerHTML = "Score: " + `${score}`;
                showHealth.innerHTML = "Enemy's HP:" + `${health}`;
                showMyHealth.innerHTML = "HP:" + `${myhp}`
                allArrows[i].newDImg.src = "";
              }
            }
            if (!rightInput) {
              if (
                  allArrows[i].x === 525 &&
                  allArrows[i].y < 15 &&
                  allArrows[i].y > 1
              ){
              if (allArrows[i].myhps === true)
         
                myhp -= 10 
                allArrows.splice(i,1)
                hitMsg.className = "bad";
                setTimeout(() => {hitMsg.className = ""; }, 500);
                hitMsg.innerText = "MISSED -10 HP!";
                setTimeout(() => {hitMsg.innerText = ""; }, 500);
              }
               showMyHealth.innerHTML = "HP:" + `${myhp}`
            }
          // if arrow == tru
    } 
      //   else if (allArrows[i].hit === false && allArrows[i].myhps === true) { 
    
      // // if ( allArrows[i].hit === false && allArrows[i].y <= 0 ) {
      //   myhp -= 10 ;
      //   allArrows[i].myhps = false;
      //   // allArrows[i].hit = true;
      //   hitMsg.className = "bad";
      //   setTimeout(() => {hitMsg.className = ""; }, 500);
      //   hitMsg.innerText = "-10 HP MISSED!";
      //   setTimeout(() => {hitMsg.innerText = ""; }, 500)
      // }
      showMyHealth.innerHTML = "HP: " + `${myhp}`;
      showScore.innerHTML = "Score: " + `${score}`;
      showHealth.innerHTML = "Enemy's Hp:" + `${health}`;
    //   allArrows[i].newDImg.src = "";

  } setTimeout(()=> {
      draw()},10)
}


function handleKeyPress(e) {
   
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
    if (!pause && health > 0 && myhp > 0) {
      let randomArrow = arrowNew();
      allArrows.push(randomArrow);
      allArrows[allArrows.length - 1].displayArrow();
      allArrows.forEach(arrow => (arrow.dy
         = -4));
      let time;
      if (allArrows.length <= 15) {
        time = 600
      } else if (allArrows.length <= 30 && allArrows.length > 15) {
        time = Math.floor(Math.random() * (600 - 400+ 1)) + 400;
      } else if (allArrows.length <= 45 && allArrows.length > 30) {
        time = Math.floor(Math.random() * (600 - 250 + 1)) + 250;
      } else  {
         time = Math.floor(Math.random() * (500 - 50 + 1)) + 50
      }
      timeout = setTimeout(arrowDraw, time);
    } else if (health <= 0 ) {
      endGame()
    } else if (myhp <= 0 ) {
      // youLost()
      endGame()
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
  buttonPlay.style.display = "none";
  directionModal.style.zIndex = 0;
  directionModal.style.display = "none"
  if (styleDirection === "none") {
    directionModal.style.display = "none";
  }
  song.play();
  song.currentTime = 1;
  arrowDraw();
  drawn = false;
  draw();
  // setInterval(draw, 1);
}


function gamePause() {
  pause = !pause;
  if (pause) {
    song.pause();
    // pauseIcon.src = "./assets/img/pause.png";
  } else {
    song.play();
    // pauseIcon.src = "./assets/img/pause.png";
  }
}
function endGame() {
  firstModal.style.visibility = "visible";
  lastModal.style.display = "flex";
  gameover = true;
}

function youLost() {
  firstModal.style.visibility = "visible";
  lastModal2.style.display = "flex";
  // lastModal.style.display = "flex";
  gameover = true;

}

function displayDirections() {
  startModal.style.display = "none";
  directionModal.style.zIndex = 10;
  if (styleDirection === "none") {
    directionModal.style.display = "flex";
  } 
};

function playRestart(){
  firstModal.style.visibility = "visible";
  lastModal.style.display = "none";
  lastModal2.style.display ="none";
  gameover = false;
  // startGame();
}

function restartDDr() {
  restart();
  if (replay === true) {
    replay = false;
    buttonPlay.style.display = "flex";
    startModal.style.display = "flex";
    firstModal.style.visibility = "visible";
    playRestart();
  }
}
function toggleMute() {
  song.muted = !song.muted;
}

function restart() {
  clearTimeout(timeout);
  replay= true;
  pause = false;
  gameover = false;
  health = 200;
  myhp = 100;
  song.pause();
  song.currentTime = 0;
  showMyHealth.innerHTML = "HP:" + `${myhp}`;
  showHealth.innerHTML = "Enemy's Health: " + `${health}`;
  score = 0;
  showScore.innerHTML = "Score: " + `${score}`;
  allArrows = allArrows.map(arrow => {
    arrow.y = canvas.height;
    arrow.dy = 0;
  });
  allArrows = [];
}