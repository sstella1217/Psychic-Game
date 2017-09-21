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


      // Computers Letter
      var computerGuess = compLetter[Math.floor(Math.random() * compLetter.length)];

      
      document.getElementById("userGuessElement").innerHTML = userGuess;
      //document.getElementById("computerGuessElement").innerHTML = computerGuess;
   
      //alert(userGuess);
      //alert(computerGuess);    
      	      

      if (userGuess === computerGuess){
      	wins ++
        moves --
      	alert("You Got it Right");
            	
      }
      
      else {
      	losses ++
      	moves --
            alert("try again");
	    }
      
       
       document.getElementById("winsElement").innerHTML = wins;
       document.getElementById("lossesElement").innerHTML = losses; 
       document.getElementById("movesElement").innerHTML = moves;     
       
      }
      else {
      console.log("Game Over");
      }
  };    
      

      //document.getElementById("userGuessElement").innerHTML = userGuess;
	  //document.getElementById("computerGuessElement").innerHTML = computerGuess;
	 
    



