const QUESTION_BANK = {
  income: [
    {
      prompt: "A customer pays $8,400 in cash to settle an account receivable from a sale recorded last month. What is today's income statement effect?",
      options: [
        "Revenue increases by $8,400",
        "Expense increases by $8,400",
        "No income statement effect today",
        "Net income decreases by $8,400"
      ],
      correct: "No income statement effect today",
      explanation: "The revenue was recognized when the sale was made. Collecting the receivable later does not create new revenue.",
      difficulty: "Easy"
    },
    {
      prompt: "A company prepays $24,000 of insurance on July 1 for a 12-month policy. What is the immediate income statement effect on July 1?",
      options: [
        "Insurance expense increases by $24,000",
        "No immediate full expense is recognized",
        "Revenue increases by $24,000",
        "Net income falls by $12,000"
      ],
      correct: "No immediate full expense is recognized",
      explanation: "The payment is recorded as a prepaid asset first and expensed over time.",
      difficulty: "Easy"
    },
    {
      prompt: "A company has beginning inventory of $42,000, net purchases of $118,000, and ending inventory of $37,000. What is cost of goods sold?",
      options: [
        "$79,000",
        "$118,000",
        "$123,000",
        "$160,000"
      ],
      correct: "$123,000",
      explanation: "COGS = beginning inventory + net purchases - ending inventory = 42,000 + 118,000 - 37,000.",
      difficulty: "Easy"
    },
    {
      prompt: "A company reports gross sales of $310,000, sales returns of $9,000, and sales discounts of $4,000. What is net sales?",
      options: [
        "$297,000",
        "$301,000",
        "$305,000",
        "$323,000"
      ],
      correct: "$297,000",
      explanation: "Net sales equals gross sales minus returns and discounts: 310,000 - 9,000 - 4,000.",
      difficulty: "Easy"
    },
    {
      prompt: "A company earns $18,000 of consulting revenue in December but will not bill the client until January. What should be recognized in December?",
      options: [
        "No revenue until cash is collected",
        "Revenue of $18,000",
        "Only a cash increase",
        "A liability of $18,000"
      ],
      correct: "Revenue of $18,000",
      explanation: "Under accrual accounting, revenue is recognized when earned, not when billed or collected.",
      difficulty: "Easy"
    },
    {
      prompt: "A company receives $27,000 on December 1 for services to be performed evenly over December, January, and February. How much revenue should be recognized in December?",
      options: [
        "$0",
        "$9,000",
        "$18,000",
        "$27,000"
      ],
      correct: "$9,000",
      explanation: "Only one of the three service months has been earned by December 31.",
      difficulty: "Easy"
    },
    {
      prompt: "A company started the year with $2,600 of supplies, purchased $9,400 more, and had $1,700 remaining at year-end. What supplies expense should be recognized?",
      options: [
        "$8,500",
        "$10,300",
        "$12,000",
        "$13,700"
      ],
      correct: "$10,300",
      explanation: "Supplies expense = beginning supplies + purchases - ending supplies = 2,600 + 9,400 - 1,700.",
      difficulty: "Medium"
    },
    {
      prompt: "A company pays $30,000 on October 1 for a 12-month software subscription. How much subscription expense should be recognized by December 31?",
      options: [
        "$2,500",
        "$5,000",
        "$7,500",
        "$30,000"
      ],
      correct: "$7,500",
      explanation: "Three months have expired, so expense is 3/12 of $30,000.",
      difficulty: "Medium"
    },
    {
      prompt: "A company makes a $64,000 sale on credit. The inventory sold cost $39,000. Ignoring taxes, what is the immediate effect on net income?",
      options: [
        "Net income increases by $25,000",
        "Net income increases by $39,000",
        "Net income increases by $64,000",
        "There is no effect on net income until cash is collected"
      ],
      correct: "Net income increases by $25,000",
      explanation: "Net income rises by revenue minus cost of goods sold: 64,000 - 39,000.",
      difficulty: "Medium"
    },
    {
      prompt: "A company has operating income of $91,000, interest expense of $8,000, and income tax expense of $19,000. What is net income?",
      options: [
        "$64,000",
        "$72,000",
        "$83,000",
        "$110,000"
      ],
      correct: "$64,000",
      explanation: "Net income = operating income - interest expense - income tax expense = 91,000 - 8,000 - 19,000.",
      difficulty: "Medium"
    },
    {
      prompt: "Nine months ago, a company collected $48,000 in advance for a 12-month service contract and recorded it as unearned revenue. How much revenue should be recognized by year-end?",
      options: [
        "$12,000",
        "$24,000",
        "$36,000",
        "$48,000"
      ],
      correct: "$36,000",
      explanation: "Nine of the twelve service months have been earned, so recognized revenue is 9/12 of $48,000.",
      difficulty: "Medium"
    },
    {
      prompt: "A company reports gross profit of $420,000 and operating expenses of $287,000. It also has a gain on sale of equipment of $6,000 and interest expense of $11,000. Ignoring taxes, what is net income?",
      options: [
        "$122,000",
        "$128,000",
        "$133,000",
        "$139,000"
      ],
      correct: "$128,000",
      explanation: "Operating income is 420,000 - 287,000 = 133,000. Net income is then 133,000 + 6,000 - 11,000.",
      difficulty: "Medium"
    },
    {
      prompt: "A company reports net income before year-end adjustments of $126,000. Adjustments needed are supplies expense $8,400, insurance expense $3,600, revenue earned from unearned revenue $5,100, wages expense accrued $4,700, and interest expense accrued $1,400. What is adjusted net income?",
      options: [
        "$113,000",
        "$117,800",
        "$122,500",
        "$131,100"
      ],
      correct: "$113,000",
      explanation: "Adjusted net income = 126,000 - 8,400 - 3,600 + 5,100 - 4,700 - 1,400.",
      difficulty: "Hard"
    },
    {
      prompt: "A company reports gross sales of $920,000, sales returns of $25,000, sales discounts of $7,000, cost of goods sold of $515,000, selling expense of $128,000, administrative expense of $74,000, interest expense of $16,000, and income tax expense of $41,000. What is net income?",
      options: [
        "$114,000",
        "$121,000",
        "$137,000",
        "$155,000"
      ],
      correct: "$114,000",
      explanation: "Net sales are 888,000. Gross profit is 373,000. Operating income is 171,000. Net income is 171,000 - 16,000 - 41,000.",
      difficulty: "Hard"
    },
    {
      prompt: "If ending inventory is understated by $12,000, what is the effect on the current year's income statement?",
      options: [
        "Cost of goods sold is understated and net income is overstated",
        "Cost of goods sold is overstated and net income is understated",
        "Both cost of goods sold and net income are overstated",
        "There is no income statement effect"
      ],
      correct: "Cost of goods sold is overstated and net income is understated",
      explanation: "Lower ending inventory makes cost of goods sold too high, which pushes net income down.",
      difficulty: "Hard"
    },
    {
      prompt: "A company collected $72,000 in advance for a six-month contract on November 1 and recorded it as unearned revenue. By December 31, how much remains unearned?",
      options: [
        "$24,000",
        "$36,000",
        "$48,000",
        "$72,000"
      ],
      correct: "$48,000",
      explanation: "Two of the six months have been earned, so $24,000 is recognized as revenue and $48,000 remains unearned.",
      difficulty: "Hard"
    },
    {
      prompt: "A company sells equipment for $19,000 cash. The equipment's book value is $24,000. Ignoring taxes, what is the income statement effect?",
      options: [
        "A $5,000 gain",
        "A $5,000 loss",
        "Revenue of $19,000",
        "No income statement effect"
      ],
      correct: "A $5,000 loss",
      explanation: "Selling below book value creates a loss equal to 24,000 - 19,000.",
      difficulty: "Hard"
    },
    {
      prompt: "A company buys equipment by signing a note payable. At year-end it records $6,000 of depreciation on that equipment. What is the year-end income statement effect from these two events combined?",
      options: [
        "No effect because no cash was paid",
        "Expense increases by $6,000",
        "Revenue increases by $6,000",
        "Expense increases by the full cost of the equipment"
      ],
      correct: "Expense increases by $6,000",
      explanation: "Buying the equipment is capitalized, but depreciation creates expense as the asset is used.",
      difficulty: "Hard"
    }
  ],

  balance: [
    {
      prompt: "A company acquires equipment by signing a $95,000 note payable instead of paying cash. What happens immediately?",
      options: [
        "Assets increase and liabilities increase",
        "Assets increase and equity increases",
        "Cash decreases and equity decreases",
        "Only liabilities increase"
      ],
      correct: "Assets increase and liabilities increase",
      explanation: "Equipment increases assets and the note payable increases liabilities.",
      difficulty: "Easy"
    },
    {
      prompt: "A company receives $18,000 cash from a customer before providing any services. What account is most likely credited?",
      options: [
        "Accounts receivable",
        "Unearned revenue",
        "Retained earnings",
        "Sales revenue"
      ],
      correct: "Unearned revenue",
      explanation: "Cash received before earning revenue creates a liability until the service is performed.",
      difficulty: "Easy"
    },
    {
      prompt: "A company collects $12,500 from a customer on an old account receivable. What happens on the balance sheet?",
      options: [
        "Cash increases and accounts receivable decreases",
        "Cash decreases and revenue increases",
        "Liabilities decrease and equity increases",
        "Inventory increases and cash decreases"
      ],
      correct: "Cash increases and accounts receivable decreases",
      explanation: "One asset rises and another asset falls. Total assets stay the same.",
      difficulty: "Easy"
    },
    {
      prompt: "A company begins the year with equity of $240,000, reports net income of $58,000, and pays dividends of $21,000. If no stock is issued, what is ending equity?",
      options: [
        "$203,000",
        "$261,000",
        "$277,000",
        "$298,000"
      ],
      correct: "$277,000",
      explanation: "Ending equity = beginning equity + net income - dividends.",
      difficulty: "Easy"
    },
    {
      prompt: "Accounts receivable is $84,000 and the allowance for uncollectible accounts is $3,600. What net realizable value should appear on the balance sheet?",
      options: [
        "$3,600",
        "$80,400",
        "$84,000",
        "$87,600"
      ],
      correct: "$80,400",
      explanation: "Net realizable value equals receivables minus the allowance.",
      difficulty: "Easy"
    },
    {
      prompt: "A company has current assets of $146,000 and current liabilities of $89,000. What is working capital?",
      options: [
        "$57,000",
        "$89,000",
        "$146,000",
        "$235,000"
      ],
      correct: "$57,000",
      explanation: "Working capital equals current assets minus current liabilities.",
      difficulty: "Easy"
    },
    {
      prompt: "If total assets decrease by $14,000 and owners' equity increases by $5,000, what must happen to liabilities?",
      options: [
        "Liabilities decrease by $9,000",
        "Liabilities decrease by $19,000",
        "Liabilities increase by $9,000",
        "Liabilities increase by $19,000"
      ],
      correct: "Liabilities decrease by $19,000",
      explanation: "Using Assets = Liabilities + Equity, liabilities must absorb the full asset decrease plus the equity increase.",
      difficulty: "Medium"
    },
    {
      prompt: "If ending inventory is understated by $11,000, what happens to total assets and total equity at year-end?",
      options: [
        "Both are understated",
        "Both are overstated",
        "Assets are understated and equity is overstated",
        "Assets are unchanged and equity is understated"
      ],
      correct: "Both are understated",
      explanation: "Inventory is an asset, and understating it also understates net income and retained earnings.",
      difficulty: "Medium"
    },
    {
      prompt: "Allowance for uncollectible accounts is best classified as:",
      options: [
        "A current liability",
        "A contra asset",
        "A revenue account",
        "A contra liability"
      ],
      correct: "A contra asset",
      explanation: "It offsets accounts receivable and normally carries a credit balance.",
      difficulty: "Medium"
    },
    {
      prompt: "A company has current assets of $120,000 and current liabilities of $60,000. It pays $15,000 of accounts payable with cash. What is the current ratio after the payment?",
      options: [
        "1.75 to 1",
        "2.00 to 1",
        "2.33 to 1",
        "2.67 to 1"
      ],
      correct: "2.33 to 1",
      explanation: "Current assets become 105,000 and current liabilities become 45,000. The new current ratio is 105,000 / 45,000.",
      difficulty: "Medium"
    },
    {
      prompt: "A 90-day note receivable is usually reported as which type of account?",
      options: [
        "Current asset",
        "Long-term asset",
        "Current liability",
        "Equity"
      ],
      correct: "Current asset",
      explanation: "Because it is expected to be collected within a short period, it is usually current.",
      difficulty: "Medium"
    },
    {
      prompt: "When a company records depreciation expense, which balance sheet account is directly increased?",
      options: [
        "Equipment",
        "Cash",
        "Accumulated depreciation",
        "Accounts payable"
      ],
      correct: "Accumulated depreciation",
      explanation: "Depreciation is recorded through the contra asset account accumulated depreciation.",
      difficulty: "Medium"
    },
    {
      prompt: "A company has total assets of $390,000 and total liabilities of $148,000. Common stock is $170,000. What is retained earnings?",
      options: [
        "$72,000",
        "$94,000",
        "$148,000",
        "$242,000"
      ],
      correct: "$72,000",
      explanation: "Total equity is 390,000 - 148,000 = 242,000. Retained earnings are 242,000 - 170,000.",
      difficulty: "Hard"
    },
    {
      prompt: "Cash is $21,000, accounts receivable is $33,000, inventory is $46,000, prepaid insurance is $4,000, equipment is $125,000, accumulated depreciation is $29,000, accounts payable is $27,000, wages payable is $9,000, note payable is $74,000, and common stock is $60,000. What is retained earnings?",
      options: [
        "$30,000",
        "$31,000",
        "$74,000",
        "$130,000"
      ],
      correct: "$30,000",
      explanation: "Total assets are 200,000. Total liabilities are 110,000. Total equity is 90,000, so retained earnings are 90,000 - 60,000.",
      difficulty: "Hard"
    },
    {
      prompt: "A company buys land for $90,000 by paying $25,000 cash and signing a $65,000 note payable. What is the immediate effect on the accounting equation?",
      options: [
        "Assets increase by $65,000 and liabilities increase by $65,000",
        "Assets increase by $90,000 and liabilities increase by $90,000",
        "Assets stay the same and liabilities increase by $65,000",
        "Assets increase by $90,000 and equity decreases by $25,000"
      ],
      correct: "Assets increase by $65,000 and liabilities increase by $65,000",
      explanation: "Land rises by 90,000 and cash falls by 25,000, so total assets rise by 65,000. Liabilities rise by the 65,000 note.",
      difficulty: "Hard"
    },
    {
      prompt: "A company begins the year with assets of $500,000, liabilities of $220,000, and equity of $280,000. During the year it issues stock for $40,000, earns net income of $52,000, and pays dividends of $18,000. If liabilities are unchanged except for a $30,000 note repayment, what are ending liabilities and equity?",
      options: [
        "Liabilities $190,000 and equity $354,000",
        "Liabilities $220,000 and equity $354,000",
        "Liabilities $190,000 and equity $324,000",
        "Liabilities $250,000 and equity $354,000"
      ],
      correct: "Liabilities $190,000 and equity $354,000",
      explanation: "Liabilities drop to 190,000 after the repayment. Equity becomes 280,000 + 40,000 + 52,000 - 18,000.",
      difficulty: "Hard"
    },
    {
      prompt: "A company writes off a specific $4,800 account receivable against the allowance for uncollectible accounts. What is the immediate effect on total assets?",
      options: [
        "Total assets increase by $4,800",
        "Total assets decrease by $4,800",
        "Total assets do not change",
        "Total assets decrease by $9,600"
      ],
      correct: "Total assets do not change",
      explanation: "Accounts receivable and the allowance both decline by the same amount, leaving net realizable value unchanged.",
      difficulty: "Hard"
    },
    {
      prompt: "A company declares and pays a $14,000 cash dividend in the same period. What is the balance sheet effect after payment?",
      options: [
        "Assets decrease and equity decreases",
        "Assets decrease and liabilities increase",
        "Liabilities decrease and equity increases",
        "Only liabilities decrease"
      ],
      correct: "Assets decrease and equity decreases",
      explanation: "Cash falls and dividends reduce retained earnings, which is part of equity.",
      difficulty: "Hard"
    }
  ],

  cashflow: [
    {
      prompt: "Why is depreciation expense added back to net income under the indirect method?",
      options: [
        "Because it is a financing inflow",
        "Because it is a non-cash expense",
        "Because it increases accounts payable",
        "Because it creates investing cash flow"
      ],
      correct: "Because it is a non-cash expense",
      explanation: "Depreciation reduces net income but does not use current-period cash.",
      difficulty: "Easy"
    },
    {
      prompt: "Under the indirect method, an increase in accounts receivable usually does what to operating cash flow?",
      options: [
        "Increases it",
        "Decreases it",
        "Has no effect",
        "Moves it to financing activities"
      ],
      correct: "Decreases it",
      explanation: "An increase in receivables means revenue exceeded cash collections, so it reduces operating cash flow.",
      difficulty: "Easy"
    },
    {
      prompt: "Under the indirect method, an increase in accounts payable usually does what to operating cash flow?",
      options: [
        "Increases it",
        "Decreases it",
        "Has no effect",
        "Creates an investing inflow"
      ],
      correct: "Increases it",
      explanation: "If payables increase, cash payments lag behind expense recognition, which boosts operating cash flow.",
      difficulty: "Easy"
    },
    {
      prompt: "A company issues $140,000 of bonds and repays $95,000 of old bonds in the same year. How should these financing cash flows be shown?",
      options: [
        "A single net inflow of $45,000",
        "A single net outflow of $45,000",
        "An inflow of $140,000 and an outflow of $95,000",
        "A $45,000 gain in operating activities"
      ],
      correct: "An inflow of $140,000 and an outflow of $95,000",
      explanation: "The statement of cash flows normally reports the gross financing inflow and outflow separately.",
      difficulty: "Easy"
    },
    {
      prompt: "A company sells equipment for cash at a gain. Under the indirect method, what happens to the gain in the operating section?",
      options: [
        "It is added back to net income",
        "It is subtracted from net income",
        "It is reported as a financing inflow",
        "It is ignored because cash was received"
      ],
      correct: "It is subtracted from net income",
      explanation: "The gain increased net income, but the cash proceeds belong in investing activities, so the gain is removed from operating cash flow.",
      difficulty: "Easy"
    },
    {
      prompt: "A company has net cash from operating activities of $74,000, net cash from investing activities of -$31,000, and net cash from financing activities of -$18,000. What is the net change in cash?",
      options: [
        "$25,000 increase",
        "$25,000 decrease",
        "$43,000 increase",
        "$123,000 increase"
      ],
      correct: "$25,000 increase",
      explanation: "Net change in cash is 74,000 - 31,000 - 18,000.",
      difficulty: "Easy"
    },
    {
      prompt: "A company reports net income of $68,000, depreciation expense of $9,000, a decrease in accounts receivable of $6,000, an increase in inventory of $8,000, and an increase in accounts payable of $5,000. What is net cash from operating activities?",
      options: [
        "$70,000",
        "$80,000",
        "$88,000",
        "$96,000"
      ],
      correct: "$80,000",
      explanation: "Operating cash flow = 68,000 + 9,000 + 6,000 - 8,000 + 5,000.",
      difficulty: "Medium"
    },
    {
      prompt: "Under the indirect method, if prepaid expenses increase during the year, the adjustment to net income is usually:",
      options: [
        "An addition",
        "A subtraction",
        "No adjustment",
        "A financing inflow"
      ],
      correct: "A subtraction",
      explanation: "An increase in prepaid expenses means cash was paid ahead of expense recognition.",
      difficulty: "Medium"
    },
    {
      prompt: "A company sells equipment with a book value of $14,000 for a $2,000 gain. How much cash did the company receive, and in which section is it reported?",
      options: [
        "$12,000 in operating activities",
        "$12,000 in investing activities",
        "$16,000 in investing activities",
        "$16,000 in financing activities"
      ],
      correct: "$16,000 in investing activities",
      explanation: "Cash proceeds equal book value plus the gain, and cash from selling equipment is an investing inflow.",
      difficulty: "Medium"
    },
    {
      prompt: "A company issues common stock for $22,000 cash, repays $9,000 of note principal, and pays $5,000 of dividends. What is net cash from financing activities from these events?",
      options: [
        "$8,000 inflow",
        "$8,000 outflow",
        "$18,000 inflow",
        "$36,000 outflow"
      ],
      correct: "$8,000 inflow",
      explanation: "Net financing cash flow is 22,000 - 9,000 - 5,000.",
      difficulty: "Medium"
    },
    {
      prompt: "Purchasing a building with cash is usually classified as:",
      options: [
        "Operating outflow",
        "Investing outflow",
        "Financing inflow",
        "Financing outflow"
      ],
      correct: "Investing outflow",
      explanation: "A building is a long-term asset, so buying it with cash is an investing activity.",
      difficulty: "Medium"
    },
    {
      prompt: "A company acquires equipment by signing a note payable instead of paying cash. How is this reported on the statement of cash flows?",
      options: [
        "As an operating outflow",
        "As an investing outflow",
        "As a financing inflow",
        "As a non-cash investing and financing activity"
      ],
      correct: "As a non-cash investing and financing activity",
      explanation: "The transaction affects assets and liabilities but does not involve cash at the time of purchase.",
      difficulty: "Medium"
    },
    {
      prompt: "A company reports net income of $92,000, depreciation expense of $14,000, a gain on sale of equipment of $5,000, an increase in accounts receivable of $7,000, a decrease in inventory of $11,000, an increase in prepaid insurance of $3,000, an increase in accounts payable of $8,000, and a decrease in wages payable of $4,000. What is net cash from operating activities?",
      options: [
        "$96,000",
        "$106,000",
        "$114,000",
        "$126,000"
      ],
      correct: "$106,000",
      explanation: "Operating cash flow = 92,000 + 14,000 - 5,000 - 7,000 + 11,000 - 3,000 + 8,000 - 4,000.",
      difficulty: "Hard"
    },
    {
      prompt: "Beginning retained earnings are $84,000, ending retained earnings are $101,000, and net income is $32,000. If no stock transactions affect retained earnings, how much cash dividend was paid?",
      options: [
        "$15,000",
        "$17,000",
        "$32,000",
        "$49,000"
      ],
      correct: "$15,000",
      explanation: "Dividends = beginning retained earnings + net income - ending retained earnings.",
      difficulty: "Hard"
    },
    {
      prompt: "A company sold equipment with a book value of $28,000 at a $4,000 loss, purchased new equipment for $65,000, and purchased land for $24,000. What is net cash from investing activities?",
      options: [
        "$53,000 outflow",
        "$57,000 outflow",
        "$61,000 outflow",
        "$117,000 outflow"
      ],
      correct: "$61,000 outflow",
      explanation: "Selling at a $4,000 loss means proceeds were $24,000. Net investing cash flow is 24,000 - 65,000 - 24,000.",
      difficulty: "Hard"
    },
    {
      prompt: "A company reports net cash from operating activities of $106,000, net cash from investing activities of -$61,000, and net cash from financing activities of -$19,000. If beginning cash is $44,000, what is ending cash?",
      options: [
        "$26,000",
        "$44,000",
        "$70,000",
        "$150,000"
      ],
      correct: "$70,000",
      explanation: "Net change in cash is 26,000, so ending cash is 44,000 + 26,000.",
      difficulty: "Hard"
    },
    {
      prompt: "Under this game's intro-accounting treatment, cash paid for interest is usually classified as:",
      options: [
        "Operating activity",
        "Investing activity",
        "Financing activity",
        "A non-cash disclosure"
      ],
      correct: "Operating activity",
      explanation: "Cash paid for interest is commonly treated as an operating cash outflow in this setting.",
      difficulty: "Hard"
    },
    {
      prompt: "Which item would appear as a subtraction in the operating section under the indirect method?",
      options: [
        "Depreciation expense",
        "Increase in accounts payable",
        "Gain on sale of equipment",
        "Decrease in inventory"
      ],
      correct: "Gain on sale of equipment",
      explanation: "The gain increased net income but belongs with investing cash flows, so it is subtracted in operating activities.",
      difficulty: "Hard"
    }
  ],

  combined: [
    {
      prompt: "A company receives $30,000 cash from a customer before performing any services. Which statement effects are most accurate immediately?",
      options: [
        "Cash rises, a liability rises, and no revenue is recognized yet",
        "Cash rises, revenue rises, and equity rises immediately",
        "Cash falls, expense rises, and operating cash flow falls",
        "Inventory rises, liabilities fall, and investing cash flow rises"
      ],
      correct: "Cash rises, a liability rises, and no revenue is recognized yet",
      explanation: "Cash collected in advance creates unearned revenue on the balance sheet, not immediate revenue.",
      difficulty: "Easy"
    },
    {
      prompt: "A customer pays $9,600 on an old account receivable. Which statement effects are most accurate at collection time?",
      options: [
        "Cash rises, accounts receivable falls, no new revenue is recognized, and cash flow is an operating inflow",
        "Revenue rises, cash rises, and operating cash flow rises from a new sale",
        "Expense rises, liabilities rise, and financing cash flow rises",
        "Inventory falls, cash rises, and investing cash flow rises"
      ],
      correct: "Cash rises, accounts receivable falls, no new revenue is recognized, and cash flow is an operating inflow",
      explanation: "The income statement is unaffected because the sale happened earlier, but the cash collection still appears in operating cash flow.",
      difficulty: "Easy"
    },
    {
      prompt: "A company acquires equipment by signing a note payable instead of paying cash. Which combination is correct immediately?",
      options: [
        "Equipment rises, liabilities rise, and there is no immediate cash flow",
        "Expense rises, cash falls, and operating cash flow falls",
        "Revenue rises, equity rises, and financing cash flow rises",
        "Cash rises, liabilities fall, and investing cash flow rises"
      ],
      correct: "Equipment rises, liabilities rise, and there is no immediate cash flow",
      explanation: "The transaction affects the balance sheet but is a non-cash investing and financing activity.",
      difficulty: "Easy"
    },
    {
      prompt: "A company makes a $70,000 credit sale. The inventory sold cost $43,000. Which statement combination is most accurate immediately?",
      options: [
        "Revenue rises, cost of goods sold rises, accounts receivable rises, inventory falls, and there is no immediate cash inflow",
        "Cash rises, revenue rises, and investing cash flow rises",
        "Expense rises, debt rises, and financing cash flow rises",
        "Only the balance sheet changes because the sale was on credit"
      ],
      correct: "Revenue rises, cost of goods sold rises, accounts receivable rises, inventory falls, and there is no immediate cash inflow",
      explanation: "A credit sale affects the income statement and balance sheet right away, but cash is collected later.",
      difficulty: "Medium"
    },
    {
      prompt: "A company records $12,000 of accrued wages at year-end. Which statement effects are most accurate?",
      options: [
        "Expense rises, liabilities rise, and cash does not change yet",
        "Cash rises, liabilities rise, and revenue rises",
        "Expense falls, cash falls, and financing cash flow falls",
        "Assets rise, equity rises, and investing cash flow rises"
      ],
      correct: "Expense rises, liabilities rise, and cash does not change yet",
      explanation: "Accruing wages recognizes the expense now and creates a payable until cash is paid later.",
      difficulty: "Medium"
    },
    {
      prompt: "A company prepays one year of insurance in cash. Which combination is most accurate on the payment date?",
      options: [
        "Cash falls, a prepaid asset rises, operating cash flow falls, and there is no full immediate expense",
        "Expense rises for the full amount, cash falls, and liabilities rise",
        "Revenue rises, cash rises, and operating cash flow rises",
        "Inventory rises, cash falls, and investing cash flow falls"
      ],
      correct: "Cash falls, a prepaid asset rises, operating cash flow falls, and there is no full immediate expense",
      explanation: "The cash leaves immediately, but the insurance cost is recognized as expense over time.",
      difficulty: "Medium"
    },
    {
      prompt: "A company records depreciation expense for the year. Which statement combination is most accurate under the indirect method?",
      options: [
        "Net income falls, accumulated depreciation rises, and depreciation is added back in operating cash flow",
        "Revenue rises, liabilities rise, and financing cash flow rises",
        "Cash falls, assets fall, and investing cash flow falls",
        "No statement changes because depreciation is non-cash"
      ],
      correct: "Net income falls, accumulated depreciation rises, and depreciation is added back in operating cash flow",
      explanation: "Depreciation lowers net income and asset carrying value, but it is added back in the indirect operating section because it is non-cash.",
      difficulty: "Medium"
    },
    {
      prompt: "A company pays a $14,000 cash dividend. Which statement effects are most accurate?",
      options: [
        "Cash falls, equity falls, and financing cash flow falls",
        "Revenue falls, cash falls, and operating cash flow falls",
        "Expense rises, liabilities rise, and financing cash flow rises",
        "Inventory falls, equity rises, and investing cash flow falls"
      ],
      correct: "Cash falls, equity falls, and financing cash flow falls",
      explanation: "Dividends reduce cash and retained earnings and are commonly shown as financing outflows in this game.",
      difficulty: "Medium"
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
      explanation: "The cash proceeds belong in investing activities, while the gain must be removed from operating cash flow under the indirect method.",
      difficulty: "Hard"
    },
    {
      prompt: "A company purchases inventory on account. Which statement combination is most accurate immediately?",
      options: [
        "Inventory rises, accounts payable rises, there is no immediate expense, and there is no immediate cash flow",
        "Expense rises, cash falls, and operating cash flow falls",
        "Revenue rises, receivables rise, and operating cash flow rises",
        "Cash rises, inventory falls, and financing cash flow rises"
      ],
      correct: "Inventory rises, accounts payable rises, there is no immediate expense, and there is no immediate cash flow",
      explanation: "The purchase affects the balance sheet first. Expense comes later when the inventory is sold and cash leaves later when the payable is paid.",
      difficulty: "Hard"
    },
    {
      prompt: "A company receives $24,000 on November 1 for a six-month service contract. By December 31, which combination is most accurate?",
      options: [
        "Cash has increased by $24,000, revenue recognized is $8,000, unearned revenue remaining is $16,000, and operating cash flow includes the full $24,000 receipt",
        "Cash has increased by $8,000, revenue recognized is $24,000, and no liability remains",
        "Cash has not changed, revenue recognized is $16,000, and investing cash flow increases",
        "Cash has increased by $24,000, no revenue is recognized, and all $24,000 remains in equity"
      ],
      correct: "Cash has increased by $24,000, revenue recognized is $8,000, unearned revenue remaining is $16,000, and operating cash flow includes the full $24,000 receipt",
      explanation: "Two of the six service months have been earned by year-end, but the full cash receipt already occurred.",
      difficulty: "Hard"
    },
    {
      prompt: "A company begins the year with retained earnings of $60,000, reports net income of $27,000, pays dividends of $9,000, and issues common stock for cash. Ignoring other changes, what is ending retained earnings?",
      options: [
        "$51,000",
        "$78,000",
        "$87,000",
        "$96,000"
      ],
      correct: "$78,000",
      explanation: "Stock issuance affects contributed capital, not retained earnings. Ending retained earnings are 60,000 + 27,000 - 9,000.",
      difficulty: "Hard"
    }
  ]
};
