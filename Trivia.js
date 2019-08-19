//variables
var points = 0;
var incorrect = 0;

var questionIndex = 0;

// The array of questions for the game.
    var questions = [
        { q: "Is communism better then capitlism?", a: "f"},
        { q: "Is Donald Trump going to win the 2020 election?", a: "t" },
        { q: "Is American the best country in the world?", a: "t" },
        { q: "Does the United States have the mightiest military force in the world?", a: "t" },
        { q: "Did the United States win WW2 in 1945?", a: "t" },
        ];

    
        // Function to render questions.
        function renderQuestion() {
          // If there are still more questions, render the next one.
          if (questionIndex <= (questions.length - 1)) {
            document.querySelector("#question").innerHTML = questions[questionIndex].q;
          }
          // If there aren't, render the end game screen.
          else {
            document.querySelector("#question").innerHTML = "Game Over!";
            document.querySelector("#points").innerHTML = "Final Score: " + score + " out of " + questions.length;
          }
        }
    
        // updates the win score
        function updatePoints() {
          document.querySelector("#points").innerHTML = "points: " + points;
        }
        //updates the loses score
        function updateIncorrect() {
          document.querySelector("#incorrect").innerHTML = "incorrect: " + incorrect;
        }
        //second section
    
        // Calling functions to start the game.
        renderQuestion();
        updatePoints();
        updateIncorrect();
    
        // When the user presses a key, it will run the following function...
        document.onkeyup = function(event) {
    
          // If there are no more questions, stop the function.
          if (questionIndex === questions.length) {
            return;
          }
    
          // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
          var userInput = event.key.toLowerCase();
    
          // Only run this code if "t" or "f" were pressed.
          if (userInput === "t", "f") {
    
            // If they guess the correct answer, increase and update score, alert them they got it right.
            if (userInput === questions[questionIndex].a) {
              alert("Correct!");
              wins++;
              updatePoints();   
    
            }
    
            // If wrong, alert them they are wrong.
            else {
              alert("Wrong!");
              loses--;        
              updateIncorrect();         
            }
            
            // Increment the questionIndex variable and call the renderQuestion function.
            questionIndex++;
            renderQuestion();
    
          }
    
        };