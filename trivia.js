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
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctIndex: 1
  },
  {
    question: "Which continent is the largest by land area?",
    answers: ["Africa", "Asia", "Europe", "North America"],
    correctIndex: 1
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Charles Dickens"],
    correctIndex: 1
  },
  {
    question: "Which organ is responsible for pumping blood through the body?",
    answers: ["Brain", "Liver", "Heart", "Kidneys"],
    correctIndex: 2
  },
  {
    question: "What is the boiling point of water in Celsius?",
    answers: ["90°C", "100°C", "110°C", "120°C"],
    correctIndex: 1
  },
  {
    question: "Which planet is closest to the sun?",
    answers: ["Earth", "Mars", "Venus", "Mercury"],
    correctIndex: 3
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Osmium", "Oxygen", "Oxide", "Oganesson"],
    correctIndex: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Van Gogh"],
    correctIndex: 1
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic", "Arctic", "Indian", "Pacific"],
    correctIndex: 3
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: ["K2", "Everest", "Kangchenjunga", "Makalu"],
    correctIndex: 1
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: ["China", "Japan", "South Korea", "Thailand"],
    correctIndex: 1
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: ["Tomato", "Onion", "Avocado", "Cucumber"],
    correctIndex: 2
  },
  {
    question: "How many continents are there?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 2
  },
  {
    question: "What does the 'www' stand for in a website browser?",
    answers: ["World Wide Web", "Web World Wide", "Wide Web World", "World Web Window"],
    correctIndex: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Jupiter", "Mars", "Saturn", "Neptune"],
    correctIndex: 1
  },
  {
    question: "How many degrees are in a right angle?",
    answers: ["90", "180", "45", "360"],
    correctIndex: 0
  },
  {
    question: "Which country has the most people?",
    answers: ["USA", "China", "India", "Indonesia"],
    correctIndex: 2
  },
  {
    question: "What is H2O commonly known as?",
    answers: ["Salt", "Water", "Hydrogen Peroxide", "Ice"],
    correctIndex: 1
  },
  {
    question: "Which bird is known for its ability to mimic human speech?",
    answers: ["Crow", "Sparrow", "Parrot", "Pigeon"],
    correctIndex: 2
  },
  {
    question: "Which gas is most abundant in Earth’s atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    correctIndex: 3
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctIndex: 1
  },
  {
    question: "Which sport is known as 'the king of sports'?",
    answers: ["Basketball", "Tennis", "Soccer", "Baseball"],
    correctIndex: 2
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctIndex: 2
  },
  {
    question: "How many legs does a spider have?",
    answers: ["6", "8", "10", "12"],
    correctIndex: 1
  },
  {
    question: "Who invented the telephone?",
    answers: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"],
    correctIndex: 2
  },
  {
    question: "Which is the smallest prime number?",
    answers: ["0", "1", "2", "3"],
    correctIndex: 2
  },
  {
    question: "What is the name of the longest river in the world?",
    answers: ["Amazon", "Yangtze", "Nile", "Mississippi"],
    correctIndex: 2
  },
  {
    question: "Which blood type is known as the universal donor?",
    answers: ["A", "B", "O-", "AB+"],
    correctIndex: 2
  },
  {
    question: "Which instrument has 88 keys?",
    answers: ["Violin", "Flute", "Piano", "Guitar"],
    correctIndex: 2
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    answers: ["Brazil", "China", "UK", "Russia"],
    correctIndex: 0
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    answers: ["Tiger", "Elephant", "Gorilla", "Lion"],
    correctIndex: 3
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Iron", "Gold", "Diamond", "Quartz"],
    correctIndex: 2
  },
  {
    question: "What is the square root of 64?",
    answers: ["6", "7", "8", "9"],
    correctIndex: 2
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: ["Aluminum", "Mercury", "Zinc", "Iron"],
    correctIndex: 1
  },
  {
    question: "Which country is shaped like a boot?",
    answers: ["France", "Greece", "Italy", "Spain"],
    correctIndex: 2
  },
  {
    question: "What is the tallest animal in the world?",
    answers: ["Elephant", "Giraffe", "Horse", "Ostrich"],
    correctIndex: 1
  },
  {
    question: "Which month has 28 days in common years?",
    answers: ["January", "February", "April", "June"],
    correctIndex: 1
  },
  {
    question: "How many players are on a soccer team on the field?",
    answers: ["9", "10", "11", "12"],
    correctIndex: 2
  },
  {
    question: "What color do you get by mixing red and blue?",
    answers: ["Purple", "Orange", "Brown", "Green"],
    correctIndex: 0
  },
  {
    question: "Who discovered gravity?",
    answers: ["Albert Einstein", "Isaac Newton", "Galileo", "Nikola Tesla"],
    correctIndex: 1
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
