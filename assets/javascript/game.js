//computer randomly sections a letter
var compLetter = ['a','b','c','d','e','f','g',
				  'h','i','j','k','l','m','o',
				  'p','q','r','s','t','u','v',
				  'w','x','y','z'];

var wins = 0;
var losses = 0;				  

 document.onkeyup = function(event) {

      // Computers Letter
      var computerGuess = compLetter[Math.floor(Math.random() * compLetter.length)];

      // User key pressed
      var userGuess = event.key;

      alert(userGuess);
      alert(computerGuess);

      if (losses === '10'){
      	 alert("Game Over");
      }

      if (userGuess === computerGuess){
      	wins ++
      	alert("You Got it Right");
      	
      }
      else {
      	losses ++
      	alert("try again");
      	
      	}
      
      
    
      //document.getElementById("userGuessElement").innerHTML = userGuess;
	  //document.getElementById("computerGuessElement").innerHTML = computerGuess;
	  document.getElementById("winsElement").innerHTML = wins;
	  document.getElementById("lossesElement").innerHTML = losses;
     
    };
    


