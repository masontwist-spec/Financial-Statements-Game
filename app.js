let currentMode = null;
let questions = [];
let currentIndex = 0;
let score = 0;
let locked = false;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getEls() {
  return {
    prompt: document.getElementById("question-prompt"),
    answerGrid: document.getElementById("answer-grid"),
    feedbackBox: document.getElementById("feedback-box"),
    nextBtn: document.getElementById("next-btn"),
    restartBtn: document.getElementById("restart-btn"),
    playAgainBtn: document.getElementById("play-again-btn"),
    progressText: document.getElementById("progress-text"),
    scoreText: document.getElementById("score-text"),
    difficultyPill: document.getElementById("difficulty-pill"),
    quizActiveView: document.getElementById("quiz-active-view"),
    quizCompleteView: document.getElementById("quiz-complete-view"),
    finalScoreText: document.getElementById("final-score-text")
  };
}

function initQuiz() {
  const mode = document.body.dataset.mode;
  if (!mode || !QUESTION_BANK[mode]) return;

  currentMode = mode;
  questions = shuffle(QUESTION_BANK[mode]);
  currentIndex = 0;
  score = 0;
  locked = false;

  const els = getEls();

  els.nextBtn.addEventListener("click", handleNextQuestion);
  els.restartBtn.addEventListener("click", restartQuiz);

  if (els.playAgainBtn) {
    els.playAgainBtn.addEventListener("click", restartQuiz);
  }

  renderQuestion();
}

function renderQuestion() {
  const els = getEls();
  const question = questions[currentIndex];
  locked = false;

  els.quizActiveView.classList.remove("hidden");
  els.quizCompleteView.classList.add("hidden");

  els.prompt.textContent = question.prompt;
  els.difficultyPill.textContent = question.difficulty;
  els.progressText.textContent = `${currentIndex + 1} / ${questions.length}`;
  els.scoreText.textContent = `${score}`;

  els.feedbackBox.className = "feedback-box";
  els.feedbackBox.textContent = "Choose an answer to see feedback.";

  els.nextBtn.disabled = true;
  els.answerGrid.innerHTML = "";

  question.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = option;

    btn.addEventListener("click", () => handleAnswer(option, btn));

    els.answerGrid.appendChild(btn);
  });
}

function handleAnswer(selectedOption, clickedButton) {
  if (locked) return;
  locked = true;

  const els = getEls();
  const question = questions[currentIndex];
  const buttons = Array.from(els.answerGrid.querySelectorAll(".answer-btn"));

  buttons.forEach(btn => {
    btn.disabled = true;

    if (btn.textContent === question.correct) {
      btn.classList.add("correct");
    }

    if (btn === clickedButton && selectedOption !== question.correct) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedOption === question.correct) {
    score += 1;
    els.feedbackBox.className = "feedback-box success";
    els.feedbackBox.innerHTML = `<strong>Correct.</strong> ${question.explanation}`;
  } else {
    els.feedbackBox.className = "feedback-box error";
    els.feedbackBox.innerHTML = `<strong>Not quite.</strong> Correct answer: <strong>${question.correct}</strong>. ${question.explanation}`;
  }

  els.scoreText.textContent = `${score}`;
  els.nextBtn.disabled = false;
}

function handleNextQuestion() {
  currentIndex += 1;

  if (currentIndex >= questions.length) {
    showCompletion();
    return;
  }

  renderQuestion();
}

function showCompletion() {
  const els = getEls();

  els.quizActiveView.classList.add("hidden");
  els.quizCompleteView.classList.remove("hidden");
  els.finalScoreText.textContent = `You scored ${score} out of ${questions.length}.`;
  els.progressText.textContent = `${questions.length} / ${questions.length}`;
  els.scoreText.textContent = `${score}`;
}

function restartQuiz() {
  questions = shuffle(QUESTION_BANK[currentMode]);
  currentIndex = 0;
  score = 0;
  locked = false;
  renderQuestion();
}

document.addEventListener("DOMContentLoaded", initQuiz);
