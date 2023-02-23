document.addEventListener('DOMContentLoaded', () => {
var game_boundaries = document.getElementsByClassName("boundary");
var game_start = document.getElementById("start");
var game_end = document.getElementById("end");
var game_status = document.getElementById("status");
var game_win= true;

function changeColor(){
  for(i=0;i<game_boundaries.length;i++){
    game_boundaries[i].style.borderColor="red";
  }
  }

function resetColor(){
  for(i=0;i<game_boundaries.length;i++){
    game_boundaries[i].style.borderColor="black";
  }
  }


// console.log(game_win);

game_start.addEventListener("mouseover",function(){
    for(i=0;i<game_boundaries.length;i++){
      game_boundaries[i].addEventListener("mouseover",function(){
        game_win=false;
        changeColor();
        game_status.style.color="red";
        game_status.innerHTML = "You lost!";
        game_end.addEventListener("mouseover", function() {
          game_status.innerHTML = "Return Back to the starting point";
          game_status.style.color="red";
      })

      game_start.addEventListener("mouseover", function() {
        game_status.innerHTML = "Click on the start square to retry!";
        game_status.style.color="red";
      })
      // console.log(game_win);
    })
    }
    game_start.addEventListener("click",function(){
    resetColor();
    game_win=true;
    game_status.innerHTML = 'Begin by moving your mouse over the "S".';
    game_status.style.color="black";
    game_end.addEventListener("mouseover", function() {
        game_status.innerHTML = "YOU WIN!";
        game_status.style.color ="black";
        game_win=true;
      })
      // console.log(game_win);

  })

})





})