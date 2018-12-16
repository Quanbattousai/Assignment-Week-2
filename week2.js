let minNumber = 1;
let maxNumber = 50;
let secretNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
let guessCount = 0;
let userGuess;


function newGame() {
	userGuess = "";
  secretNumber = Math.floor(Math.random() * (maxNumber - minNumber +1) + minNumber);
	guessCount = 0;
  document.getElementById("historyList").innerHTML = "";
  document.getElementById("message").innerHTML = "Congrats!";
  document.getElementById("message").style.background = "green";
  document.getElementById("message").style.color = "white";
  document.getElementById("guessButton").innerHTML = "New game";
  
	}
  
function userGuessed() {
	document.getElementById("guessButton").innerHTML = "Guess";
  let userGuess = document.getElementById('number').value;
	if (userGuess.length == 0) {
  document.getElementById("message").innerHTML = "Please guess something.";
  } else {
  	checkGuess();
   	}
  }
  
  function checkGuess() {
  let userGuess = document.getElementById('number').value;
  if (userGuess < secretNumber) {
    	document.getElementById("message").innerHTML = "Your guess is too low. Try again!";
      document.getElementById("message").style.background = "red"; 
      document.getElementById("message").style.color = "white";
      document.getElementById("historyList").innerHTML += userGuess + " (too low) <br>";
      document.getElementByType("text").innerHTML = "";
      guessCount = guessCount + 1;
      checkGuessCount();
			
		} else if (userGuess > secretNumber) {
			document.getElementById("message").innerHTML = "Your guess is too high. Try again!";
      document.getElementById("message").style.background = "red";
      document.getElementById("message").style.color = "white";
      document.getElementById("historyList").innerHTML += userGuess + " (too high) <br>";	
      document.getElementByType("text").innerHTML = "";
      guessCount = guessCount + 1;
      checkGuessCount();
  
  } else {
			newGame();
    }
    }
    
  function checkGuessCount() {    
      if (document.getElementById("historyList").length == 10) {
      document.getElementById("text").disabled = true;
      document.getElementById("message").innerHTML = "Gameover";
      }
      }
      
      document.getElementById("guessButton").addEventListener("click", userGuessed);
	
