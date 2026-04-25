const BUILD_QUESTIONS = {
  income: [
    {
      prompt: "Ridge Company reported gross sales of 620,000, sales returns of 20,000, sales discounts of 5,000, cost of goods sold of 355,000, selling expense of 96,000, and administrative expense of 54,000. Build the income statement and calculate the missing lines.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Gross Sales", expectedValue: 620000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Sales Returns", expectedValue: 20000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Sales Discounts", expectedValue: 5000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Sales", expectedValue: 595000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cost of Goods Sold", expectedValue: 355000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gross Profit", expectedValue: 240000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Selling Expense", expectedValue: 96000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Administrative Expense", expectedValue: 54000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Operating Expenses", expectedValue: 150000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Operating Income", expectedValue: 90000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Nova Services reported billed service revenue of 180,000 and accrued service revenue of 12,000. Expenses were salaries 74,000, utilities 11,000, depreciation 9,000, and insurance expense 4,000. Build the income statement and calculate total revenue, total expenses, and net income.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Service Revenue", expectedValue: 180000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accrued Revenue Earned", expectedValue: 12000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Revenue", expectedValue: 192000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Salaries Expense", expectedValue: 74000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Utilities Expense", expectedValue: 11000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 9000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Insurance Expense", expectedValue: 4000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Expenses", expectedValue: 98000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 94000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Apex Company reports net income before adjustments of 128,400. Year-end adjustments are supplies used 6,800, insurance expired 4,200, revenue earned from unearned revenue 3,100, wages accrued 2,600, and interest accrued 900. Build the statement excerpt and calculate adjusted net income.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Net Income Before Adjustments", expectedValue: 128400, labelEditable: true, valueEditable: true },
        { expectedLabel: "Supplies Expense", expectedValue: 6800, labelEditable: true, valueEditable: true },
        { expectedLabel: "Insurance Expense", expectedValue: 4200, labelEditable: true, valueEditable: true },
        { expectedLabel: "Revenue Earned", expectedValue: 3100, labelEditable: true, valueEditable: true },
        { expectedLabel: "Wages Expense", expectedValue: 2600, labelEditable: true, valueEditable: true },
        { expectedLabel: "Interest Expense", expectedValue: 900, labelEditable: true, valueEditable: true },
        { expectedLabel: "Adjusted Net Income", expectedValue: 117000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Summit Company reported gross sales of 910,000, sales returns of 30,000, sales discounts of 5,000, cost of goods sold of 520,000, selling expense of 110,000, administrative expense of 75,000, interest expense of 18,000, and income tax expense of 42,000. Build the income statement and calculate the subtotals.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Gross Sales", expectedValue: 910000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Sales Returns", expectedValue: 30000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Sales Discounts", expectedValue: 5000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Sales", expectedValue: 875000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cost of Goods Sold", expectedValue: 520000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gross Profit", expectedValue: 355000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Selling Expense", expectedValue: 110000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Administrative Expense", expectedValue: 75000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Operating Expenses", expectedValue: 185000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Operating Income", expectedValue: 170000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Interest Expense", expectedValue: 18000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Income Tax Expense", expectedValue: 42000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 110000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Beacon Services collected 240,000 for annual service contracts, of which 180,000 was earned this year. It also earned 46,000 of additional services not yet billed. Expenses were salaries 98,000, rent 24,000, insurance expired 6,000, depreciation 12,000, and interest 5,000. Build the income statement and calculate total revenue, total expenses, and net income.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Revenue Earned from Service Contracts", expectedValue: 180000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accrued Service Revenue", expectedValue: 46000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Revenue", expectedValue: 226000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Salaries Expense", expectedValue: 98000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Rent Expense", expectedValue: 24000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Insurance Expense", expectedValue: 6000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 12000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Interest Expense", expectedValue: 5000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Expenses", expectedValue: 145000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 81000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Mercury Merchandising reported gross sales of 780,000, sales returns of 15,000, beginning inventory of 160,000, purchases of 420,000, purchase returns of 20,000, ending inventory of 190,000, selling expense of 76,000, administrative expense of 49,000, a gain on sale of equipment of 7,000, interest expense of 14,000, and income tax expense of 36,000. Build the income statement and calculate the missing lines.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Gross Sales", expectedValue: 780000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Sales Returns", expectedValue: 15000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Sales", expectedValue: 765000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Beginning Inventory", expectedValue: 160000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Purchases", expectedValue: 420000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Purchase Returns", expectedValue: 20000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Purchases", expectedValue: 400000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Goods Available for Sale", expectedValue: 560000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Inventory", expectedValue: 190000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cost of Goods Sold", expectedValue: 370000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gross Profit", expectedValue: 395000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Selling Expense", expectedValue: 76000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Administrative Expense", expectedValue: 49000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Operating Expenses", expectedValue: 125000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Operating Income", expectedValue: 270000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gain on Sale of Equipment", expectedValue: 7000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Interest Expense", expectedValue: 14000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Income Tax Expense", expectedValue: 36000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 227000, labelEditable: true, valueEditable: true }
      ]
    }
  ],

  balance: [
    {
      prompt: "Pine Corporation reported cash 52,000, accounts receivable 34,000, inventory 28,000, prepaid insurance 6,000, equipment 140,000, accumulated depreciation 26,000, accounts payable 31,000, wages payable 9,000, note payable 50,000, common stock 90,000, and retained earnings 54,000. Build the classified balance sheet and calculate the totals.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Cash", expectedValue: 52000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Receivable", expectedValue: 34000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Inventory", expectedValue: 28000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Prepaid Insurance", expectedValue: 6000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Assets", expectedValue: 120000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Equipment, Net", expectedValue: 114000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Assets", expectedValue: 234000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Payable", expectedValue: 31000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Wages Payable", expectedValue: 9000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Liabilities", expectedValue: 40000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Note Payable", expectedValue: 50000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities", expectedValue: 90000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Common Stock", expectedValue: 90000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Retained Earnings", expectedValue: 54000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Equity", expectedValue: 144000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities + Equity", expectedValue: 234000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Lighthouse Company began the year with stockholders' equity of 410,000. During the year it issued additional common stock of 25,000, reported net income of 48,000, and paid dividends of 18,000. Build the equity section and calculate ending stockholders' equity.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Beginning Stockholders' Equity", expectedValue: 410000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Issuance of Common Stock", expectedValue: 25000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 48000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Dividends", expectedValue: 18000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Stockholders' Equity", expectedValue: 465000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Harbor Company began the year with accounts receivable of 86,200. Sales on account were 544,000, collections on account were 519,500, and write-offs were 6,200. Build the accounts receivable rollforward and calculate ending accounts receivable.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Beginning Accounts Receivable", expectedValue: 86200, labelEditable: true, valueEditable: true },
        { expectedLabel: "Sales on Account", expectedValue: 544000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Collections on Account", expectedValue: 519500, labelEditable: true, valueEditable: true },
        { expectedLabel: "Write-Offs", expectedValue: 6200, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Accounts Receivable", expectedValue: 104500, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Granite Corporation reported cash 18,500, accounts receivable 39,600, inventory 52,100, prepaid expenses 2,800, equipment 98,000, accumulated depreciation 14,000, land 76,000, accounts payable 22,100, unearned revenue 11,900, interest payable 1,000, notes payable 54,000, and common stock 110,000. Build the classified balance sheet and calculate the missing totals and retained earnings.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Cash", expectedValue: 18500, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Receivable", expectedValue: 39600, labelEditable: true, valueEditable: true },
        { expectedLabel: "Inventory", expectedValue: 52100, labelEditable: true, valueEditable: true },
        { expectedLabel: "Prepaid Expenses", expectedValue: 2800, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Assets", expectedValue: 113000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Equipment, Net", expectedValue: 84000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Land", expectedValue: 76000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Assets", expectedValue: 273000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Payable", expectedValue: 22100, labelEditable: true, valueEditable: true },
        { expectedLabel: "Unearned Revenue", expectedValue: 11900, labelEditable: true, valueEditable: true },
        { expectedLabel: "Interest Payable", expectedValue: 1000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Liabilities", expectedValue: 35000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Notes Payable", expectedValue: 54000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities", expectedValue: 89000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Common Stock", expectedValue: 110000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Retained Earnings", expectedValue: 74000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Equity", expectedValue: 184000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities + Equity", expectedValue: 273000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "On the book side of a bank reconciliation, Orion Company had a cash balance per books of 48,870. The bank collected an EFT receipt of 12,500 and a note receivable of 8,400. A customer's NSF check was 2,300, bank service charges were 70, and a check was recorded 90 too high on the books. Build the reconciliation and calculate adjusted cash.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Cash Balance per Books", expectedValue: 48870, labelEditable: true, valueEditable: true },
        { expectedLabel: "Add: EFT Collection", expectedValue: 12500, labelEditable: true, valueEditable: true },
        { expectedLabel: "Add: Note Collected by Bank", expectedValue: 8400, labelEditable: true, valueEditable: true },
        { expectedLabel: "Add: Check Recording Error", expectedValue: 90, labelEditable: true, valueEditable: true },
        { expectedLabel: "Less: NSF Check", expectedValue: 2300, labelEditable: true, valueEditable: true },
        { expectedLabel: "Less: Bank Service Charge", expectedValue: 70, labelEditable: true, valueEditable: true },
        { expectedLabel: "Adjusted Cash Balance", expectedValue: 67490, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Sterling Company reported cash 64,000, accounts receivable 47,000, supplies 9,000, prepaid insurance 5,000, land 88,000, building 180,000, accumulated depreciation on the building 36,000, accounts payable 42,000, salaries payable 13,000, unearned revenue 15,000, bonds payable 90,000, and common stock 150,000. Build the classified balance sheet and calculate the missing totals and retained earnings.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Cash", expectedValue: 64000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Receivable", expectedValue: 47000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Supplies", expectedValue: 9000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Prepaid Insurance", expectedValue: 5000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Assets", expectedValue: 125000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Land", expectedValue: 88000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Building, Net", expectedValue: 144000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Assets", expectedValue: 357000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Payable", expectedValue: 42000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Salaries Payable", expectedValue: 13000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Unearned Revenue", expectedValue: 15000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Liabilities", expectedValue: 70000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Bonds Payable", expectedValue: 90000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities", expectedValue: 160000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Common Stock", expectedValue: 150000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Retained Earnings", expectedValue: 47000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Equity", expectedValue: 197000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities + Equity", expectedValue: 357000, labelEditable: true, valueEditable: true }
      ]
    }
  ],

  cashflow: [
    {
      prompt: "A company has net cash from operating activities of 86,000, net cash from investing activities of -34,000, and net cash from financing activities of -12,000. Build the statement summary and calculate the net change in cash.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Net Cash from Operating Activities", expectedValue: 86000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Investing Activities", expectedValue: -34000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Financing Activities", expectedValue: -12000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Change in Cash", expectedValue: 40000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Atlas Company had net income of 52,000. Depreciation expense was 7,000, accounts receivable increased by 5,000, inventory decreased by 9,000, and accounts payable increased by 4,000. Build the operating section under the indirect method and calculate net cash from operating activities.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Net Income", expectedValue: 52000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 7000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Accounts Receivable", expectedValue: -5000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Decrease in Inventory", expectedValue: 9000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Accounts Payable", expectedValue: 4000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Operating Activities", expectedValue: 67000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Crown Company had net income of 78,000, depreciation expense of 11,000, a gain on sale of equipment of 4,000, accounts receivable decreased by 6,000, inventory increased by 8,000, prepaid insurance increased by 3,000, accounts payable decreased by 5,000, and unearned revenue increased by 7,000. Build the operating section and calculate net cash from operating activities.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Net Income", expectedValue: 78000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 11000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gain on Sale of Equipment", expectedValue: -4000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Decrease in Accounts Receivable", expectedValue: 6000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Inventory", expectedValue: -8000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Prepaid Insurance", expectedValue: -3000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Decrease in Accounts Payable", expectedValue: -5000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Unearned Revenue", expectedValue: 7000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Operating Activities", expectedValue: 82000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Pine Company sold equipment with a book value of 19,000 at a 3,000 loss, purchased new equipment for 45,000, and purchased land for 22,000. Build the investing section and calculate net cash from investing activities.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Proceeds from Sale of Equipment", expectedValue: 16000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Purchase of Equipment", expectedValue: -45000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Purchase of Land", expectedValue: -22000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Investing Activities", expectedValue: -51000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Harbor Company's long-term notes payable decreased from 160,000 to 118,000, common stock increased from 90,000 to 125,000, beginning retained earnings were 54,000, ending retained earnings were 71,000, and net income was 39,000. Dividends were paid in cash. Build the financing section and calculate net cash from financing activities.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Issuance of Common Stock", expectedValue: 35000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Repayment of Long-Term Notes Payable", expectedValue: -42000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Dividends Paid", expectedValue: -22000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Financing Activities", expectedValue: -29000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Using the linked cash flow data, Crown Company's net cash from operating activities is 82,000, net cash from investing activities is -51,000, and net cash from financing activities is -29,000. Beginning cash was 46,000. Build the summary section and calculate ending cash.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Net Cash from Operating Activities", expectedValue: 82000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Investing Activities", expectedValue: -51000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Financing Activities", expectedValue: -29000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Change in Cash", expectedValue: 2000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Beginning Cash Balance", expectedValue: 46000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Cash Balance", expectedValue: 48000, labelEditable: true, valueEditable: true }
      ]
    }
  ]
};
