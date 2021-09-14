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
var answerList = document.createElement("ul");
// create buttons for answers
var answerBtnA = document.createElement("button");
var answerBtnB = document.createElement("button");
var answerBtnC = document.createElement("button");
var answerBtnD = document.createElement("button");
// add text for answers
var answerTextA = document.createElement("li");
var answerTextB = document.createElement("li");
var answerTextC = document.createElement("li");
var answerTextD = document.createElement("li");

// creates start of quiz on startBtn 'click'
startBtn.addEventListener("click", function() {
  countdown();
  h4Tags.textContent = "Question 1";
  questionText.textContent = "Is this really a test question?";
  answerTextA.textContent = "This is answer A";
  answerTextB.textContent = "This is answer B";
  answerTextC.textContent = "This is answer C";
  answerTextD.textContent = "This is answer D";

  startBtn.setAttribute("style", "display: none");
  answerList.setAttribute("style", "display: flex; flex-direction: column; align-items: center");
  answerTextA.setAttribute("style", "display: flex; flex-direction: row-reverse; align-items: center")
  answerTextB.setAttribute("style", "display: flex; flex-direction: row-reverse; align-items: center")
  answerTextC.setAttribute("style", "display: flex; flex-direction: row-reverse; align-items: center")
  answerTextD.setAttribute("style", "display: flex; flex-direction: row-reverse; align-items: center")
  
  cardContents.appendChild(h4Tags);
  cardContents.appendChild(questionText);
  cardContents.appendChild(answerList);
  answerTextA.appendChild(answerBtnA);
  answerList.appendChild(answerTextA);
  answerTextB.appendChild(answerBtnB);
  answerList.appendChild(answerTextB);
  answerTextC.appendChild(answerBtnC);
  answerList.appendChild(answerTextC);
  answerTextD.appendChild(answerBtnD);
  answerList.appendChild(answerTextD);
});

//make an array for all of our questions so we can iterate when the page loads next question
//make the questions objescts so we can change the text for the question and the answers (.value for content of key)
//when user clicks an answer btn, the question changes to the next question in the array (++)
//if the answer is incorrect, subtract 10 seconds from the countdown.

var questions = [question1, question2, question3, question4, question5];

var question1 = {
  questionText: "Is this a question?",
  answerList: ["answer A", "answer B", "answer C", "answer D"],
  correctAnswer: "answer A"
}

var question2 = {
  questionText: "Is this a question?",
  answerList: ["answer A", "answer B", "answer C", "answer D"],
  correctAnswer: "answer A"
}

var question3 = {
  questionText: "Is this a question?",
  answerList: ["answer A", "answer B", "answer C", "answer D"],
  correctAnswer: "answer A"
}

var question4 = {
  questionText: "Is this a question?",
  answerList: ["answer A", "answer B", "answer C", "answer D"],
  correctAnswer: "answer A"
}

var question5 = {
  questionText: "Is this a question?",
  answerList: ["answer A", "answer B", "answer C", "answer D"],
  correctAnswer: "answer A"
}


// creates timer and counts down from 60 seconds 
var timeLeft = 60;
var timer = document.createElement("p")

function countdown() {
  var timeInterval = setInterval(function() {
        
    timer.textContent = timeLeft;
  
    timer.setAttribute("style", "position: absolute; top: 25px; right: 30px")
  
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

// creates end of game message
function displayMessage() {
  cardContents.textContent = "Time's up!";
}