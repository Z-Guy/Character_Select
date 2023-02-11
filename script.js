const FA = {
  name: "Faust",
  value: 5
};
const MA = {
  name: "May",
  value: 5
};
const HC = {
  name: "Happy Chaos",
  value: 7
};
const BA = {
  name: "Baiken",
  value: 3
};
avaible = [FA, MA, HC, BA]

var fighter = document.getElementsByName('FighterSelect');
var opponent = document.getElementsByName('OpponentSelect');

//Display the user's choice on screen 
function displayFighter(){
  for (var i = 0; i < fighter.length; i++) {
    if(fighter[i].checked){
      document.getElementById("P1C").innerHTML = fighter[i].value;
    }
  }
}

//Display the user's choice for opponent on screen 
function displayOpponent(){
  for (var i = 0; i < opponent.length; i++) {
    if(opponent[i].checked){
      document.getElementById("P2C").innerHTML = opponent[i].value;
    }
  }
}

function versus(){
  var fighterChoice, opponentChoice;
  for (var i = 0; i < fighter.length; i++) {
    if(fighter[i].checked){
      fighterChoice = fighter[i].value;
      for (var j = 0; j < avaible.length; j++) {
        if(fighterChoice == avaible[j].name){
          fighterValue = avaible[j].value;
        }
      }
    }
  }
  for (var i = 0; i < opponent.length; i++) {
    if(opponent[i].checked){
      opponentChoice = opponent[i].value;
      for (var j = 0; j < avaible.length; j++) {
        if(opponentChoice == avaible[j].name){
          opponentValue = avaible[j].value;
        }
    }
    }
  }
  if(fighterChoice && opponentChoice){
    document.getElementById("result").innerHTML = fighterChoice + " vs " + opponentChoice;
    document.getElementById("result1").innerHTML = whosBetter(fighterValue, opponentValue);
  } 
}


//Determine who won the fight
function whosBetter(a, b){
  return a > b 
    ? "You Win!!!" 
    : b > a  
    ? " You Lose!!!" 
    : "Draw!!";
}


