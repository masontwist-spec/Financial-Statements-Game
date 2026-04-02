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
  els.feedback.textContent = "Fill in the labels and values, then click Check Answer.";
  els.nextBtn.disabled = true;

  els.statementCard.innerHTML = `
    <div class="build-statement-header">
      <h3>${getStatementTitle(buildMode)}</h3>
      <p>Enter statement labels and amounts. Numbers may include commas.</p>
    </div>
    <div class="build-lines">
      ${q.rows.map((row, index) => `
        <div class="build-line two-inputs">
          ${
            row.labelEditable
              ? `<input
                  type="text"
                  class="build-label-input"
                  data-expected-label="${row.expectedLabel}"
                  placeholder="Enter label"
                  autocomplete="off"
                />`
              : `<div class="build-static-label">${row.expectedLabel}</div>`
          }

          ${
            row.valueEditable
              ? `<input
                  type="text"
                  class="build-value-input"
                  data-expected-value="${row.expectedValue}"
                  placeholder="Enter amount"
                  autocomplete="off"
                />`
              : `<div class="build-static-value">${formatBuildNumber(row.expectedValue)}</div>`
          }
        </div>
      `).join("")}
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

function normalizeLabel(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^\w\s+]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function checkBuildAnswer() {
  if (alreadyChecked) return;

  const els = getBuildEls();
  const labelInputs = Array.from(document.querySelectorAll(".build-label-input"));
  const valueInputs = Array.from(document.querySelectorAll(".build-value-input"));

  let correctCount = 0;
  let totalPossible = 0;
  let allCorrect = true;
  let feedbackLines = [];

  labelInputs.forEach(input => {
    totalPossible += 1;
    const expected = normalizeLabel(input.dataset.expectedLabel);
    const actual = normalizeLabel(input.value);

    input.classList.remove("build-correct", "build-incorrect");

    if (!actual) {
      allCorrect = false;
      input.classList.add("build-incorrect");
      feedbackLines.push(`Missing label. Expected: ${input.dataset.expectedLabel}.`);
      return;
    }

    if (actual === expected) {
      correctCount += 1;
      input.classList.add("build-correct");
    } else {
      allCorrect = false;
      input.classList.add("build-incorrect");
      feedbackLines.push(`Incorrect label. Expected: ${input.dataset.expectedLabel}.`);
    }
  });

  valueInputs.forEach(input => {
    totalPossible += 1;
    const expected = Number(input.dataset.expectedValue);
    const actual = parseUserNumber(input.value);

    input.classList.remove("build-correct", "build-incorrect");

    if (!Number.isFinite(actual)) {
      allCorrect = false;
      input.classList.add("build-incorrect");
      feedbackLines.push(`One value is missing or not numeric. Expected: ${formatBuildNumber(expected)}.`);
      return;
    }

    if (actual === expected) {
      correctCount += 1;
      input.classList.add("build-correct");
    } else {
      allCorrect = false;
      input.classList.add("build-incorrect");
      feedbackLines.push(`Incorrect value. Expected: ${formatBuildNumber(expected)}.`);
    }
  });

  buildScore += correctCount;
  els.score.textContent = `${buildScore}`;
  els.nextBtn.disabled = false;
  alreadyChecked = true;

  if (allCorrect) {
    els.feedback.className = "feedback-box success";
    els.feedback.innerHTML = `<strong>Perfect.</strong> You got all ${totalPossible} label/value entries correct.`;
  } else {
    els.feedback.className = "feedback-box error";
    els.feedback.innerHTML = `
      <strong>Partial credit:</strong> You got ${correctCount} out of ${totalPossible} correct.<br><br>
      ${feedbackLines.join("<br>")}
    `;
  }

  [...labelInputs, ...valueInputs].forEach(input => {
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
  return sum + q.rows.reduce((rowSum, row) => {
    return rowSum + (row.labelEditable ? 1 : 0) + (row.valueEditable ? 1 : 0);
  }, 0);
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

function getBuildModeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  if (mode && BUILD_QUESTIONS[mode]) return mode;
  return "income";
}

function getBuildModeLabel(mode) {
  if (mode === "income") return "Build Income Statement";
  if (mode === "balance") return "Build Balance Sheet";
  if (mode === "cashflow") return "Build Cash Flow Statement";
  return "Build Mode";
}

function getStatementTitle(mode) {
  if (mode === "income") return "Income Statement";
  if (mode === "balance") return "Balance Sheet";
  if (mode === "cashflow") return "Cash Flow Statement";
  return "Statement";
}

function initBuildQuiz() {
  buildMode = getBuildModeFromUrl();

  if (!BUILD_QUESTIONS[buildMode]) return;

  buildQuestions = shuffleBuild(BUILD_QUESTIONS[buildMode]);

  const els = getBuildEls();

  const modeLabelEl = document.getElementById("build-mode-label");
  if (modeLabelEl) {
    modeLabelEl.textContent = getBuildModeLabel(buildMode);
  }

  setBuildPageHeader(buildMode);

  els.checkBtn.addEventListener("click", checkBuildAnswer);
  els.nextBtn.addEventListener("click", nextBuildQuestion);
  els.restartBtn.addEventListener("click", restartBuildQuiz);
  els.playAgainBtn.addEventListener("click", restartBuildQuiz);

  renderBuildQuestion();
}

document.addEventListener("DOMContentLoaded", initBuildQuiz);

function setBuildPageHeader(mode) {
  const titleEl = document.getElementById("build-page-title");
  const subtitleEl = document.getElementById("build-page-subtitle");

  if (!titleEl || !subtitleEl) return;

  if (mode === "income") {
    titleEl.textContent = "Build Income.";
    subtitleEl.textContent = "Populate the income statement and calculate the missing lines.";
  } else if (mode === "balance") {
    titleEl.textContent = "Build Balance.";
    subtitleEl.textContent = "Populate the balance sheet and make the accounting equation work.";
  } else if (mode === "cashflow") {
    titleEl.textContent = "Build Cash Flow.";
    subtitleEl.textContent = "Populate the cash flow statement and calculate the missing lines.";
  }
}
