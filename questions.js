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
      explanation: "Buying equipment is capitalized first. The expense usually shows up later through depreciation.",
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
      explanation: "Revenue is recognized when earned, even if cash has not yet been collected.",
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
      explanation: "The revenue was recognized earlier when the sale was made. Collection later does not create new revenue.",
      difficulty: "Hard"
    },
    {
      prompt: "A company pays $120 for utilities. Which income statement category is most directly affected?",
      options: [
        "Revenue",
        "Expense",
        "Equity",
        "Investing cash flow"
      ],
      correct: "Expense",
      explanation: "Utilities are a normal operating expense.",
      difficulty: "Easy"
    },
    {
      prompt: "A company has revenue of $4,000 and expenses of $3,100. What is net income?",
      options: [
        "$900",
        "$1,100",
        "$7,100",
        "$3,100"
      ],
      correct: "$900",
      explanation: "Net income equals revenue minus expenses: $4,000 - $3,100 = $900.",
      difficulty: "Easy"
    },
    {
      prompt: "A company returns inventory to a supplier before it is sold. What is the immediate income statement effect?",
      options: [
        "Revenue increases",
        "Expense increases",
        "No immediate income statement effect",
        "Net income rises immediately"
      ],
      correct: "No immediate income statement effect",
      explanation: "Returning unsold inventory is generally a balance sheet event first, not an immediate income statement event.",
      difficulty: "Hard"
    },
    {
      prompt: "Cost of goods sold is most directly associated with which type of business event?",
      options: [
        "Borrowing money",
        "Selling inventory",
        "Issuing stock",
        "Buying equipment"
      ],
      correct: "Selling inventory",
      explanation: "COGS is recognized when inventory is sold.",
      difficulty: "Medium"
    },
    {
      prompt: "If revenue increases by $500 and expenses increase by $200, what happens to net income?",
      options: [
        "Net income decreases by $300",
        "Net income increases by $300",
        "Net income increases by $700",
        "No effect"
      ],
      correct: "Net income increases by $300",
      explanation: "The net effect is +500 - 200 = +300.",
      difficulty: "Easy"
    },
    {
      prompt: "Interest expense would normally appear on which statement?",
      options: [
        "Income statement",
        "Only balance sheet",
        "Only statement of retained earnings",
        "It is never reported"
      ],
      correct: "Income statement",
      explanation: "Interest expense is a period expense and appears on the income statement.",
      difficulty: "Medium"
    },
    {
      prompt: "A company prepays one year of insurance in cash today. What is the immediate income statement effect on the payment date?",
      options: [
        "Insurance expense rises immediately for the full amount",
        "Revenue rises",
        "No immediate full expense recognition",
        "Net income increases"
      ],
      correct: "No immediate full expense recognition",
      explanation: "A prepaid insurance payment is generally recorded as an asset first, then expensed over time.",
      difficulty: "Hard"
    },
    // ADD THESE INTO QUESTION_BANK.income

{
  prompt: "A company bought $250 of office supplies during the year and had $75 of supplies left at year-end. How much office supplies expense should be recorded?",
  options: [
    "$250",
    "$75",
    "$175",
    "$125"
  ],
  correct: "$175",
  explanation: "Supplies expense equals supplies purchased minus supplies remaining: $250 - $75 = $175.",
  difficulty: "Easy"
},
{
  prompt: "A company prepays $400 of rent on January 1 for four months. By the end of February, how much rent expense should have been recognized in total?",
  options: [
    "$100",
    "$200",
    "$300",
    "$400"
  ],
  correct: "$200",
  explanation: "The company uses $100 of rent each month. After January and February, total rent expense recognized should be $200.",
  difficulty: "Medium"
},
{
  prompt: "Nine months ago, a company collected $720 for a one-year insurance-related contract and recorded it as unearned revenue. At year-end, how much revenue should now be recognized?",
  options: [
    "$180",
    "$540",
    "$720",
    "$60"
  ],
  correct: "$540",
  explanation: "Nine out of twelve months have been earned, so recognized revenue is 9/12 × $720 = $540.",
  difficulty: "Medium"
},
{
  prompt: "A company had beginning inventory of $16,000, purchases of $10,360, and ending inventory of $15,000. What is cost of goods sold?",
  options: [
    "$9,360",
    "$10,360",
    "$11,360",
    "$13,160"
  ],
  correct: "$11,360",
  explanation: "COGS = Beginning Inventory + Purchases - Ending Inventory = 16,000 + 10,360 - 15,000 = 11,360.",
  difficulty: "Easy"
},
{
  prompt: "A company pays for office supplies in November, but the supplies are not used until December. In which month should the supplies be recorded as expense?",
  options: [
    "October",
    "November",
    "December",
    "Never"
  ],
  correct: "December",
  explanation: "The expense is recognized when the supplies are used, not when they are paid for.",
  difficulty: "Medium"
},
{
  prompt: "A company prepays insurance in cash. What is usually true on the payment date?",
  options: [
    "The full amount becomes expense immediately",
    "The payment creates a prepaid asset first",
    "Revenue increases immediately",
    "Liabilities increase immediately"
  ],
  correct: "The payment creates a prepaid asset first",
  explanation: "Prepaid insurance is usually recorded as an asset first and then expensed over time.",
  difficulty: "Medium"
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
      explanation: "Net income flows into retained earnings as part of equity.",
      difficulty: "Hard"
    },
    {
      prompt: "Accounts payable is best classified as:",
      options: [
        "An asset",
        "A liability",
        "Equity",
        "Revenue"
      ],
      correct: "A liability",
      explanation: "Accounts payable represents amounts owed to suppliers.",
      difficulty: "Easy"
    },
    {
      prompt: "If a company collects cash from customers on old receivables, what happens on the balance sheet?",
      options: [
        "Cash rises and accounts receivable falls",
        "Cash falls and revenue rises",
        "Debt rises and equity falls",
        "Inventory rises and cash falls"
      ],
      correct: "Cash rises and accounts receivable falls",
      explanation: "One asset increases and another asset decreases.",
      difficulty: "Medium"
    },
    {
      prompt: "Which of the following is most likely a long-term asset?",
      options: [
        "Inventory",
        "Cash",
        "Equipment",
        "Accounts payable"
      ],
      correct: "Equipment",
      explanation: "Equipment is a long-lived operating asset.",
      difficulty: "Easy"
    },
    {
      prompt: "A company receives cash from a customer before earning the revenue. What liability may be created?",
      options: [
        "Accounts receivable",
        "Unearned revenue",
        "Retained earnings",
        "Accumulated depreciation"
      ],
      correct: "Unearned revenue",
      explanation: "Cash received before performance is often recorded as a liability until earned.",
      difficulty: "Hard"
    },
    {
      prompt: "Which balance sheet category is usually reduced indirectly by depreciation over time?",
      options: [
        "Liabilities",
        "Long-term assets",
        "Common stock",
        "Accounts payable"
      ],
      correct: "Long-term assets",
      explanation: "Depreciation reduces the carrying value of long-term assets through accumulated depreciation.",
      difficulty: "Medium"
    },
    {
      prompt: "If total assets are $10,000 and total liabilities are $6,500, what is total equity?",
      options: [
        "$16,500",
        "$3,500",
        "$6,500",
        "$10,000"
      ],
      correct: "$3,500",
      explanation: "Equity = Assets - Liabilities = $10,000 - $6,500 = $3,500.",
      difficulty: "Easy"
    },
    {
      prompt: "A company purchases equipment by signing a note payable instead of paying cash. What happens immediately?",
      options: [
        "Assets rise and liabilities rise",
        "Assets rise and equity rises",
        "Cash falls and equity falls",
        "Revenue rises"
      ],
      correct: "Assets rise and liabilities rise",
      explanation: "The equipment increases assets, and the note payable increases liabilities.",
      difficulty: "Hard"
    },
    // ADD THESE INTO QUESTION_BANK.balance

{
  prompt: "A company pays $100 of accounts payable in cash. What happens to the accounting equation?",
  options: [
    "Assets decrease and liabilities decrease",
    "Assets increase and liabilities decrease",
    "Assets decrease and equity decreases",
    "Liabilities decrease and equity increases"
  ],
  correct: "Assets decrease and liabilities decrease",
  explanation: "Cash goes down, and accounts payable goes down. Equity is unaffected.",
  difficulty: "Easy"
},
{
  prompt: "If total assets decrease by $5,500 and owners' equity increases by $2,000, what must happen to liabilities?",
  options: [
    "Liabilities decrease by $7,500",
    "Liabilities increase by $3,500",
    "Liabilities increase by $7,500",
    "Liabilities decrease by $3,500"
  ],
  correct: "Liabilities decrease by $7,500",
  explanation: "Using Assets = Liabilities + Equity: if assets fall by 5,500 while equity rises by 2,000, liabilities must fall by 7,500.",
  difficulty: "Hard"
},
{
  prompt: "A customer pays cash in advance before the company performs the service. What account is usually increased on the balance sheet?",
  options: [
    "Accounts receivable",
    "Unearned revenue",
    "Retained earnings",
    "Depreciation expense"
  ],
  correct: "Unearned revenue",
  explanation: "Cash is received before performance, so a liability called unearned revenue is recorded.",
  difficulty: "Medium"
},
{
  prompt: "A 90-day note receivable is usually classified on the balance sheet as:",
  options: [
    "Current asset",
    "Plant asset",
    "Current liability",
    "Long-term liability"
  ],
  correct: "Current asset",
  explanation: "Because it will be collected within a short period, it is typically a current asset.",
  difficulty: "Easy"
},
{
  prompt: "Allowance for Uncollectible Accounts is best described as:",
  options: [
    "An asset with a debit balance",
    "A liability with a credit balance",
    "A contra asset with a credit balance",
    "A contra equity account with a debit balance"
  ],
  correct: "A contra asset with a credit balance",
  explanation: "It offsets accounts receivable and normally carries a credit balance.",
  difficulty: "Medium"
},
{
  prompt: "If ending inventory is understated, what happens to total assets at year-end?",
  options: [
    "They are overstated",
    "They are understated",
    "They are unchanged",
    "Only liabilities are affected"
  ],
  correct: "They are understated",
  explanation: "Inventory is an asset, so understating ending inventory understates total assets.",
  difficulty: "Medium"
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
      explanation: "For intro-accounting treatment, cash dividends are commonly shown as financing outflows.",
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
    },
    {
      prompt: "Cash paid for inventory is usually classified as:",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "No cash flow effect"
      ],
      correct: "Operating",
      explanation: "Purchasing inventory for normal operations is generally treated as an operating cash outflow.",
      difficulty: "Easy"
    },
    {
      prompt: "Repaying principal on a bank loan is usually classified as:",
      options: [
        "Operating",
        "Investing",
        "Financing",
        "Revenue"
      ],
      correct: "Financing",
      explanation: "Repayment of borrowing principal is generally a financing outflow.",
      difficulty: "Medium"
    },
    {
      prompt: "Which of the following is most likely a financing cash inflow?",
      options: [
        "Collecting from customers",
        "Selling equipment",
        "Issuing debt",
        "Paying wages"
      ],
      correct: "Issuing debt",
      explanation: "Raising money from lenders is a financing inflow.",
      difficulty: "Easy"
    },
    {
      prompt: "Under the indirect method, an increase in accounts receivable usually does what to operating cash flow?",
      options: [
        "Increases it",
        "Decreases it",
        "Has no effect",
        "Turns it into financing cash flow"
      ],
      correct: "Decreases it",
      explanation: "An increase in receivables means more revenue recognized than cash collected, so it reduces operating cash flow under the indirect method.",
      difficulty: "Hard"
    },
    {
      prompt: "Under the indirect method, an increase in accounts payable usually does what to operating cash flow?",
      options: [
        "Increases it",
        "Decreases it",
        "Has no effect",
        "Creates investing inflow"
      ],
      correct: "Increases it",
      explanation: "If payables increase, the company has delayed cash payment, which tends to increase operating cash flow under the indirect method.",
      difficulty: "Hard"
    },
    {
      prompt: "Buying land with cash would most likely be classified as:",
      options: [
        "Operating outflow",
        "Investing outflow",
        "Financing inflow",
        "No effect"
      ],
      correct: "Investing outflow",
      explanation: "Land is a long-term asset, so buying it is an investing use of cash.",
      difficulty: "Easy"
    },
    {
      prompt: "Which item is a classic example of a non-cash charge that affects net income but not current cash?",
      options: [
        "Depreciation",
        "Borrowing money",
        "Collecting receivables",
        "Issuing shares"
      ],
      correct: "Depreciation",
      explanation: "Depreciation reduces income but does not require a current-period cash outflow.",
      difficulty: "Medium"
    },
     // ADD THESE INTO QUESTION_BANK.cashflow

{
  prompt: "Which of the following actually affects cash during a period?",
  options: [
    "Recording depreciation expense",
    "Declaring a cash dividend",
    "Writing off an uncollectible account",
    "Paying an account payable"
  ],
  correct: "Paying an account payable",
  explanation: "Paying an account payable uses cash. The other choices do not directly affect cash at that moment.",
  difficulty: "Easy"
},
{
  prompt: "Cash dividends paid are usually reported on the statement of cash flows as:",
  options: [
    "An operating inflow",
    "An investing outflow",
    "An operating outflow",
    "A financing outflow"
  ],
  correct: "A financing outflow",
  explanation: "In intro accounting treatment, dividends paid are typically shown as financing outflows.",
  difficulty: "Easy"
},
{
  prompt: "Under the indirect method, depreciation expense is usually shown on the statement of cash flows by:",
  options: [
    "Adding it back to net income in operating activities",
    "Subtracting it from net income in operating activities",
    "Showing it as an investing inflow",
    "Showing it as a financing outflow"
  ],
  correct: "Adding it back to net income in operating activities",
  explanation: "Depreciation reduces net income but is non-cash, so it is added back under the indirect method.",
  difficulty: "Medium"
},
{
  prompt: "If a company issues $100,000 of new bonds and repays $75,000 of old bonds in the same year, how should this appear in the cash flow statement?",
  options: [
    "Only a net inflow of $25,000",
    "Only a net outflow of $25,000",
    "An inflow of $100,000 and an outflow of $75,000",
    "A gain of $25,000 in operating activities"
  ],
  correct: "An inflow of $100,000 and an outflow of $75,000",
  explanation: "Cash flow statements usually show the gross financing inflow and gross financing outflow separately.",
  difficulty: "Medium"
},
{
  prompt: "A company sells a machine for cash. Which section of the statement of cash flows includes the cash proceeds?",
  options: [
    "Operating",
    "Investing",
    "Financing",
    "Equity"
  ],
  correct: "Investing",
  explanation: "Selling long-term assets creates an investing cash inflow.",
  difficulty: "Easy"
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
      explanation: "Depreciation reduces income, lowers carrying value over time, and is added back in the indirect cash flow method.",
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
    },
    {
      prompt: "A company pays $200 of wages in cash. Which statement effects are most accurate?",
      options: [
        "Expense rises, cash falls, operating cash flow falls",
        "Revenue rises, cash rises, financing cash flow falls",
        "Inventory rises, equity rises, investing cash flow falls",
        "Only liabilities change"
      ],
      correct: "Expense rises, cash falls, operating cash flow falls",
      explanation: "Wages create expense, reduce cash, and are typically an operating outflow.",
      difficulty: "Medium"
    },
    {
      prompt: "A company issues stock for cash. Which statement effects are most accurate?",
      options: [
        "Revenue rises and operating cash flow rises",
        "Cash rises, equity rises, financing cash flow rises",
        "Expense rises, liabilities rise, investing cash flow falls",
        "Accounts receivable rises and net income rises"
      ],
      correct: "Cash rises, equity rises, financing cash flow rises",
      explanation: "Issuing stock brings in cash, increases equity, and is classified as financing.",
      difficulty: "Medium"
    },
    {
      prompt: "A company repays loan principal with cash. Which statement effects are most accurate?",
      options: [
        "Cash falls, liabilities fall, financing cash flow falls",
        "Expense rises, revenue falls, operating cash flow falls",
        "Inventory rises, equity rises, investing cash flow rises",
        "Accounts receivable falls and net income rises"
      ],
      correct: "Cash falls, liabilities fall, financing cash flow falls",
      explanation: "Repaying principal reduces cash and debt and is generally a financing outflow.",
      difficulty: "Medium"
    },
    {
      prompt: "A company prepays insurance in cash. Which is most accurate immediately?",
      options: [
        "Expense rises fully, net income falls, operating cash flow rises",
        "Prepaid asset rises, cash falls, and there is no full immediate expense recognition",
        "Revenue rises, liabilities rise, financing cash flow rises",
        "Debt falls and equity rises"
      ],
      correct: "Prepaid asset rises, cash falls, and there is no full immediate expense recognition",
      explanation: "Prepaid insurance is usually recorded as an asset first. Cash falls immediately, but the expense is recognized over time.",
      difficulty: "Hard"
    },
    {
      prompt: "A company buys inventory for cash. Which is most accurate immediately?",
      options: [
        "Inventory rises, cash falls, operating cash flow falls",
        "Expense rises, liabilities rise, financing cash flow rises",
        "Revenue rises, accounts receivable rises, investing cash flow rises",
        "Only equity changes"
      ],
      correct: "Inventory rises, cash falls, operating cash flow falls",
      explanation: "The balance sheet shifts from cash to inventory, and the cash payment is generally operating. Expense usually comes later when the inventory is sold.",
      difficulty: "Hard"
    },
    {
      prompt: "A company earns revenue in cash and also incurs $300 of related cash expense in the same period. What is the broad multi-statement logic?",
      options: [
        "Both revenue and expense can affect net income, cash changes by the net amount, and operating cash flow reflects both cash effects",
        "Only the balance sheet changes",
        "Only financing cash flow changes",
        "Revenue has no effect if expense also occurs"
      ],
      correct: "Both revenue and expense can affect net income, cash changes by the net amount, and operating cash flow reflects both cash effects",
      explanation: "When both the revenue and expense are cash-based in the same period, income statement and operating cash flow both reflect the business activity.",
      difficulty: "Hard"
    }
  ]
};
