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
var questionTitle = document.querySelector("#title");
var questionText = document.querySelector("#question-text");
var answerList = document.createElement("ul");

// add text for answers
var answerTextA = document.createElement("li");
var answerTextB = document.createElement("li");
var answerTextC = document.createElement("li");
var answerTextD = document.createElement("li");
var currentQuestion = 0;

//make the questions objects so we can change the text for the question and the answers (.value for content of key)
//make an array for all of our questions so we can iterate when the page loads next question
var questions = [
  {questionNumber: "Question 1",
  questionText: "The condition in an if/else statement is enclosed within _____. ",
  answerList: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
  correctAnswer: "Curly Brackets"},
  {questionNumber: "Question 2",
  questionText: "Arrays in JavaScript can be used to store _____.",
  answerList: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
  correctAnswer: "All of the Above"},
  {questionNumber: "Question 3",
  questionText: "String values must be enclosed within _____ when being assigned to variables.",
  answerList: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
  correctAnswer: "Quotes"},
  {questionNumber: "Question 4",
  questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answerList: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
  correctAnswer: "Console.log"},
  {questionNumber: "Question 5",
  questionText: "Commonly used data types DO NOT include:",
  answerList: ["Strings", "Booleans", "Alerts", "Numbers"],
  correctAnswer: "Alerts"}
];


answerList.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button")) {
    if (currentQuestion < questions.length) {
      currentQuestion++;
      console.log(currentQuestion);
    } else {
      alert("end of quiz");
    }
  }
});

// creates start of quiz on startBtn 'click'
// when the quiz starts, have  the first question (questions[0]) display on the screen
//when user clicks an answer btn, the question changes to the next question in the array (++)
//if the answer is incorrect, subtract 10 seconds from the countdown.

startBtn.addEventListener("click", startQuiz);

function startQuiz(event) {
  event.preventDefault();
  countdown();
  startBtn.setAttribute("style", "display: none");
  
  // create buttons for answers
  var answerBtnA = document.createElement("button");
  answerBtnA.textContent = "A";
  var answerBtnB = document.createElement("button");
  answerBtnB.textContent = "B";
  var answerBtnC = document.createElement("button");
  answerBtnC.textContent = "C";
  var answerBtnD = document.createElement("button");
  answerBtnD.textContent = "D";
  
  //we want these question1's to be question[i] so we can change through the questions
  questionTitle.textContent = questions[currentQuestion].questionNumber;
  questionText.textContent = questions[currentQuestion].questionText;
  answerTextA.textContent = questions[currentQuestion].answerList[0];
  answerTextB.textContent = questions[currentQuestion].answerList[1];
  answerTextC.textContent = questions[currentQuestion].answerList[2];
  answerTextD.textContent = questions[currentQuestion].answerList[3];
 
  cardContents.appendChild(questionTitle);
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
  
};


function nextQuestion() {
  // If there are no more questions, ends the quiz
  if (currentQuestion === questions.length || endQuiz) {
      if (timeLeft > 0) {
          score = timeLeft;
      } else {
          score = 0;
      }
      quizOver();
      return;
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