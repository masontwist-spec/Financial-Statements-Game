const BUILD_QUESTIONS = {
  income: [
    {
      prompt: "A company has revenue of 5,000,000, cost of goods sold of 1,000,000, and S&A expense of 300,000. Populate the income statement and calculate the missing lines.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Revenue", expectedValue: 5000000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cost of Goods Sold", expectedValue: 1000000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gross Profit", expectedValue: 4000000, labelEditable: true, valueEditable: true },
        { expectedLabel: "S&A Expense", expectedValue: 300000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Operating Income", expectedValue: 3700000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 3700000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Baker Company purchased 250 of office supplies during the year and had 75 remaining at year-end. Build the income statement excerpt and calculate office supplies expense.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Office Supplies Purchased", expectedValue: 250, labelEditable: true, valueEditable: true },
        { expectedLabel: "Office Supplies Remaining", expectedValue: 75, labelEditable: true, valueEditable: true },
        { expectedLabel: "Office Supplies Expense", expectedValue: 175, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Neon Company has net income before adjustments of 43,800. Supplies used are 750, prepaid insurance used is 40, unearned revenue earned is 200, and income taxes accrued are 33. Populate the statement excerpt and calculate adjusted net income.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Net Income Before Adjustments", expectedValue: 43800, labelEditable: true, valueEditable: true },
        { expectedLabel: "Supplies Expense", expectedValue: 750, labelEditable: true, valueEditable: true },
        { expectedLabel: "Insurance Expense", expectedValue: 40, labelEditable: true, valueEditable: true },
        { expectedLabel: "Revenue Earned", expectedValue: 200, labelEditable: true, valueEditable: true },
        { expectedLabel: "Income Tax Expense", expectedValue: 33, labelEditable: true, valueEditable: true },
        { expectedLabel: "Adjusted Net Income", expectedValue: 43177, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Omega Company had beginning inventory of 16,000, purchases of 10,360, and ending inventory of 15,000. Build the cost section and calculate cost of goods sold.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Beginning Inventory", expectedValue: 16000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Purchases", expectedValue: 10360, labelEditable: true, valueEditable: true },
        { expectedLabel: "Goods Available for Sale", expectedValue: 26360, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Inventory", expectedValue: 15000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cost of Goods Sold", expectedValue: 11360, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Lane Co. reported sales of 440,000, cost of goods sold of 300,000, wages expense of 81,000, depreciation expense of 3,000, and insurance expense of 12,000. Build the income statement and calculate the subtotals.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Sales", expectedValue: 440000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cost of Goods Sold", expectedValue: 300000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gross Profit", expectedValue: 140000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Wages Expense", expectedValue: 81000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 3000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Insurance Expense", expectedValue: 12000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Operating Expenses", expectedValue: 96000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 44000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Murray Company reported sales of 440,000 and a gain on sale of equipment of 6,000. Expenses were cost of goods sold 285,000, wages expense 60,000, rent expense 24,000, depreciation expense 15,000, and insurance expense 12,000. Build the income statement and calculate total revenue, total expenses, and net income.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Sales", expectedValue: 440000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gain on Sale of Equipment", expectedValue: 6000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Revenue", expectedValue: 446000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cost of Goods Sold", expectedValue: 285000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Wages Expense", expectedValue: 60000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Rent Expense", expectedValue: 24000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 15000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Insurance Expense", expectedValue: 12000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Expenses", expectedValue: 396000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 50000, labelEditable: true, valueEditable: true }
      ]
    }
  ],

  balance: [
    {
      prompt: "A company has cash of 400,000, accounts receivable of 250,000, and inventory of 150,000. It also has accounts payable of 300,000 and equity of 500,000. Fill in the missing totals.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Cash", expectedValue: 400000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Receivable", expectedValue: 250000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Inventory", expectedValue: 150000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Assets", expectedValue: 800000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Payable", expectedValue: 300000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Equity", expectedValue: 500000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities + Equity", expectedValue: 800000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Martin Corporation reported cash 18,500, accounts receivable 39,600, prepaid expenses 2,500, inventory 59,400, equipment 74,300, accumulated depreciation 2,000, land 107,700, accounts payable 12,500, unearned service revenue 9,300, interest payable 700, note payable 25,500, bonds payable 132,000, common stock 50,000, and retained earnings 70,000. Build the balance sheet and calculate the totals.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Cash", expectedValue: 18500, labelEditable: true, valueEditable: true },
        { expectedLabel: "Accounts Receivable", expectedValue: 39600, labelEditable: true, valueEditable: true },
        { expectedLabel: "Prepaid Expenses", expectedValue: 2500, labelEditable: true, valueEditable: true },
        { expectedLabel: "Inventory", expectedValue: 59400, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Assets", expectedValue: 120000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Equipment, Net", expectedValue: 72300, labelEditable: true, valueEditable: true },
        { expectedLabel: "Land", expectedValue: 107700, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Assets", expectedValue: 300000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Current Liabilities", expectedValue: 48000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Bonds Payable", expectedValue: 132000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities", expectedValue: 180000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Common Stock", expectedValue: 50000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Retained Earnings", expectedValue: 70000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Equity", expectedValue: 120000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Total Liabilities + Equity", expectedValue: 300000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Solar Sales Company had beginning stockholders' equity of 723,000. September revenue was 101,000, expenses were 85,000, and dividends paid were 22,000. Build the equity section and calculate ending stockholders' equity.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Beginning Stockholders' Equity", expectedValue: 723000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Revenue", expectedValue: 101000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Expenses", expectedValue: 85000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Income", expectedValue: 16000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Dividends", expectedValue: 22000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Stockholders' Equity", expectedValue: 717000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "World Sales began the year with accounts receivable of 97,500. Sales on account were 755,200, collections on account were 738,900, and write-offs were 1,540. Build the accounts receivable rollforward and calculate ending accounts receivable.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Beginning Accounts Receivable", expectedValue: 97500, labelEditable: true, valueEditable: true },
        { expectedLabel: "Sales on Account", expectedValue: 755200, labelEditable: true, valueEditable: true },
        { expectedLabel: "Collections on Account", expectedValue: 738900, labelEditable: true, valueEditable: true },
        { expectedLabel: "Write-Offs", expectedValue: 1540, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Accounts Receivable", expectedValue: 112260, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Based on the practice final bank reconciliation, Horton Company had a cash balance per books of 34,888. The bank collected an EFT receipt of 14,990, a customer's NSF check was 1,700, bank service charges were 26, and check #457 was recorded 90 too high on the books. Build the reconciliation from the book side and calculate adjusted cash.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Cash Balance per Books", expectedValue: 34888, labelEditable: true, valueEditable: true },
        { expectedLabel: "Add: EFT Collection", expectedValue: 14990, labelEditable: true, valueEditable: true },
        { expectedLabel: "Add: Check Recording Error", expectedValue: 90, labelEditable: true, valueEditable: true },
        { expectedLabel: "Less: NSF Check", expectedValue: 1700, labelEditable: true, valueEditable: true },
        { expectedLabel: "Less: Bank Service Charge", expectedValue: 26, labelEditable: true, valueEditable: true },
        { expectedLabel: "Adjusted Cash Balance", expectedValue: 48242, labelEditable: true, valueEditable: true }
      ]
    }
  ],

  cashflow: [
    {
      prompt: "A company has cash from operations of 500,000, cash from investing of -200,000, and cash from financing of 100,000. Fill in the statement.",
      difficulty: "Easy",
      rows: [
        { expectedLabel: "Cash from Operations", expectedValue: 500000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cash from Investing", expectedValue: -200000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Cash from Financing", expectedValue: 100000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Change in Cash", expectedValue: 400000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Lane Co. had net income of 44,000. Accounts receivable increased by 6,000, inventory decreased by 16,000, prepaid insurance increased by 2,000, accounts payable increased by 12,000, wages payable decreased by 3,000, and depreciation expense was 3,000. Build the operating section and calculate net cash from operations.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Net Income", expectedValue: 44000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 3000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Accounts Receivable", expectedValue: -6000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Decrease in Inventory", expectedValue: 16000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Prepaid Insurance", expectedValue: -2000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Accounts Payable", expectedValue: 12000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Decrease in Wages Payable", expectedValue: -3000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Operating Activities", expectedValue: 64000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Murray Company had net income of 50,000, depreciation expense of 15,000, a gain on sale of equipment of 6,000, accounts receivable increased by 6,000, inventory decreased by 16,000, prepaid insurance increased by 2,000, accounts payable increased by 12,000, and wages payable decreased by 3,000. Build the operating section and calculate net cash from operations.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Net Income", expectedValue: 50000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Depreciation Expense", expectedValue: 15000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Gain on Sale of Equipment", expectedValue: -6000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Accounts Receivable", expectedValue: -6000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Decrease in Inventory", expectedValue: 16000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Prepaid Insurance", expectedValue: -2000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Increase in Accounts Payable", expectedValue: 12000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Decrease in Wages Payable", expectedValue: -3000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Operating Activities", expectedValue: 76000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Murray Company sold equipment with a book value of 10,000 for a 6,000 gain, purchased 15,000 of new equipment, and purchased 10,000 of land. Build the investing section and calculate net cash from investing activities.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Proceeds from Sale of Equipment", expectedValue: 16000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Purchase of Equipment", expectedValue: -15000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Purchase of Land", expectedValue: -10000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Investing Activities", expectedValue: -9000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Murray Company's long-term notes payable decreased from 100,000 to 53,000, common stock increased from 150,000 to 157,000, net income was 50,000, retained earnings increased from 22,000 to 46,000, and dividends were paid in cash. Build the financing section and calculate net cash from financing activities.",
      difficulty: "Hard",
      rows: [
        { expectedLabel: "Issuance of Common Stock", expectedValue: 7000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Repayment of Long-Term Notes Payable", expectedValue: -47000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Dividends Paid", expectedValue: -26000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Financing Activities", expectedValue: -66000, labelEditable: true, valueEditable: true }
      ]
    },
    {
      prompt: "Using the full Murray Company cash flow data from the practice final, net cash from operating activities is 76,000, net cash from investing activities is -9,000, and net cash from financing activities is -66,000. Beginning cash was 4,000. Build the summary section and calculate the ending cash balance.",
      difficulty: "Medium",
      rows: [
        { expectedLabel: "Net Cash from Operating Activities", expectedValue: 76000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Investing Activities", expectedValue: -9000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Cash from Financing Activities", expectedValue: -66000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Net Change in Cash", expectedValue: 1000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Beginning Cash Balance", expectedValue: 4000, labelEditable: true, valueEditable: true },
        { expectedLabel: "Ending Cash Balance", expectedValue: 5000, labelEditable: true, valueEditable: true }
      ]
    }
  ]
};
