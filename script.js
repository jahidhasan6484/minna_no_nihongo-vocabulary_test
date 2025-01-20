let lessons = {
  lesson1: [
    {
      question: "わたし",
      correctAnswer: "আমি",
      options: ["আমি", "আপনি", "তিনি", "ওরা"],
    },
    {
      question: "あなた",
      correctAnswer: "আপনি",
      options: ["তুমি", "আপনি", "আমি", "তিনি"],
    },
    {
      question: "あのひと",
      correctAnswer: "সেই লোক",
      options: ["তুমি", "সেই লোক", "আমি", "আপনি"],
    },
    {
      question: "かいしゃいん",
      correctAnswer: "কর্মচারী",
      options: ["ব্যবসায়ী", "কর্মচারী", "ডাক্তার", "অধ্যাপক"],
    },
    {
      question: "ぎんこういん",
      correctAnswer: "ব্যাংক কর্মকর্তা",
      options: ["ব্যাংক কর্মকর্তা", "কর্মচারী", "গবেষক", "শিক্ষক"],
    },
    {
      question: "びょういん",
      correctAnswer: "হাসপাতাল",
      options: ["হোটেল", "হাসপাতাল", "বিমানবন্দর", "স্কুল"],
    },
    {
      question: "だいがく",
      correctAnswer: "বিশ্ববিদ্যালয়",
      options: ["স্কুল", "বিশ্ববিদ্যালয়", "কলেজ", "হাসপাতাল"],
    },
    {
      question: "しつれいですが",
      correctAnswer: "মাফ করবেন",
      options: ["মাফ করবেন", "অনুগ্রহ", "হ্যাঁ", "না"],
    },
    {
      question: "どうぞよろしく",
      correctAnswer: "অনুগ্রহপূর্বক",
      options: ["অভিনন্দন", "ধন্যবাদ", "অনুগ্রহপূর্বক", "বিদায়"],
    },
  ],
  lesson2: [
    {
      question: "これ",
      correctAnswer: "এটি",
      options: ["এটি", "ওটি", "সেটি", "ওখানে"],
    },
    {
      question: "それ",
      correctAnswer: "সেটি",
      options: ["এটি", "সেটি", "ওটি", "কোথায়"],
    },
    {
      question: "あれ",
      correctAnswer: "ওটি",
      options: ["এটি", "ওটি", "সেটি", "এখানে"],
    },
    {
      question: "ほん",
      correctAnswer: "বই",
      options: ["বই", "পত্রিকা", "কলম", "খাতা"],
    },
    {
      question: "かぎ",
      correctAnswer: "চাবি",
      options: ["বই", "চাবি", "মোবাইল", "গাড়ি"],
    },
    {
      question: "くるま",
      correctAnswer: "গাড়ি",
      options: ["গাড়ি", "সাইকেল", "বাস", "ট্রেন"],
    },
    {
      question: "いす",
      correctAnswer: "চেয়ার",
      options: ["চেয়ার", "টেবিল", "বিছানা", "দরজা"],
    },
    {
      question: "おみやげ",
      correctAnswer: "উপহার",
      options: ["উপহার", "খেলনা", "বই", "পোশাক"],
    },
  ],
  lesson3: [
    {
      question: "ここ",
      correctAnswer: "এখানে",
      options: ["এখানে", "সেখানে", "ওখানে", "কোথায়"],
    },
    {
      question: "そこ",
      correctAnswer: "সেখানে",
      options: ["এখানে", "সেখানে", "ওখানে", "কোথায়"],
    },
    {
      question: "あそこ",
      correctAnswer: "ওখানে",
      options: ["এখানে", "সেখানে", "ওখানে", "কোথায়"],
    },
    {
      question: "どこ",
      correctAnswer: "কোথায়",
      options: ["এখানে", "সেখানে", "ওখানে", "কোথায়"],
    },
    {
      question: "うけつけ",
      correctAnswer: "রিসেপশন",
      options: ["রিসেপশন", "অফিস", "লিফট", "হল"],
    },
    {
      question: "かいだん",
      correctAnswer: "সিঁড়ি",
      options: ["সিঁড়ি", "লিফট", "দরজা", "জানালা"],
    },
    {
      question: "うち",
      correctAnswer: "বাড়ি",
      options: ["বাড়ি", "অফিস", "রেস্টুরেন্ট", "স্কুল"],
    },
    {
      question: "しむしょ",
      correctAnswer: "অফিস",
      options: ["অফিস", "রিসেপশন", "ক্লাসরুম", "ক্লাব"],
    },
  ],
};

lessons.all = [...lessons.lesson1, ...lessons.lesson2, ...lessons.lesson3];

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
