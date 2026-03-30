const GAME_DATA = {
  income: {
    statement: {
      title: "Mini Income Statement",
      lines: [
        { label: "Revenue", value: 2000 },
        { label: "Expenses", value: 1200 },
        { label: "Net Income", value: 800, total: true }
      ]
    },
    question: "The company pays $150 for rent. What happens?",
    options: [
      "Revenue increases",
      "Expense increases",
      "No effect"
    ],
    correct: "Expense increases",
    explanation:
      "Rent is an operating expense. It increases expenses on the income statement, which lowers net income."
  },

  balance: {
    statement: {
      title: "Mini Balance Sheet",
      lines: [
        { label: "Cash", value: 1000 },
        { label: "Inventory", value: 500 },
        { label: "Total Assets", value: 1500, total: true },
        { label: "Debt", value: 600 },
        { label: "Equity", value: 900 }
      ]
    },
    question: "The company takes out a $400 bank loan. Which areas change?",
    options: [
      "Assets and Liabilities",
      "Assets and Equity",
      "Liabilities and Equity"
    ],
    correct: "Assets and Liabilities",
    explanation:
      "A loan brings in cash, so assets increase. It also creates debt, so liabilities increase. Equity does not change at the moment of borrowing."
  },

  cashflow: {
    statement: {
      title: "Mini Cash Flow Statement",
      lines: [
        { label: "Cash from Operations", value: 700 },
        { label: "Cash from Investing", value: -300 },
        { label: "Cash from Financing", value: 500 },
        { label: "Net Change in Cash", value: 900, total: true }
      ]
    },
    question: "The company buys equipment for cash. Which section does this hit?",
    options: [
      "Operating",
      "Investing",
      "Financing"
    ],
    correct: "Investing",
    explanation:
      "Buying long-term equipment is a capital expenditure, which goes in investing cash flow."
  }
};

function formatMoney(value) {
  const sign = value < 0 ? "-" : "";
  return `${sign}$${Math.abs(value).toLocaleString()}`;
}

function getStoredScore(pageKey) {
  const raw = localStorage.getItem(`acctgame_${pageKey}`);
  if (!raw) return { answered: 0, correct: 0 };
  try {
    return JSON.parse(raw);
  } catch {
    return { answered: 0, correct: 0 };
  }
}

function setStoredScore(pageKey, score) {
  localStorage.setItem(`acctgame_${pageKey}`, JSON.stringify(score));
}

function renderStatement(statement, target) {
  target.innerHTML = `
    <h3>${statement.title}</h3>
    ${statement.lines
      .map(
        line => `
          <div class="statement-line ${line.total ? "total" : ""}">
            <span>${line.label}</span>
            <span>${formatMoney(line.value)}</span>
          </div>
        `
      )
      .join("")}
  `;
}

function updateScoreUI(pageKey) {
  const score = getStoredScore(pageKey);
  const answeredEl = document.getElementById("answered-count");
  const correctEl = document.getElementById("correct-count");

  if (answeredEl) answeredEl.textContent = score.answered;
  if (correctEl) correctEl.textContent = score.correct;
}

function lockButtons(buttons) {
  buttons.forEach(btn => {
    btn.disabled = true;
  });
}

function setupGame(pageKey) {
  const data = GAME_DATA[pageKey];
  if (!data) return;

  const statementEl = document.getElementById("statement-box");
  const questionEl = document.getElementById("question-text");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const resetBtn = document.getElementById("reset-score-btn");

  renderStatement(data.statement, statementEl);
  questionEl.textContent = data.question;

  optionsEl.innerHTML = "";

  data.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;

    btn.addEventListener("click", () => {
      const buttons = Array.from(optionsEl.querySelectorAll("button"));
      lockButtons(buttons);

      const score = getStoredScore(pageKey);
      score.answered += 1;

      if (option === data.correct) {
        score.correct += 1;
        feedbackEl.className = "feedback success";
        feedbackEl.innerHTML = `<strong>Correct.</strong> ${data.explanation}`;
      } else {
        feedbackEl.className = "feedback error";
        feedbackEl.innerHTML = `<strong>Not quite.</strong> Correct answer: <strong>${data.correct}</strong>. ${data.explanation}`;
      }

      setStoredScore(pageKey, score);
      updateScoreUI(pageKey);
    });

    optionsEl.appendChild(btn);
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      setStoredScore(pageKey, { answered: 0, correct: 0 });
      updateScoreUI(pageKey);
      window.location.reload();
    });
  }

  updateScoreUI(pageKey);
}

document.addEventListener("DOMContentLoaded", () => {
  const pageKey = document.body.dataset.page;
  if (pageKey) {
    setupGame(pageKey);
  }
});
