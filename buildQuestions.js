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
    }
  ],

  balance: [
    {
      prompt: "A company has cash of 400,000, accounts receivable of 250,000, and inventory of 150,000. It also has accounts payable of 300,000 and equity of 500000. Fill in the missing totals.",
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
    }
  ]
};
