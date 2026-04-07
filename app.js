let currentMode = null;
let questions = [];
let selectedDifficulty = "All";
let currentIndex = 0;
let score = 0;
let locked = false;
const BEST_SCORE_PREFIX = "balance_";

function getBestScoreKey(mode) {
  return `${BEST_SCORE_PREFIX}${mode}_best`;
}

function saveBestScore(mode, nextScore, totalQuestions) {
  if (!mode || !Number.isFinite(nextScore) || !Number.isFinite(totalQuestions)) return;

  const key = getBestScoreKey(mode);
  const existingRaw = localStorage.getItem(key);

  try {
    const existing = existingRaw ? JSON.parse(existingRaw) : null;
    if (existing && Number.isFinite(existing.score) && existing.score >= nextScore) {
      return;
    }
  } catch (_error) {
    // Ignore malformed localStorage data and overwrite it below.
  }

  localStorage.setItem(key, JSON.stringify({
    score: nextScore,
    total: totalQuestions
  }));
}

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
    filterButtons: Array.from(document.querySelectorAll("[data-difficulty-filter]")),
    difficultyPill: document.getElementById("difficulty-pill"),
    quizActiveView: document.getElementById("quiz-active-view"),
    quizCompleteView: document.getElementById("quiz-complete-view"),
    finalScoreText: document.getElementById("final-score-text"),
    progressFill: document.getElementById("progress-fill"),
    progressPercentText: document.getElementById("progress-percent-text"),
    progressNote: document.getElementById("progress-note")
  };
}

function updateProgressUI(els, currentStep, totalSteps, noteOverride = "") {
  const safeTotal = Number.isFinite(totalSteps) ? totalSteps : 0;
  const safeCurrent = Number.isFinite(currentStep) ? currentStep : 0;
  const clampedCurrent = Math.min(Math.max(safeCurrent, 0), safeTotal);
  const percent = safeTotal > 0 ? Math.round((clampedCurrent / safeTotal) * 100) : 0;

  if (els.progressFill) {
    els.progressFill.style.width = `${percent}%`;
  }

  if (els.progressPercentText) {
    els.progressPercentText.textContent = `${percent}%`;
  }

  if (els.progressNote) {
    if (noteOverride) {
      els.progressNote.textContent = noteOverride;
    } else if (!safeTotal) {
      els.progressNote.textContent = "No questions are available in this filter yet.";
    } else if (clampedCurrent >= safeTotal) {
      els.progressNote.textContent = "Section complete. Review your score or play again.";
    } else {
      els.progressNote.textContent = `${safeTotal - clampedCurrent} question${safeTotal - clampedCurrent === 1 ? "" : "s"} remaining in this set.`;
    }
  }
}

function getFilteredQuestions() {
  const modeQuestions = QUESTION_BANK[currentMode] || [];

  if (selectedDifficulty === "All") {
    return shuffle(modeQuestions);
  }

  return shuffle(
    modeQuestions.filter(question => question.difficulty === selectedDifficulty)
  );
}

function setDifficultyFilterState(buttons) {
  buttons.forEach(button => {
    const isActive = button.dataset.difficultyFilter === selectedDifficulty;
    button.classList.toggle("active", isActive);

    if (isActive) {
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }
  });
}

function applyDifficultyFilter(nextDifficulty) {
  selectedDifficulty = nextDifficulty;
  questions = getFilteredQuestions();
  currentIndex = 0;
  score = 0;
  locked = false;

  const els = getEls();
  setDifficultyFilterState(els.filterButtons);

  renderQuestion();
}

function initQuiz() {
  const mode = document.body.dataset.mode;
  if (!mode || !QUESTION_BANK[mode]) return;

  currentMode = mode;
  selectedDifficulty = "All";

  const els = getEls();

  els.nextBtn.addEventListener("click", handleNextQuestion);
  els.restartBtn.addEventListener("click", restartQuiz);

  if (els.playAgainBtn) {
    els.playAgainBtn.addEventListener("click", restartQuiz);
  }

  els.filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const nextDifficulty = button.dataset.difficultyFilter;
      if (!nextDifficulty || nextDifficulty === selectedDifficulty) return;
      applyDifficultyFilter(nextDifficulty);
    });
  });

  applyDifficultyFilter(selectedDifficulty);
}

function renderQuestion() {
  const els = getEls();
  const totalQuestions = questions.length;

  if (!totalQuestions) {
    locked = true;
    els.quizActiveView.classList.remove("hidden");
    els.quizCompleteView.classList.add("hidden");
    els.prompt.textContent = "No questions match that difficulty yet.";
    els.difficultyPill.textContent = selectedDifficulty;
    els.progressText.textContent = `0 / 0`;
    els.scoreText.textContent = `${score}`;
    els.feedbackBox.className = "feedback-box";
    els.feedbackBox.textContent = "Choose another difficulty filter to keep practicing.";
    els.nextBtn.disabled = true;
    els.answerGrid.innerHTML = "";
    updateProgressUI(els, 0, 0);
    return;
  }

  const question = questions[currentIndex];
  locked = false;

  els.quizActiveView.classList.remove("hidden");
  els.quizCompleteView.classList.add("hidden");

  els.prompt.textContent = question.prompt;
  els.difficultyPill.textContent = question.difficulty;
  els.progressText.textContent = `${currentIndex + 1} / ${questions.length}`;
  els.scoreText.textContent = `${score}`;
  updateProgressUI(els, currentIndex + 1, questions.length);

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
  updateProgressUI(els, questions.length, questions.length);
  saveBestScore(currentMode, score, questions.length);
}

function restartQuiz() {
  questions = getFilteredQuestions();
  currentIndex = 0;
  score = 0;
  locked = false;
  renderQuestion();
}

document.addEventListener("DOMContentLoaded", initQuiz);
