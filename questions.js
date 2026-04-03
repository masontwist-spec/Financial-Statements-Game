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
},
{
  prompt: "A company has sales of $80,000 and cost of goods sold of $52,000. What is gross profit?",
  options: [
    "$28,000",
    "$32,000",
    "$52,000",
    "$132,000"
  ],
  correct: "$28,000",
  explanation: "Gross profit equals sales minus cost of goods sold: $80,000 - $52,000 = $28,000.",
  difficulty: "Easy"
},
{
  prompt: "A company earns $1,200 of consulting revenue during December but will not bill the customer until January. What should happen in December?",
  options: [
    "Revenue should wait until cash is collected",
    "Revenue should be recognized in December",
    "Only cash should increase in December",
    "No entry should be made in December"
  ],
  correct: "Revenue should be recognized in December",
  explanation: "Under accrual accounting, revenue is recognized when earned, even if billing or collection happens later.",
  difficulty: "Easy"
},
{
  prompt: "A company has gross profit of $90,000 and operating expenses of $64,000. What is operating income?",
  options: [
    "$26,000",
    "$64,000",
    "$90,000",
    "$154,000"
  ],
  correct: "$26,000",
  explanation: "Operating income equals gross profit minus operating expenses: $90,000 - $64,000 = $26,000.",
  difficulty: "Easy"
},
{
  prompt: "A company records $600 of wages expense at year-end for work already performed but not yet paid. What happens on the income statement?",
  options: [
    "Expense increases by $600",
    "Revenue increases by $600",
    "No effect until cash is paid",
    "Only assets increase"
  ],
  correct: "Expense increases by $600",
  explanation: "Accrued wages must be recognized as an expense in the period employees performed the work.",
  difficulty: "Easy"
},
{
  prompt: "A company reports sales revenue of $250,000, sales returns of $8,000, and sales discounts of $2,000. What is net sales?",
  options: [
    "$240,000",
    "$242,000",
    "$248,000",
    "$260,000"
  ],
  correct: "$240,000",
  explanation: "Net sales equals sales revenue minus returns and discounts: $250,000 - $8,000 - $2,000 = $240,000.",
  difficulty: "Medium"
},
{
  prompt: "A company pays $18,000 for a one-year software subscription on October 1. How much subscription expense should be recognized by December 31?",
  options: [
    "$1,500",
    "$3,000",
    "$4,500",
    "$18,000"
  ],
  correct: "$4,500",
  explanation: "Three months have passed, so the expense is 3/12 of $18,000, which equals $4,500.",
  difficulty: "Medium"
},
{
  prompt: "A company has operating income of $55,000, interest expense of $4,000, and income tax expense of $9,000. What is net income?",
  options: [
    "$42,000",
    "$46,000",
    "$50,000",
    "$60,000"
  ],
  correct: "$42,000",
  explanation: "Net income equals operating income minus interest expense and tax expense: $55,000 - $4,000 - $9,000 = $42,000.",
  difficulty: "Medium"
},
{
  prompt: "A company receives $6,000 of cash in December for services to be performed evenly over December, January, and February. How much revenue should be recognized in December?",
  options: [
    "$0",
    "$2,000",
    "$4,000",
    "$6,000"
  ],
  correct: "$2,000",
  explanation: "Only one of the three service months has been earned by December 31, so recognized revenue is $2,000.",
  difficulty: "Hard"
},
{
  prompt: "A company started the year with $1,100 of supplies on hand, purchased $4,700 more during the year, and had $900 left at year-end. What supplies expense should be recognized?",
  options: [
    "$3,800",
    "$4,700",
    "$4,900",
    "$5,800"
  ],
  correct: "$4,900",
  explanation: "Supplies expense equals beginning supplies plus purchases minus ending supplies: $1,100 + $4,700 - $900 = $4,900.",
  difficulty: "Hard"
},
{
  prompt: "A company sells inventory for $15,000 cash. The inventory originally cost $9,200. Ignoring taxes, what is the effect on net income?",
  options: [
    "Net income increases by $5,800",
    "Net income increases by $9,200",
    "Net income increases by $15,000",
    "There is no effect on net income"
  ],
  correct: "Net income increases by $5,800",
  explanation: "Revenue of $15,000 is recognized along with $9,200 of cost of goods sold, so net income rises by $5,800.",
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
},
{
  prompt: "A company buys land for cash. What is the immediate balance sheet effect?",
  options: [
    "One asset increases and another asset decreases",
    "Assets and liabilities both increase",
    "Assets and equity both increase",
    "Liabilities decrease and equity increases"
  ],
  correct: "One asset increases and another asset decreases",
  explanation: "Land increases while cash decreases, so total assets can stay the same while their composition changes.",
  difficulty: "Easy"
},
{
  prompt: "If total assets are $92,000 and total equity is $37,000, what must total liabilities be?",
  options: [
    "$37,000",
    "$55,000",
    "$92,000",
    "$129,000"
  ],
  correct: "$55,000",
  explanation: "Using Assets = Liabilities + Equity, liabilities equal $92,000 - $37,000 = $55,000.",
  difficulty: "Easy"
},
{
  prompt: "Which of the following is most likely reported as a current liability?",
  options: [
    "Accounts payable",
    "Land",
    "Equipment",
    "Common stock"
  ],
  correct: "Accounts payable",
  explanation: "Accounts payable is generally expected to be settled within a short period, so it is a current liability.",
  difficulty: "Easy"
},
{
  prompt: "When a company collects cash from a note receivable at maturity, which balance sheet account usually increases?",
  options: [
    "Cash",
    "Unearned revenue",
    "Accounts payable",
    "Common stock"
  ],
  correct: "Cash",
  explanation: "Collection of a note receivable converts that receivable into cash.",
  difficulty: "Easy"
},
{
  prompt: "A company has current assets of $48,000 and current liabilities of $31,500. What is working capital?",
  options: [
    "$16,500",
    "$31,500",
    "$48,000",
    "$79,500"
  ],
  correct: "$16,500",
  explanation: "Working capital equals current assets minus current liabilities: $48,000 - $31,500 = $16,500.",
  difficulty: "Medium"
},
{
  prompt: "A company issues common stock for $25,000 cash. What is the immediate balance sheet effect?",
  options: [
    "Assets increase and equity increases",
    "Assets increase and liabilities increase",
    "Liabilities decrease and equity increases",
    "Only equity changes"
  ],
  correct: "Assets increase and equity increases",
  explanation: "Cash increases and common stock, which is part of equity, also increases.",
  difficulty: "Medium"
},
{
  prompt: "If a company signs a note payable to buy equipment, what happens to total assets and total liabilities immediately?",
  options: [
    "Both increase",
    "Both decrease",
    "Assets increase while liabilities decrease",
    "Assets decrease while liabilities increase"
  ],
  correct: "Both increase",
  explanation: "The equipment raises assets and the note payable raises liabilities at the same time.",
  difficulty: "Medium"
},
{
  prompt: "A company receives $12,000 cash in advance from a customer. Which balance sheet effect is most accurate immediately?",
  options: [
    "Assets increase and liabilities increase",
    "Assets increase and equity increases",
    "Liabilities decrease and equity increases",
    "Assets decrease and liabilities increase"
  ],
  correct: "Assets increase and liabilities increase",
  explanation: "Cash rises, but because the revenue is not yet earned, unearned revenue is recorded as a liability.",
  difficulty: "Hard"
},
{
  prompt: "A company has beginning equity of $80,000, reports net income of $14,000, and pays dividends of $5,000. What is ending equity if no owner investments or withdrawals other than dividends occur?",
  options: [
    "$89,000",
    "$91,000",
    "$94,000",
    "$99,000"
  ],
  correct: "$89,000",
  explanation: "Ending equity equals beginning equity plus net income minus dividends: $80,000 + $14,000 - $5,000 = $89,000.",
  difficulty: "Hard"
},
{
  prompt: "If accounts receivable is $40,000 and the allowance for uncollectible accounts is $2,300, what net realizable value should appear on the balance sheet?",
  options: [
    "$2,300",
    "$37,700",
    "$40,000",
    "$42,300"
  ],
  correct: "$37,700",
  explanation: "Net realizable value is accounts receivable minus the allowance: $40,000 - $2,300 = $37,700.",
  difficulty: "Hard"
}
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
},
{
  prompt: "Cash received from customers for services performed is usually classified as:",
  options: [
    "Operating inflow",
    "Investing inflow",
    "Financing inflow",
    "Non-cash activity"
  ],
  correct: "Operating inflow",
  explanation: "Cash generated from normal revenue-producing activities is typically an operating cash inflow.",
  difficulty: "Easy"
},
{
  prompt: "Purchasing a building with cash is usually shown as:",
  options: [
    "Operating outflow",
    "Investing outflow",
    "Financing inflow",
    "Financing outflow"
  ],
  correct: "Investing outflow",
  explanation: "A building is a long-term asset, so buying it with cash is an investing outflow.",
  difficulty: "Easy"
},
{
  prompt: "Borrowing cash by signing a note payable is usually reported as:",
  options: [
    "Operating inflow",
    "Investing inflow",
    "Financing inflow",
    "Operating outflow"
  ],
  correct: "Financing inflow",
  explanation: "Receiving cash from lenders is typically a financing activity.",
  difficulty: "Easy"
},
{
  prompt: "Paying cash for employee salaries is usually classified as:",
  options: [
    "Operating outflow",
    "Investing outflow",
    "Financing outflow",
    "Investing inflow"
  ],
  correct: "Operating outflow",
  explanation: "Salary payments are part of ordinary business operations, so they are operating cash outflows.",
  difficulty: "Easy"
},
{
  prompt: "A company reports net income of $36,000, depreciation expense of $5,000, and no other operating adjustments. What is net cash from operating activities under the indirect method?",
  options: [
    "$31,000",
    "$36,000",
    "$41,000",
    "$46,000"
  ],
  correct: "$41,000",
  explanation: "Under the indirect method, depreciation is added back to net income: $36,000 + $5,000 = $41,000.",
  difficulty: "Medium"
},
{
  prompt: "Under the indirect method, if inventory increases during the year, the adjustment to net income is usually:",
  options: [
    "An addition",
    "A subtraction",
    "No adjustment",
    "A financing inflow"
  ],
  correct: "A subtraction",
  explanation: "An increase in inventory often means cash was used to build inventory, so it reduces operating cash flow under the indirect method.",
  difficulty: "Medium"
},
{
  prompt: "A company issues common stock for $18,000 cash and later pays $4,000 of dividends. What is net cash from financing activities from just these two events?",
  options: [
    "$14,000 inflow",
    "$14,000 outflow",
    "$22,000 inflow",
    "$22,000 outflow"
  ],
  correct: "$14,000 inflow",
  explanation: "Financing cash flow equals the stock issuance inflow of $18,000 less the dividend outflow of $4,000, for a net inflow of $14,000.",
  difficulty: "Medium"
},
{
  prompt: "A company has net cash from operating activities of $24,000, net cash from investing activities of -$11,000, and net cash from financing activities of -$7,000. What is the net change in cash?",
  options: [
    "$6,000 increase",
    "$6,000 decrease",
    "$20,000 increase",
    "$42,000 increase"
  ],
  correct: "$6,000 increase",
  explanation: "Net change in cash equals $24,000 - $11,000 - $7,000 = $6,000 increase.",
  difficulty: "Hard"
},
{
  prompt: "Under the indirect method, if prepaid expenses increase during the year, what is the usual effect on operating cash flow?",
  options: [
    "It increases operating cash flow",
    "It decreases operating cash flow",
    "It has no effect",
    "It creates financing cash flow"
  ],
  correct: "It decreases operating cash flow",
  explanation: "An increase in prepaid expenses means cash was paid ahead of expense recognition, so operating cash flow is reduced.",
  difficulty: "Hard"
},
{
  prompt: "A company sells equipment for $12,000 cash. The equipment had a book value of $9,000, so a $3,000 gain is included in net income. Under the indirect method, what operating adjustment is needed for the gain?",
  options: [
    "Add back $3,000",
    "Subtract $3,000",
    "Add back $12,000",
    "No operating adjustment is needed"
  ],
  correct: "Subtract $3,000",
  explanation: "The $3,000 gain increased net income, but the full cash proceeds belong in investing activities, so the gain is subtracted in operating activities.",
  difficulty: "Hard"
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
    },
    {
      prompt: "A company receives $4,000 cash from a customer before earning any revenue. Which combination is most accurate immediately?",
      options: [
        "Cash rises, a liability rises, and there is no immediate revenue",
        "Revenue rises, cash rises, and equity rises immediately",
        "Expense rises, cash falls, and operating cash flow falls",
        "Inventory rises, liabilities fall, and investing cash flow rises"
      ],
      correct: "Cash rises, a liability rises, and there is no immediate revenue",
      explanation: "Cash collected in advance creates unearned revenue on the balance sheet, but revenue is not recognized until earned.",
      difficulty: "Easy"
    },
    {
      prompt: "A company collects $900 on an old account receivable. What is the most accurate multi-statement effect today?",
      options: [
        "Cash rises, accounts receivable falls, and no new revenue is recognized",
        "Revenue rises, cash rises, and operating cash flow rises from the sale today",
        "Expense rises, liabilities rise, and financing cash flow rises",
        "Inventory falls, cash rises, and investing cash flow rises"
      ],
      correct: "Cash rises, accounts receivable falls, and no new revenue is recognized",
      explanation: "The company is only collecting an already-recorded receivable, so the balance sheet changes but current-period revenue does not.",
      difficulty: "Easy"
    },
    {
      prompt: "A company buys equipment by borrowing money instead of paying cash. Which combination is correct immediately?",
      options: [
        "Equipment rises, liabilities rise, and there is no immediate cash flow",
        "Expense rises, cash falls, and operating cash flow falls",
        "Revenue rises, equity rises, and financing cash flow rises",
        "Cash rises, liabilities fall, and investing cash flow rises"
      ],
      correct: "Equipment rises, liabilities rise, and there is no immediate cash flow",
      explanation: "The transaction affects the balance sheet but does not involve cash at the moment, so it is a non-cash investing and financing activity.",
      difficulty: "Easy"
    },
    {
      prompt: "A company pays cash dividends to shareholders. Which combination is most accurate?",
      options: [
        "Cash falls, equity falls, and financing cash flow falls",
        "Revenue falls, cash falls, and operating cash flow falls",
        "Expense rises, liabilities rise, and financing cash flow rises",
        "Inventory falls, equity rises, and investing cash flow falls"
      ],
      correct: "Cash falls, equity falls, and financing cash flow falls",
      explanation: "Cash dividends reduce cash and equity and are commonly presented as financing outflows in this setting.",
      difficulty: "Easy"
    },
    {
      prompt: "A company records $2,000 of accrued wages at year-end. Which combination is most accurate?",
      options: [
        "Expense rises, liabilities rise, and cash does not change yet",
        "Cash rises, liabilities rise, and revenue rises",
        "Expense falls, cash falls, and operating cash flow falls",
        "Assets rise, equity rises, and investing cash flow rises"
      ],
      correct: "Expense rises, liabilities rise, and cash does not change yet",
      explanation: "Accruing wages records the expense now and creates a payable, but cash is not paid until later.",
      difficulty: "Medium"
    },
    {
      prompt: "A company purchases inventory on account. Which combination is most accurate immediately?",
      options: [
        "Inventory rises, accounts payable rises, and there is no immediate cash flow",
        "Expense rises, cash falls, and operating cash flow falls",
        "Revenue rises, receivables rise, and operating cash flow rises",
        "Cash rises, inventory falls, and financing cash flow rises"
      ],
      correct: "Inventory rises, accounts payable rises, and there is no immediate cash flow",
      explanation: "Buying inventory on account affects the balance sheet immediately but does not use cash until the payable is later paid.",
      difficulty: "Medium"
    },
    {
      prompt: "A company reports net income of $12,000, depreciation expense of $3,000, and no other operating adjustments. What is net cash from operating activities under the indirect method?",
      options: [
        "$9,000",
        "$12,000",
        "$15,000",
        "$24,000"
      ],
      correct: "$15,000",
      explanation: "Depreciation is a non-cash expense, so under the indirect method it is added back to net income.",
      difficulty: "Medium"
    },
    {
      prompt: "A company has beginning retained earnings of $20,000, net income of $7,500, and dividends of $2,000. Ignoring other equity changes, what is ending retained earnings?",
      options: [
        "$25,500",
        "$27,500",
        "$29,500",
        "$18,000"
      ],
      correct: "$25,500",
      explanation: "Ending retained earnings equals beginning retained earnings plus net income minus dividends: $20,000 + $7,500 - $2,000 = $25,500.",
      difficulty: "Medium"
    },
    {
      prompt: "A company makes a $10,000 credit sale. The inventory sold cost $6,200. Which statement combination is most accurate immediately?",
      options: [
        "Revenue rises, cost of goods sold rises, accounts receivable rises, inventory falls, and there is no immediate cash inflow",
        "Cash rises, revenue rises, and investing cash flow rises",
        "Expense rises, debt rises, and financing cash flow rises",
        "Only the balance sheet changes because the sale was on credit"
      ],
      correct: "Revenue rises, cost of goods sold rises, accounts receivable rises, inventory falls, and there is no immediate cash inflow",
      explanation: "A credit sale affects both the income statement and balance sheet immediately, while the cash flow statement does not show a cash inflow until collection happens.",
      difficulty: "Hard"
    },
    {
      prompt: "A company sells equipment for cash at a gain. Which statement combination is most accurate under the indirect method?",
      options: [
        "Cash rises, investing cash flow rises, net income includes the gain, and the gain is subtracted in operating activities",
        "Cash falls, financing cash flow falls, and the gain is added to operating activities",
        "Revenue rises, accounts receivable rises, and there is no investing effect",
        "Only equity changes because gains never affect cash"
      ],
      correct: "Cash rises, investing cash flow rises, net income includes the gain, and the gain is subtracted in operating activities",
      explanation: "The cash proceeds belong in investing activities, while the gain is removed from operating cash flow under the indirect method because it already boosted net income.",
      difficulty: "Hard"
    },
    {
      prompt: "A company prepays one year of insurance in cash on the first day of the year. What is most accurate on that date?",
      options: [
        "Cash falls, a prepaid asset rises, and there is an operating cash outflow but no full immediate expense",
        "Expense rises for the full amount, cash falls, and liabilities rise",
        "Revenue rises, cash rises, and operating cash flow rises",
        "Inventory rises, cash falls, and investing cash flow falls"
      ],
      correct: "Cash falls, a prepaid asset rises, and there is an operating cash outflow but no full immediate expense",
      explanation: "The payment uses cash right away, but the insurance cost is recognized as expense over time, so a prepaid asset is recorded first.",
      difficulty: "Hard"
    }
  ]
};
