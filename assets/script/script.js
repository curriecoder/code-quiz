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


// var body = document.body;
// var h1 = document.createElement("h1");

// h1.textContent = "Testing";

// h1.setAttribute("style", "color: white");

// body.appendChild(h1);

var body = document.body;
var cardContents = document.querySelector("#card-contents")
var startBtn = document.querySelector("#start");
var h4Tags = document.querySelector("#title");
var text = document.querySelector("#question-text");

startBtn.addEventListener("click", function() {
  h4Tags.textContent = "Question 1";
  cardContents.appendChild(h4Tags);
  text.textContent = "Is this really a test question?";
  cardContents.appendChild(text);
  startBtn.setAttribute("style", "display: none");
});

