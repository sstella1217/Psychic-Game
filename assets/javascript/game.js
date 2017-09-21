//computer randomly sections a letter
var compLetter = ['a','b','c','d','e','f','g',
				  'h','i','j','k','l','m','o',
				  'p','q','r','s','t','u','v',
				  'w','x','y','z'];

var wins = 0;
var losses = 0;
var moves = 10;	



 

 document.onkeyup = function(event) {

  if (moves > 0) {
      // User key pressed
      var userGuess = event.key;
      userGuess = userGuess.toLowerCase();

  //if (userGuess === compLetter){


      // Computers Letter
      var computerGuess = compLetter[Math.floor(Math.random() * compLetter.length)];

      
      document.getElementById("userGuessElement").innerHTML += userGuess;
      	      

      if (userGuess === computerGuess){
      	wins ++
      	alert("You Got It");
            	
      }
      
      else {
      	losses ++
      	moves --
            alert("Sorry Try Again");
	    }
      
       
       document.getElementById("winsElement").innerHTML = wins;
       document.getElementById("lossesElement").innerHTML = losses; 
       document.getElementById("movesElement").innerHTML = moves;     
       
  }
  
      else {
      alert("Game Over, Reload to Start Again");
      }
   //}
  };    
      

      
    



