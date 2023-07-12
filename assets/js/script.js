var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var timer = document.getElementById("time-left");
var userScoreDisplay = document.getElementById("score");

var secondsLeft = 100;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  var userScore = 0;
  userScoreDisplay.textContent = "Current Score: " + userScore;
  setTime();
}
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time Left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function setQuestion() {}

var questions = [
  {
    question: "Who is Luke Skywalker's father?",
    answers: [
      { text: "Emperor Palpatine", correct: false },
      { text: "Darth Vader", correct: true },
      { text: "Obi-Wan Kenobi", correct: false },
      { text: "Jar Jar Binks", correct: false },
    ],
  },
  {
    question: "What color is a Sith's lightsaber?",
    answers: [
      { text: "Blue", correct: false },
      { text: "Purple", correct: false },
      { text: "Red", correct: true },
      { text: "Green", correct: false },
    ],
  },
  {
    question: "Where is Anakin SKywalker from?",
    answers: [
      { text: "Tattoine", correct: true },
      { text: "Naboo", correct: false },
      { text: "Jakku", correct: false },
      { text: "Coruscant", correct: false },
    ],
  },
];
