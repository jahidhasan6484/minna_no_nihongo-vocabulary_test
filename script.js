let lessons = {
  lesson1: [
    {
      question: "ありがとう",
      correctAnswer: "ধন্যবাদ",
      options: ["ধন্যবাদ", "হ্যালো", "বিদায়", "সুপ্রভাত"],
    },
    {
      question: "こんにちは",
      correctAnswer: "হ্যালো",
      options: ["ধন্যবাদ", "হ্যালো", "বিদায়", "সুপ্রভাত"],
    },
    {
      question: "さようなら",
      correctAnswer: "বিদায়",
      options: ["ধন্যবাদ", "হ্যালো", "বিদায়", "সুপ্রভাত"],
    },
  ],
  lesson2: [
    {
      question: "おはよう",
      correctAnswer: "সুপ্রভাত",
      options: ["ধন্যবাদ", "হ্যালো", "বিদায়", "সুপ্রভাত"],
    },
    {
      question: "すみません",
      correctAnswer: "দুঃখিত",
      options: ["ধন্যবাদ", "দুঃখিত", "বিদায়", "সুপ্রভাত"],
    },
    {
      question: "お願いします",
      correctAnswer: "দয়া করে",
      options: ["ধন্যবাদ", "হ্যালো", "বিদায়", "দয়া করে"],
    },
  ],
  lesson3: [
    {
      question: "お元気ですか",
      correctAnswer: "আপনি কেমন আছেন?",
      options: ["আপনি কেমন আছেন?", "হ্যালো", "ধন্যবাদ", "বিদায়"],
    },
    {
      question: "はい",
      correctAnswer: "হ্যাঁ",
      options: ["হ্যাঁ", "না", "সুপ্রভাত", "ধন্যবাদ"],
    },
    {
      question: "いいえ",
      correctAnswer: "না",
      options: ["হ্যাঁ", "না", "বিদায়", "সুপ্রভাত"],
    },
  ],
};

// Flattened set for combined lessons
lessons.all = [...lessons.lesson1, ...lessons.lesson2, ...lessons.lesson3];

let currentLesson = [];
let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function initializeQuiz(lesson) {
  currentLesson = lesson;
  shuffleArray(currentLesson);
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("lesson-selection").style.display = "none";
  document.getElementById("question-container").style.display = "flex";
  document.getElementById("result").style.display = "none";
  document.getElementById("back-to-lesson").style.display = "block";
  document.getElementById("question-count").style.display = "block";
  showQuestion();
}

function loadLesson(lesson) {
  initializeQuiz(lessons[lesson]);
}

function loadAll() {
  initializeQuiz(lessons.all);
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const questionCount = document.getElementById("question-count");

  if (currentQuestionIndex < currentLesson.length) {
    const questionData = currentLesson[currentQuestionIndex];
    questionElement.textContent = `${questionData.question}`;
    questionCount.textContent = `${currentQuestionIndex + 1} / ${
      currentLesson.length
    }`;

    optionsContainer.innerHTML = "";
    questionData.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  } else {
    finishQuiz();
  }
}

function checkAnswer(selectedAnswer) {
  if (selectedAnswer === currentLesson[currentQuestionIndex].correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  showQuestion();
}

function finishQuiz() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById(
    "result"
  ).textContent = `Your score: ${score} / ${currentLesson.length}`;
  document.getElementById("result").style.display = "block";
  document.getElementById("question-count").style.display = "none";
}

function backToLesson() {
  document.getElementById("lesson-selection").style.display = "block";
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("question-count").style.display = "none";
  document.getElementById("back-to-lesson").style.display = "none";
}
