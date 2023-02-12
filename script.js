const FA = {name: "Faust",type: "Unique",value: 5};
const MA = {name: "May",type: "Balance",value: 5};
const HC = {name: "Happy Chaos",type: "Shooting",value: 9};
const CH = {name: "Chipp Zanuff",type: "High Speed",value: 6};
const BA = {name: "Baiken",type: "Balance",value: 3};
const ZA = {name: "Zato=1",type: "Technical",value: 4};
const RA = {name: "Ramlethal Valentine",type: "Shooting",value: 7};
available = [FA, MA, HC, CH, BA, ZA, RA];

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

//Simulate a fight based on given fighter values
function versus(){
  var fighterChoice, opponentChoice;
  for (var i = 0; i < fighter.length; i++) {
    if(fighter[i].checked){
      fighterChoice = fighter[i].value;
      for (var j = 0; j < available.length; j++) {
        if(fighterChoice == available[j].name){
          fighterValue = available[j].value;
        }
      }
    }
  }
  for (var i = 0; i < opponent.length; i++) {
    if(opponent[i].checked){
      opponentChoice = opponent[i].value;
      for (var j = 0; j < available.length; j++) {
        if(opponentChoice == available[j].name){
          opponentValue = available[j].value;
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


