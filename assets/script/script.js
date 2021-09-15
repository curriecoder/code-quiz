var questions = [
	{text: 'Commonly used data types DO NOT include:',
		answers: ['strings', 'booleans', 'alerts', 'numbers'],
		correct: 'alerts'},
	{text: 'The condition in an if / else statement is enclosed within _____.',
		answers: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
		correct: 'parentheses'},
	{text: 'Arrays in JavaScript can be used to store:',
		answers: ['numbers and strings', 'other arrays', 'booleans', 'all of these'],
		correct: 'all of these'},
	{text: 'String values must be enclosed within _____ and when being assigned to variables.',
		answers: ['commas', 'curly brackets', 'quotes', 'parentheses'],
		correct: 'quotes'},
	{text: 'A very useful tool used during development and debugging for printing content to the debugger is:',
		answers: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
		correct: 'console.log'}
];

var wrapper = document.querySelector('#wrapper');
var viewScores = document.querySelector('#view-scores')
var title = document.querySelector('#title');
var startBtnEl = document.querySelector('#start-button');
var results = document.querySelector('#results');
var timer = document.querySelector('#timer');
var userScore = document.querySelector('#your-score');
var userInput = document.querySelector('#user-input');
var displayScore = document.querySelector('#enter-score');
var submitBtn = document.querySelector('#submit');
var endQuiz = false;
var timeLeft = 60;
var score = 0;
var current = 0;
var highScores = [];
var shuffledQuestions = [];
var shuffledAnswers = [];


startBtnEl.addEventListener('click', startQuiz);

// Starts the quiz
function startQuiz(event) {
	event.preventDefault();
	title.setAttribute('style', 'display: none');
	viewScores.setAttribute('style', 'display: none');
	wrapper.setAttribute('style', 'display: inline-block');
	shuffledQuestions = shuffle(questions);
	countDown();
	runQuiz();
}

// Timer function ends quiz if time runs out
var countDown = function () {
	timer.textContent = "Time: " + timeLeft;
	var timerInterval = setInterval(function () {
		timeLeft--;
		if (timeLeft >= 0) {
			timer.textContent = "Time: " + timeLeft;
		}
		if (timeLeft === 0 || timeLeft < 0) {
			endQuiz = true;
			if (endQuiz) {
				quizOver();
			}
			clearInterval(timerInterval);
		}
	}, 1000);
}

// Used to shuffle questions and answers
function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var mix = Math.floor(Math.random() * (i + 1));
		[array[i], array[mix]] = [array[mix], array[i]];
	}
	return array;
}

function runQuiz() {
	// If there are no more questions, ends the quiz
	if (current === questions.length || endQuiz) {
		if (timeLeft > 0) {
			score = timeLeft;
		} else {
			score = 0;
		}
		quizOver();
		return;
	}
	
	// Decides which question is current and shuffles answer choices
	var currentQuestion = shuffledQuestions[current];
	shuffledAnswers = shuffle(currentQuestion.answers);
	
	// Dynamically creates and appends question text and empty ul to page
	var questionEl = document.createElement('h2');
	var answersEl = document.createElement('ul');
	questionEl.textContent = currentQuestion.text;
	wrapper.appendChild(questionEl);
	wrapper.appendChild(answersEl);
	
	// For each answer choice, creates a new li and appends them to the page
	for (var i = 0; i < shuffledAnswers.length; i++) {
		var choice = document.createElement('li');
		choice.textContent = shuffledAnswers[i];
		answersEl.appendChild(choice);
	}
}

wrapper.addEventListener('click', answerSelected);

// Decides if chosen answer is correct and adjusts time, then moves to next question
function answerSelected(event) {
	if (event.target.matches('li')) {
		if (event.target.textContent === shuffledQuestions[current].correct) {
			timeLeft += 10;
			results.textContent = 'Correct!';
			setTimeout(function () {
				results.textContent = '';
			}, 1000);
		} else {
			timeLeft -= 15;
			results.textContent = 'Wrong!';
			setTimeout(function () {
				results.textContent = '';
			}, 1000);
		}
		wrapper.innerHTML = '';
		current++;
		runQuiz();
	}

}

// Changes display to Enter Score input
function quizOver() {
	timer.setAttribute('style', 'display: none');
	wrapper.setAttribute('style', 'display: none');
	displayScore.setAttribute('style', 'display: inline-block');
	viewScores.setAttribute('style', 'display: inline-block');
	userScore.textContent = 'Final Score: ' + score;
	endQuiz = false;
}


// Saves score and input initials to local storage, alerts if no input
submitBtn.addEventListener('click', function (event) {
	event.preventDefault();

	if (localStorage.getItem('scores')) {
		highScores = JSON.parse(localStorage.getItem('scores'));
	}

	if (userInput.value) {
		var initials = userInput.value;
		var finalScore = {
			initials: initials,
			score: score
		};
		highScores.push(finalScore);
		localStorage.setItem('scores', JSON.stringify(highScores));
		location.href = 'highscores.html';
	} else {
		alert('Please enter your initials.');
	}
});
