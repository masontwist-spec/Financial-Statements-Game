const BUILD_QUESTIONS = {
  income: [
    {
      prompt: "A company has revenue of 5000000, cost of goods sold of 1000000, and S&A expense of 300000. Populate the income statement and calculate the missing lines.",
      difficulty: "Easy",
      fields: [
        { key: "revenue", label: "Revenue", value: 5000000, editable: false },
        { key: "cogs", label: "Cost of Goods Sold", value: 1000000, editable: false },
        { key: "gross_profit", label: "Gross Profit", value: 4000000, editable: true },
        { key: "sga", label: "S&A Expense", value: 300000, editable: false },
        { key: "operating_income", label: "Operating Income", value: 3700000, editable: true },
        { key: "net_income", label: "Net Income", value: 3700000, editable: true }
      ]
    },
    {
      prompt: "A company has revenue of 2400000, cost of goods sold of 900000, and operating expenses of 600000. Fill in the missing subtotals.",
      difficulty: "Easy",
      fields: [
        { key: "revenue", label: "Revenue", value: 2400000, editable: false },
        { key: "cogs", label: "Cost of Goods Sold", value: 900000, editable: false },
        { key: "gross_profit", label: "Gross Profit", value: 1500000, editable: true },
        { key: "opex", label: "Operating Expenses", value: 600000, editable: false },
        { key: "operating_income", label: "Operating Income", value: 900000, editable: true },
        { key: "net_income", label: "Net Income", value: 900000, editable: true }
      ]
    },
    {
      prompt: "A company reports sales revenue of 1200000, sales returns of 50000, cost of goods sold of 400000, and selling expense of 150000. Build the statement and calculate the missing lines.",
      difficulty: "Medium",
      fields: [
        { key: "sales_revenue", label: "Sales Revenue", value: 1200000, editable: false },
        { key: "sales_returns", label: "Sales Returns", value: 50000, editable: false },
        { key: "net_revenue", label: "Net Revenue", value: 1150000, editable: true },
        { key: "cogs", label: "Cost of Goods Sold", value: 400000, editable: false },
        { key: "gross_profit", label: "Gross Profit", value: 750000, editable: true },
        { key: "selling_expense", label: "Selling Expense", value: 150000, editable: false },
        { key: "net_income", label: "Net Income", value: 600000, editable: true }
      ]
    },
    {
      prompt: "A company has service revenue of 850000, wages expense of 240000, rent expense of 110000, and depreciation expense of 50000. Populate the income statement and compute net income.",
      difficulty: "Easy",
      fields: [
        { key: "service_revenue", label: "Service Revenue", value: 850000, editable: false },
        { key: "wages_expense", label: "Wages Expense", value: 240000, editable: false },
        { key: "rent_expense", label: "Rent Expense", value: 110000, editable: false },
        { key: "depreciation_expense", label: "Depreciation Expense", value: 50000, editable: false },
        { key: "total_expenses", label: "Total Expenses", value: 400000, editable: true },
        { key: "net_income", label: "Net Income", value: 450000, editable: true }
      ]
    },
    {
      prompt: "A company has revenue of 3000000, cost of goods sold of 1800000, selling expense of 200000, administrative expense of 150000, and interest expense of 50000. Build the statement and calculate the blanks.",
      difficulty: "Hard",
      fields: [
        { key: "revenue", label: "Revenue", value: 3000000, editable: false },
        { key: "cogs", label: "Cost of Goods Sold", value: 1800000, editable: false },
        { key: "gross_profit", label: "Gross Profit", value: 1200000, editable: true },
        { key: "selling_expense", label: "Selling Expense", value: 200000, editable: false },
        { key: "admin_expense", label: "Administrative Expense", value: 150000, editable: false },
        { key: "operating_income", label: "Operating Income", value: 850000, editable: true },
        { key: "interest_expense", label: "Interest Expense", value: 50000, editable: false },
        { key: "net_income", label: "Net Income", value: 800000, editable: true }
      ]
    }
  ],

  balance: [
    {
      prompt: "A company has cash of 400000, accounts receivable of 250000, and inventory of 150000. It also has accounts payable of 300000 and equity of 500000. Fill in the missing totals.",
      difficulty: "Easy",
      fields: [
        { key: "cash", label: "Cash", value: 400000, editable: false },
        { key: "ar", label: "Accounts Receivable", value: 250000, editable: false },
        { key: "inventory", label: "Inventory", value: 150000, editable: false },
        { key: "total_assets", label: "Total Assets", value: 800000, editable: true },
        { key: "accounts_payable", label: "Accounts Payable", value: 300000, editable: false },
        { key: "equity", label: "Equity", value: 500000, editable: false },
        { key: "total_liabilities_equity", label: "Total Liabilities + Equity", value: 800000, editable: true }
      ]
    }
  ],

  cashflow: [
    {
      prompt: "A company has cash from operations of 500000, cash from investing of -200000, and cash from financing of 100000. Fill in the net change in cash.",
      difficulty: "Easy",
      fields: [
        { key: "cfo", label: "Cash from Operations", value: 500000, editable: false },
        { key: "cfi", label: "Cash from Investing", value: -200000, editable: false },
        { key: "cff", label: "Cash from Financing", value: 100000, editable: false },
        { key: "net_change_cash", label: "Net Change in Cash", value: 400000, editable: true }
      ]
    }
  ]
};
