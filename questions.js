const QUESTION_BANK = {
  income: [
    {
      prompt: "A company pays $300 of employee wages in cash. What happens on the income statement?",
      options: [
        "Revenue increases",
        "Expense increases",
        "Assets increase",
        "No effect"
      ],
      correct: "Expense increases",
      explanation: "Wages are an operating expense. Expenses increase, so net income falls.",
      difficulty: "Easy"
    },
    {
      prompt: "A company earns $900 by providing services and is paid immediately. What happens on the income statement?",
      options: [
        "Revenue increases",
        "Expense increases",
        "Only cash changes",
        "Liabilities increase"
      ],
      correct: "Revenue increases",
      explanation: "The company has earned revenue, so revenue increases and net income rises.",
      difficulty: "Easy"
    },
    {
      prompt: "A company buys equipment for cash. What is the immediate income statement effect?",
      options: [
        "Expense increases immediately",
        "Revenue increases",
        "No immediate income statement effect",
        "Net income rises"
      ],
      correct: "No immediate income statement effect",
      explanation: "Buying equipment is a balance sheet and cash flow event at first. The expense usually comes later through depreciation.",
      difficulty: "Medium"
    },
    {
      prompt: "A company records $200 of depreciation expense. What happens?",
      options: [
        "Revenue rises",
        "Expense rises",
        "Cash decreases",
        "Liabilities decrease"
      ],
      correct: "Expense rises",
      explanation: "Depreciation is an expense on the income statement, which lowers net income.",
      difficulty: "Medium"
    },
    {
      prompt: "A company makes a sale on credit. What happens immediately on the income statement?",
      options: [
        "Revenue increases",
        "Cash increases",
        "Debt increases",
        "No effect"
      ],
      correct: "Revenue increases",
      explanation: "Credit sales still count as revenue when earned, even if cash has not been collected yet.",
      difficulty: "Medium"
    },
    {
      prompt: "Which item is most directly used to calculate net income?",
      options: [
        "Assets minus liabilities",
        "Revenue minus expenses",
        "Cash inflows minus cash outflows",
        "Inventory minus debt"
      ],
      correct: "Revenue minus expenses",
      explanation: "Net income is fundamentally revenue less expenses.",
      difficulty: "Easy"
    },
    {
      prompt: "If operating expenses rise while revenue stays the same, what usually happens to net income?",
      options: [
        "It rises",
        "It falls",
        "It stays the same",
        "It becomes an asset"
      ],
      correct: "It falls",
      explanation: "Higher expenses reduce profitability when revenue does not change.",
      difficulty: "Easy"
    },
    {
      prompt: "A customer pays off an old account receivable from a prior sale. What is the income statement effect today?",
      options: [
        "Revenue increases today",
        "Expense increases today",
        "No income statement effect today",
        "Net income doubles"
      ],
      correct: "No income statement effect today",
      explanation: "The revenue was recognized earlier when the sale was made. Collecting receivables later does not create new revenue.",
      difficulty: "Hard"
    }
  ],

  balance: [
    {
      prompt: "A company borrows $1,000 from a bank. Which balance sheet categories increase?",
      options: [
        "Assets and liabilities",
        "Assets and equity",
        "Liabilities and equity",
        "Only liabilities"
      ],
      correct: "Assets and liabilities",
      explanation: "Cash increases, which is an asset, and debt increases, which is a liability.",
      difficulty: "Easy"
    },
    {
      prompt: "A company issues stock for cash. Which categories increase?",
      options: [
        "Assets and liabilities",
        "Assets and equity",
        "Only liabilities",
        "Expenses and equity"
      ],
      correct: "Assets and equity",
      explanation: "Cash rises and contributed capital in equity rises.",
      difficulty: "Medium"
    },
    {
      prompt: "Which equation must always hold on the balance sheet?",
      options: [
        "Assets = Revenue + Expenses",
        "Assets = Liabilities + Equity",
        "Revenue = Cash + Debt",
        "Cash = Net Income + Equity"
      ],
      correct: "Assets = Liabilities + Equity",
      explanation: "That is the core accounting equation.",
      difficulty: "Easy"
    },
    {
      prompt: "A company buys inventory with cash. What happens immediately?",
      options: [
        "Total assets increase",
        "One asset rises and another asset falls",
        "Liabilities rise",
        "Equity disappears"
      ],
      correct: "One asset rises and another asset falls",
      explanation: "Inventory goes up while cash goes down. Total assets may stay the same if the values are equal.",
      difficulty: "Medium"
    },
    {
      prompt: "Retained earnings is part of which major balance sheet category?",
      options: [
        "Assets",
        "Liabilities",
        "Equity",
        "Revenue"
      ],
      correct: "Equity",
      explanation: "Retained earnings is a component of shareholders' equity.",
      difficulty: "Easy"
    },
    {
      prompt: "A company pays down $250 of debt using cash. What happens?",
      options: [
        "Assets and liabilities both decrease",
        "Assets and equity both decrease",
        "Revenue rises",
        "Liabilities rise and assets stay flat"
      ],
      correct: "Assets and liabilities both decrease",
      explanation: "Cash decreases and the debt balance decreases.",
      difficulty: "Medium"
    },
    {
      prompt: "Which of the following is typically a current asset?",
      options: [
        "Accounts receivable",
        "Long-term debt",
        "Common stock",
        "Depreciation expense"
      ],
      correct: "Accounts receivable",
      explanation: "Accounts receivable is usually expected to convert to cash within the operating cycle or a year.",
      difficulty: "Easy"
    },
    {
      prompt: "Net income at period end generally affects which balance sheet account through closing?",
      options: [
        "Accounts payable",
        "Retained earnings",
        "Cash only",
        "Long-term debt"
      ],
      correct: "Retained earnings",
      explanation: "Net income flows into retained earnings as part of equity, assuming it is not fully paid out as dividends.",
      difficulty: "Hard"
    }
  ],

  cashflow: [
    {
      prompt: "A company buys equipment for cash. Which section of the cash flow statement is affected?",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "No section"
      ],
      correct: "Investing",
      explanation: "Purchases of long-term assets are investing cash outflows.",
      difficulty: "Easy"
    },
    {
      prompt: "A company borrows cash from a bank. Which section is affected?",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "No effect"
      ],
      correct: "Financing",
      explanation: "Borrowing cash is a financing inflow because it comes from creditors.",
      difficulty: "Easy"
    },
    {
      prompt: "Cash collected from customers is usually classified under which section?",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "Equity"
      ],
      correct: "Operating",
      explanation: "Cash from core business operations usually belongs in operating activities.",
      difficulty: "Easy"
    },
    {
      prompt: "Cash paid to employees is usually classified as what?",
      options: [
        "Operating outflow",
        "Investing inflow",
        "Financing outflow",
        "No effect on cash flow"
      ],
      correct: "Operating outflow",
      explanation: "Paying employees is part of normal operations, so it is typically an operating cash outflow.",
      difficulty: "Easy"
    },
    {
      prompt: "Issuing stock for cash affects which section?",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "Expense section"
      ],
      correct: "Financing",
      explanation: "Raising money from owners is a financing cash inflow.",
      difficulty: "Medium"
    },
    {
      prompt: "Why is depreciation added back under the indirect method of operating cash flow?",
      options: [
        "Because it increases revenue",
        "Because it is a non-cash expense",
        "Because it creates financing cash",
        "Because it reduces liabilities"
      ],
      correct: "Because it is a non-cash expense",
      explanation: "Depreciation lowers net income but does not use cash in the current period, so it gets added back.",
      difficulty: "Hard"
    },
    {
      prompt: "Paying dividends in cash is usually classified as:",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "Revenue"
      ],
      correct: "Financing",
      explanation: "Cash dividends are commonly shown as financing outflows under U.S. GAAP-style treatment for introductory learning.",
      difficulty: "Medium"
    },
    {
      prompt: "A company sells old equipment for cash. Which section is directly affected by the cash proceeds?",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "Equity"
      ],
      correct: "Investing",
      explanation: "Selling long-term assets generates investing cash inflows.",
      difficulty: "Medium"
    }
  ],

  combined: [
    {
      prompt: "A company makes a $500 cash sale with no related expense. What happens immediately?",
      options: [
        "Revenue rises, cash rises, operating cash flow rises",
        "Expense rises, debt rises, financing cash flow rises",
        "Inventory rises, equity falls, investing cash flow rises",
        "Only the balance sheet changes"
      ],
      correct: "Revenue rises, cash rises, operating cash flow rises",
      explanation: "A cash sale increases revenue on the income statement, cash on the balance sheet, and operating cash inflow on the cash flow statement.",
      difficulty: "Medium"
    },
    {
      prompt: "A company borrows $1,000 in cash from a bank. Which is correct?",
      options: [
        "Revenue rises and operating cash flow rises",
        "Cash rises, debt rises, financing cash flow rises",
        "Expense rises and equity falls",
        "Accounts receivable rises and investing cash flow rises"
      ],
      correct: "Cash rises, debt rises, financing cash flow rises",
      explanation: "Borrowing creates cash, increases liabilities, and shows as a financing inflow.",
      difficulty: "Easy"
    },
    {
      prompt: "A company buys equipment for cash. Which is correct immediately?",
      options: [
        "Expense rises and operating cash flow falls",
        "Equipment rises, cash falls, investing cash flow falls",
        "Revenue rises and equity rises",
        "Debt rises and financing cash flow rises"
      ],
      correct: "Equipment rises, cash falls, investing cash flow falls",
      explanation: "The equipment purchase is capitalized as an asset, reduces cash, and shows as an investing outflow.",
      difficulty: "Medium"
    },
    {
      prompt: "A company records depreciation expense. Which is correct?",
      options: [
        "Net income falls, asset value falls over time, depreciation is added back in indirect CFO",
        "Revenue rises, liabilities rise, financing cash rises",
        "Cash rises, equity rises, investing cash falls",
        "No statement changes at all"
      ],
      correct: "Net income falls, asset value falls over time, depreciation is added back in indirect CFO",
      explanation: "Depreciation reduces income, lowers the carrying value of long-lived assets indirectly through accumulated depreciation, and is added back in the indirect cash flow method.",
      difficulty: "Hard"
    },
    {
      prompt: "A company makes a sale on credit. Which is correct immediately?",
      options: [
        "Cash rises and financing cash flow rises",
        "Revenue rises, accounts receivable rises, but cash does not yet rise",
        "Expense rises and cash rises",
        "Inventory rises and liabilities rise"
      ],
      correct: "Revenue rises, accounts receivable rises, but cash does not yet rise",
      explanation: "A credit sale creates revenue and receivables now, while cash collection happens later.",
      difficulty: "Hard"
    },
    {
      prompt: "A customer later pays an old receivable. Which is correct at collection time?",
      options: [
        "Revenue rises again",
        "Cash rises and accounts receivable falls, with no new revenue recognized",
        "Debt rises and financing cash rises",
        "Depreciation expense is reversed"
      ],
      correct: "Cash rises and accounts receivable falls, with no new revenue recognized",
      explanation: "Collection converts receivables into cash. The revenue was already recorded when the sale happened.",
      difficulty: "Hard"
    }
  ]
};
