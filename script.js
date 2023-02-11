/*const FA = {
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
};*/

var fighter = document.getElementsByName('FighterSelect');
var opponent = document.getElementsByName('OpponentSelect');
var players = [];

//Display the user's choice in an alert box when clicking the button
function collect1() {
  for (var i = 0; i < fighter.length; i++){
    if (fighter[i].checked) {
      alert("You have already picked " + fighter[i].value);
    }
  }
}

//Collect in the console what the user chose
function collect2() {
  for (var i = 0; i < fighter.length; i++){
    if (fighter[i].checked) {
      document.cookie = fighter[i].value;
      console.log(document.cookie);
    }
  }
}

function getCollect2(){
  const cDecoded = decodeURIComponent(document.cookie);
  console.log(cDecoded);
}

//Display the user's choice on screen 
function displayFighter(){
  for (var i = 0; i < fighter.length; i++) {
    if(fighter[i].checked){
      document.getElementById("P1C").innerHTML = fighter[i].value;
    }
  }
}

function displayOpponent(){
  for (var i = 0; i < opponent.length; i++) {
    if(opponent[i].checked){
      document.getElementById("P2C").innerHTML = opponent[i].value;
    }
  }
}

//Determine who won the fight
function whosBetter(a, b){
  return a.value > b.value 
    ? a.name + " wins!!!" 
    : b.value > a.value  
    ? b.name + " wins!!!" 
    : "Draw!!";
}
