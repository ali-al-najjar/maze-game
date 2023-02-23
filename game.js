document.addEventListener('DOMContentLoaded', () => {
var game_boundaries = document.getElementsByClassName("boundary");
var game_start = document.getElementById("start");
var game_end = document.getElementById("end");
var game_status = document.getElementById("status");
var score = 0;
var example = document.getElementsByClassName("example")[0];

function changeColor(){
  for(i=0;i<game_boundaries.length-1;i++){
    game_boundaries[i].style.borderColor="red";
  }
  }

function resetColor(){
  for(i=0;i<game_boundaries.length-1;i++){
    game_boundaries[i].style.borderColor="black";
  }
  }

function gameLost(){
  changeColor();
  score -= 10;
  example.innerText= score;
  game_status.style.color="red";
  game_status.innerHTML = "You lost!";
  for(i=0;i<game_boundaries.length;i++){
      game_boundaries[i].removeEventListener("mouseover",gameLost)
    
    }
  game_end.removeEventListener("mouseover",gameEnd)
  }

function gameStart(){
  resetColor();
  game_status.innerHTML = 'Begin by moving your mouse over the "S".';
  game_status.style.color="black";
  for(i=0;i<game_boundaries.length;i++){
    game_boundaries[i].addEventListener("mouseover",gameLost)
  
  }
  game_end.addEventListener("mouseover",gameEnd)
}

function gameEnd(){
  game_status.innerHTML = "YOU WIN!";
  game_status.style.color ="black";
  score += 5;
  example.innerText= score;
  game_end.removeEventListener("mouseover",gameEnd)
  for(i=0;i<game_boundaries.length;i++){
    game_boundaries[i].removeEventListener("mouseover",gameLost)
}}

function gameReset(){
  resetColor();
  game_win=true;
  score = 0;
  example.innerText= score;
  game_status.innerHTML = 'You resetted the game! Begin by moving your mouse over the "S".';
  game_status.style.color="black";
  for(i=0;i<game_boundaries.length;i++){
    game_boundaries[i].addEventListener("mouseover",gameLost)
  
  }
  game_end.addEventListener("mouseover",gameEnd)
}

game_start.addEventListener("mouseover",gameStart);
game_start.addEventListener("click",gameReset);

})
