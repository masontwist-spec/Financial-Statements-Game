let buildMode = null;
let buildQuestions = [];
let buildIndex = 0;
let buildScore = 0;
let alreadyChecked = false;

function shuffleBuild(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatBuildNumber(value) {
  return Number(value).toLocaleString();
}

function parseUserNumber(value) {
  if (typeof value !== "string") return NaN;
  const cleaned = value.replace(/[$,\s]/g, "");
  if (cleaned === "") return NaN;
  return Number(cleaned);
}

function getBuildEls() {
  return {
    prompt: document.getElementById("build-prompt"),
    difficulty: document.getElementById("build-difficulty-pill"),
    statementCard: document.getElementById("build-statement-card"),
    feedback: document.getElementById("build-feedback-box"),
    progress: document.getElementById("build-progress-text"),
    score: document.getElementById("build-score-text"),
    checkBtn: document.getElementById("check-build-btn"),
    nextBtn: document.getElementById("next-build-btn"),
    restartBtn: document.getElementById("restart-build-btn"),
    activeView: document.getElementById("build-active-view"),
    completeView: document.getElementById("build-complete-view"),
    finalScore: document.getElementById("build-final-score-text"),
    playAgainBtn: document.getElementById("build-play-again-btn")
  };
}

function renderBuildQuestion() {
  const els = getBuildEls();
  const q = buildQuestions[buildIndex];
  alreadyChecked = false;

  els.activeView.classList.remove("hidden");
  els.completeView.classList.add("hidden");

  els.prompt.textContent = q.prompt;
  els.difficulty.textContent = q.difficulty;
  els.progress.textContent = `${buildIndex + 1} / ${buildQuestions.length}`;
  els.score.textContent = `${buildScore}`;
  els.feedback.className = "feedback-box";
  els.feedback.textContent = "Fill in the blank lines, then click Check Answer.";
  els.nextBtn.disabled = true;

  els.statementCard.innerHTML = `
    <div class="build-statement-header">
      <h3>Income Statement</h3>
      <p>Enter plain numbers. Commas are optional.</p>
    </div>
    <div class="build-lines">
      ${q.fields.map(field => {
        if (field.editable) {
          return `
            <div class="build-line">
              <label for="${field.key}">${field.label}</label>
              <input
                type="text"
                id="${field.key}"
                class="build-input"
                data-answer="${field.value}"
                placeholder="Enter amount"
                autocomplete="off"
              />
            </div>
          `;
        }

        return `
          <div class="build-line">
            <label>${field.label}</label>
            <div class="build-static-value">${formatBuildNumber(field.value)}</div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function checkBuildAnswer() {
  if (alreadyChecked) return;

  const els = getBuildEls();
  const inputs = Array.from(document.querySelectorAll(".build-input"));

  let correctCount = 0;
  let totalEditable = inputs.length;
  let allCorrect = true;
  let feedbackLines = [];

  inputs.forEach(input => {
    const expected = Number(input.dataset.answer);
    const actual = parseUserNumber(input.value);

    input.classList.remove("build-correct", "build-incorrect");

    if (!Number.isFinite(actual)) {
      allCorrect = false;
      input.classList.add("build-incorrect");
      feedbackLines.push(`${input.id}: enter a number.`);
      return;
    }

    if (actual === expected) {
      correctCount += 1;
      input.classList.add("build-correct");
    } else {
      allCorrect = false;
      input.classList.add("build-incorrect");
      feedbackLines.push(`${input.previousElementSibling.textContent}: correct answer is ${formatBuildNumber(expected)}.`);
    }
  });

  buildScore += correctCount;
  els.score.textContent = `${buildScore}`;
  els.nextBtn.disabled = false;
  alreadyChecked = true;

  if (allCorrect) {
    els.feedback.className = "feedback-box success";
    els.feedback.innerHTML = `<strong>Perfect.</strong> You got all ${totalEditable} calculated lines correct.`;
  } else {
    els.feedback.className = "feedback-box error";
    els.feedback.innerHTML = `
      <strong>Partial credit:</strong> You got ${correctCount} out of ${totalEditable} correct.<br><br>
      ${feedbackLines.join("<br>")}
    `;
  }

  inputs.forEach(input => {
    input.disabled = true;
  });
}

function nextBuildQuestion() {
  buildIndex += 1;
  if (buildIndex >= buildQuestions.length) {
    showBuildCompletion();
    return;
  }
  renderBuildQuestion();
}

function showBuildCompletion() {
  const els = getBuildEls();
  const totalPossible = buildQuestions.reduce((sum, q) => {
    return sum + q.fields.filter(f => f.editable).length;
  }, 0);

  els.activeView.classList.add("hidden");
  els.completeView.classList.remove("hidden");
  els.progress.textContent = `${buildQuestions.length} / ${buildQuestions.length}`;
  els.finalScore.textContent = `You scored ${buildScore} out of ${totalPossible} total line-items.`;
}

function restartBuildQuiz() {
  buildQuestions = shuffleBuild(BUILD_QUESTIONS[buildMode]);
  buildIndex = 0;
  buildScore = 0;
  alreadyChecked = false;
  renderBuildQuestion();
}

function initBuildQuiz() {
  const mode = document.body.dataset.buildMode;
  if (!mode || !BUILD_QUESTIONS[mode]) return;

  buildMode = mode;
  buildQuestions = shuffleBuild(BUILD_QUESTIONS[mode]);

  const els = getBuildEls();
  els.checkBtn.addEventListener("click", checkBuildAnswer);
  els.nextBtn.addEventListener("click", nextBuildQuestion);
  els.restartBtn.addEventListener("click", restartBuildQuiz);
  els.playAgainBtn.addEventListener("click", restartBuildQuiz);

  renderBuildQuestion();
}

document.addEventListener("DOMContentLoaded", initBuildQuiz);
