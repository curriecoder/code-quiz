/* WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and my score --> */


var body = document.body;
var cardContents = document.querySelector("#card-contents")
var startBtn = document.querySelector("#start");
var h4Tags = document.querySelector("#title");
var questionText = document.querySelector("#question-text");


startBtn.addEventListener("click", function() {
  h4Tags.textContent = "Question 1";
  cardContents.appendChild(h4Tags);
  questionText.textContent = "Is this really a test question?";
  cardContents.appendChild(questionText);
  startBtn.setAttribute("style", "display: none");
  countdown();
});

var timeLeft = 60;
var timer = document.createElement("p")

function countdown() {
  var timeInterval = setInterval(function() {
        
    timer.textContent = timeLeft;
  
    timer.setAttribute("style", "position: absolute; top: 25px; right: 25px")
  
    body.appendChild(timer);

    if (timeLeft > 1) {
      timer.textContent = "Time remaining: " + timeLeft + " seconds";
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = "Time remaining: " + timeLeft + " second";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  cardContents.textContent = "Time's up!"
}