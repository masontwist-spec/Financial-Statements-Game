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

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
    playAgainBtn: document.getElementById("build-play-again-btn"),
    progressFill: document.getElementById("build-progress-fill"),
    progressPercentText: document.getElementById("build-progress-percent-text"),
    progressNote: document.getElementById("build-progress-note")
  };
}

function updateBuildProgressUI(els, currentStep, totalSteps, noteOverride = "") {
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
      els.progressNote.textContent = "No build questions are available yet.";
    } else if (clampedCurrent >= safeTotal) {
      els.progressNote.textContent = "Build set complete. Review your total or play again.";
    } else {
      els.progressNote.textContent = `${safeTotal - clampedCurrent} build prompt${safeTotal - clampedCurrent === 1 ? "" : "s"} remaining.`;
    }
  }
}

function getQuestionLabelOptions(question) {
  return [...new Set(
    question.rows
      .filter(row => row.labelEditable)
      .map(row => row.expectedLabel)
  )];
}

function getBuildRowClasses(label) {
  const normalized = String(label || "").toLowerCase();
  const classes = ["build-line", "two-inputs"];

  const isTotalLine =
    normalized.startsWith("total ") ||
    normalized.includes(" net income") ||
    normalized.includes("ending ") ||
    normalized.includes("adjusted ") ||
    normalized.includes("net cash from") ||
    normalized.includes("net change in cash") ||
    normalized.includes("ending cash balance") ||
    normalized.includes("adjusted cash balance") ||
    normalized.includes("equity");

  const isSubtotalLine =
    normalized.includes("gross profit") ||
    normalized.includes("operating income") ||
    normalized.includes("current assets") ||
    normalized.includes("current liabilities") ||
    normalized.includes("equipment, net") ||
    normalized.includes("goods available for sale") ||
    normalized.includes("total revenue") ||
    normalized.includes("total expenses");

  const isIndentedLine =
    normalized.includes("expense") ||
    normalized.includes("accounts receivable") ||
    normalized.includes("inventory") ||
    normalized.includes("prepaid") ||
    normalized.includes("supplies") ||
    normalized.includes("wages payable") ||
    normalized.includes("accounts payable") ||
    normalized.includes("interest payable") ||
    normalized.includes("service charge") ||
    normalized.startsWith("add:") ||
    normalized.startsWith("less:") ||
    normalized.startsWith("increase ") ||
    normalized.startsWith("decrease ") ||
    normalized.startsWith("purchase ") ||
    normalized.startsWith("proceeds ") ||
    normalized.startsWith("repayment ") ||
    normalized.startsWith("issuance ") ||
    normalized.includes("dividends") ||
    normalized.includes("collections") ||
    normalized.includes("write-offs") ||
    normalized.includes("sales returns");

  if (isSubtotalLine) {
    classes.push("build-line-subtotal");
  }

  if (isTotalLine) {
    classes.push("build-line-total");
  }

  if (isIndentedLine && !isTotalLine) {
    classes.push("build-line-indented");
  }

  return classes.join(" ");
}

function renderBuildQuestion() {
  const els = getBuildEls();
  const q = buildQuestions[buildIndex];
  const labelOptions = getQuestionLabelOptions(q);
  alreadyChecked = false;

  els.activeView.classList.remove("hidden");
  els.completeView.classList.add("hidden");

  els.prompt.textContent = q.prompt;
  els.difficulty.textContent = q.difficulty;
  els.progress.textContent = `${buildIndex + 1} / ${buildQuestions.length}`;
  els.score.textContent = `${buildScore}`;
  updateBuildProgressUI(els, buildIndex + 1, buildQuestions.length);
  els.feedback.className = "feedback-box";
  els.feedback.textContent = "Choose the labels, enter the values, then click Check Answer.";
  els.nextBtn.disabled = true;

  els.statementCard.innerHTML = `
    <div class="build-statement-header">
      <h3>${getStatementTitle(buildMode)}</h3>
      <p>Choose statement labels and enter amounts. Numbers may include commas.</p>
    </div>
    <div class="build-lines">
      ${q.rows.map(row => `
        <div class="${getBuildRowClasses(row.expectedLabel)}">
          ${
            row.labelEditable
              ? `<select
                  class="build-label-input"
                  data-expected-label="${escapeHtml(row.expectedLabel)}"
                >
                  <option value="">Choose label</option>
                  ${labelOptions.map(option => `
                    <option value="${escapeHtml(option)}">${escapeHtml(option)}</option>
                  `).join("")}
                </select>`
              : `<div class="build-static-label">${escapeHtml(row.expectedLabel)}</div>`
          }

          ${
            row.valueEditable
              ? `<input
                  type="text"
                  class="build-value-input"
                  data-expected-value="${row.expectedValue}"
                  placeholder="Enter amount"
                  inputmode="numeric"
                  autocomplete="off"
                />`
              : `<div class="build-static-value">${formatBuildNumber(row.expectedValue)}</div>`
          }
        </div>
      `).join("")}
    </div>
  `;
}

function normalizeLabel(text) {
  if (typeof text !== "string") return "";
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
  updateBuildProgressUI(els, buildQuestions.length, buildQuestions.length);
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

  setBuildModePickerState(buildMode);
  setBuildPageHeader(buildMode);

  els.checkBtn.addEventListener("click", checkBuildAnswer);
  els.nextBtn.addEventListener("click", nextBuildQuestion);
  els.restartBtn.addEventListener("click", restartBuildQuiz);
  els.playAgainBtn.addEventListener("click", restartBuildQuiz);

  renderBuildQuestion();
}

document.addEventListener("DOMContentLoaded", initBuildQuiz);

function setBuildModePickerState(mode) {
  const modeLinks = document.querySelectorAll("[data-build-mode-link]");

  modeLinks.forEach(link => {
    const isActive = link.dataset.buildModeLink === mode;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

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
