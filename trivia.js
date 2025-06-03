const questions = [
  {
    question: "Which planet has the longest day compared to its year?",
    answers: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctIndex: 0
  },
  {
    question: "What is the powerhouse of the cell?",
    answers: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
    correctIndex: 2
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    answers: ["Spanish", "Portuguese", "French", "Italian"],
    correctIndex: 1
  },
  {
    question: "What is the capital city of Canada?",
    answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    correctIndex: 3
  },
  {
    question: "In computing, what does HTML stand for?",
    answers: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language","Home Tool Markup Language"],
    correctIndex: 0
  }
];

var username = JSON.parse(localStorage.getItem("currentUser")) || "User";
var user_balance = JSON.parse(localStorage.getItem(`${username}_balance`)) || 0;
var darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

if (darkMode) 
    document.body.classList.add("dark-mode");

let earnedCash = 0;
let hasAnswered = false;
let questionIndex = 0;
let askedQuestions = [];
let currentQuestion = null;
let answerLetter = "A";
let questionRound = 0;

const questionText = document.querySelector(".question-text");
const resultMsg = document.querySelector(".result-msg");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const goBackHomeBtn = document.querySelector(".go-back-home-btn");



goBackHomeBtn.addEventListener("click", ()=> {
    window.location.href = "home.html";
});

function showQuestion(index) {
    hasAnswered = false;
    let i = 0;
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random()*questions.length);
    } while (askedQuestions.includes(randomIndex));

    askedQuestions.push(randomIndex);
    currentQuestion = questions[randomIndex];
    questionText.textContent = currentQuestion.question;
    resultMsg.style.display = "none";
    answerBtns.forEach(answer => {
            answer.textContent = `${String.fromCharCode(65 + i)}. ${currentQuestion.answers[i]}`;
            i++;
    });
    enableButtons();
}

answerBtns.forEach(answer => {
    answer.addEventListener("click", ()=> {
        if (hasAnswered) return;
        hasAnswered = true;
        const selectedIndex = parseInt(answer.getAttribute("data-index"));
        if (selectedIndex == currentQuestion.correctIndex) {
            resultMsg.style.color = "greenyellow";
            resultMsg.style.display = "block";
            resultMsg.textContent = "Answer is Correct!";
            earnedCash += 5;
            disableButtons();
        }
        else {
            resultMsg.style.color = "red";
            resultMsg.style.display = "block";
            resultMsg.textContent = "Answer is Incorrect.";
            disableButtons();
        }
    });
});

showQuestion(questionIndex); 

nextQuestionBtn.addEventListener("click", () => {
    showQuestion(questionIndex);
    questionIndex++;
    if (questionRound == 1) {
        nextQuestionBtn.textContent = "Exit Game";
    }
    if (questionRound == 2) {
        localStorage.setItem(`${username}_balance`, user_balance + earnedCash);
        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = "home.html";
        }, 100);
    }
        questionRound++;
});

function disableButtons() {
    answerBtns.forEach(btn => {
        btn.disabled = true;
    });
}

function enableButtons() {
    answerBtns.forEach(btn => {
       btn.disabled = false; 
    });
}
