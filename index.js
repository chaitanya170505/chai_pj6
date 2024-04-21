let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let hand1 = document.getElementById("hand1");
let hand2 = document.getElementById("hand2");

let gameReset = false;

let computerSpan = document.getElementById("Cwon");
var computerScore = parseInt(computerSpan.textContent);
let playerSpan = document.getElementById("Pwon");
var playerScore = parseInt(playerSpan.textContent);

let reset = document.getElementById("reset");

let restart = document.getElementById("restart");

let num = 0;

let heading = document.getElementById("heading");

var buttons = document.querySelectorAll(".button");

let checkNumber = 1;

function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    num = generateRandomNumber();
    hand1.classList.add("hand-movement-animation");
    hand2.classList.add("hand-movement-animation");
    setTimeout(function () {
      hand1.classList.remove("hand-movement-animation");
      hand2.classList.remove("hand-movement-animation");
    }, 4000);
  });
});

//rock button
rockBtn.addEventListener("click", function () {
  checkNumber = parseInt(this.getAttribute("data-number"));
  setTimeout(changeImage1, 4000);
  setTimeout(changeImage11, 4000);
});

function changeImage1() {
  checkFunction();
  hand2.src = "./Assets/player_image1.png";
}

//paper button
paperBtn.addEventListener("click", function () {
  checkNumber = parseInt(this.getAttribute("data-number"));
  setTimeout(changeImage2, 4000);
  setTimeout(changeImage22, 4000);
});

function changeImage2() {
  checkFunction();
  hand2.src = "./Assets/player_image2.png";
}

//scissor button
scissorBtn.addEventListener("click", function () {
  checkNumber = parseInt(this.getAttribute("data-number"));
  setTimeout(changeImage3, 4000);
  setTimeout(changeImage33, 4000);
});

function changeImage3() {
  checkFunction();
  hand2.src = "./Assets/player_image3.png";
}



function changeImage11() {
  hand1.src = "./Assets/image" + num + ".png";
}

function changeImage22() {
  hand1.src = "./Assets/image" + num + ".png";
}

function changeImage33() {
  hand1.src = "./Assets/image" + num + ".png";
}



function checkFunction() {
  if (num == checkNumber) {
    heading.textContent = "Its a draw. Click on the Reset button to play again";
    heading.style.color='black';
  } else if (num == 1 && checkNumber == 2) {
    heading.textContent = "You Won. Click on the Reset button to play again";
    heading.style.color='green';
    playerScore = playerScore + 1;
  } else if (num == 3 && checkNumber == 1) {
    heading.textContent = "You Won. Click on the Reset button to play again";
    playerScore = playerScore + 1;
    heading.style.color='green';
  } else if (num == 2 && checkNumber == 3) {
    heading.textContent = "You Won. Click on the Reset button to play again";
    playerScore = playerScore + 1;
    heading.style.color='green';
  } else if (num == 1 && checkNumber == 3) {
    heading.textContent = "You Lost. Click on the Reset button to play again";
    heading.style.color='red';
    computerScore = computerScore + 1;
  } else if (num == 2 && checkNumber == 1) {
    heading.textContent = "You Lost. Click on the Reset button to play again";
    heading.style.color='red';
    computerScore = computerScore + 1;
  } else if (num == 3 && checkNumber == 2) {
    heading.textContent = "You Lost. Click on the Reset button to play again";
    heading.style.color='red';
    computerScore = computerScore + 1;
  }

  computerSpan.textContent = computerScore;
  playerSpan.textContent = playerScore;
}

reset.addEventListener("click", function () {
  hand2.src = "./Assets/hand2.png";
  hand1.src = "./Assets/hand1.png";
  heading.textContent='Welcome to the Rock-Paper-Scissors Game';
  heading.style.color='rgb(4, 99, 10)';
  gameReset=true;
});

restart.addEventListener("click", function () {
    location.reload(); 
});
