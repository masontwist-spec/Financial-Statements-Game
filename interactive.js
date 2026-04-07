document.addEventListener("DOMContentLoaded", () => {
  const lineItems = Array.from(document.querySelectorAll(".line-item[data-id]"));
  if (!lineItems.length) return;

  const detailTitle = document.getElementById("detail-title");
  const detailIntro = document.getElementById("detail-intro");
  const detailWhat = document.getElementById("detail-what");
  const detailWhere = document.getElementById("detail-where");
  const detailWhy = document.getElementById("detail-why");
  const detailFlow = document.getElementById("detail-flow");
  const detailFlowPath = document.getElementById("detail-flow-path");

  const hasDetailPanel = Boolean(
    detailTitle &&
    detailIntro &&
    detailWhat &&
    detailWhere &&
    detailWhy &&
    detailFlow &&
    detailFlowPath
  );

  const DEFAULT_PANEL = {
    title: "Choose a line item to begin",
    intro: "Click a line item to see how it connects across the income statement, balance sheet, and cash flow statement.",
    what: "Select a line item to view a short teaching explanation.",
    where: ["Income statement", "Balance sheet", "Cash flow statement"],
    why: "The panel will explain why the line matters in financial analysis and statement construction.",
    flow: "The flow section will show the accounting path and connected line items.",
    flowPath: [
      { statement: "Income Statement", label: "Performance" },
      { statement: "Balance Sheet", label: "Position" },
      { statement: "Cash Flow Statement", label: "Cash effect" }
    ]
  };

  const ITEM_DETAILS = {
    revenue: {
      title: "Revenue",
      intro: "Revenue is usually the first place students see operating activity begin on the income statement.",
      what: "Revenue is the value of goods delivered or services provided during the period. It records what the company earned, not necessarily what cash it collected that day.",
      where: ["Income statement", "Balance sheet via Accounts Receivable", "Cash flow statement via operating cash flow"],
      why: "Revenue drives profitability analysis, margin analysis, and growth analysis. It also helps explain why reported profit can differ from cash collected from customers.",
      flow: "Revenue starts on the income statement, can create accounts receivable on the balance sheet when sales are made on credit, and later affects operating cash flow when those receivables are collected.",
      flowPath: [
        { statement: "Income Statement", label: "Revenue recognized" },
        { statement: "Balance Sheet", label: "Accounts Receivable may increase" },
        { statement: "Cash Flow Statement", label: "Cash collected in operations" }
      ]
    },
    "net-income": {
      title: "Net Income",
      intro: "Net income is the clearest bridge between performance and financial position.",
      what: "Net income is the final profit after subtracting all relevant expenses from revenue for the period.",
      where: ["Income statement", "Balance sheet via Retained Earnings", "Cash flow statement operating section"],
      why: "It summarizes period performance, feeds retained earnings, and serves as the starting point for reconciling accounting profit to operating cash flow.",
      flow: "Net income is reported at the bottom of the income statement, closed into retained earnings on the balance sheet, and then adjusted for non-cash items and working capital changes in the cash flow statement.",
      flowPath: [
        { statement: "Income Statement", label: "Final profit" },
        { statement: "Balance Sheet", label: "Retained Earnings updated" },
        { statement: "Cash Flow Statement", label: "Starting point for CFO" }
      ]
    },
    depreciation: {
      title: "Depreciation Expense",
      intro: "Depreciation is one of the best examples of how accounting profit and cash flow can differ.",
      what: "Depreciation expense allocates the cost of long-lived assets over the periods that benefit from using them.",
      where: ["Income statement", "Balance sheet via Equipment, Net", "Cash flow statement operating section"],
      why: "It lowers reported income without using cash in the current period, so it helps students understand accrual accounting and non-cash expenses.",
      flow: "Depreciation reduces income statement profit, lowers the carrying value of equipment on the balance sheet over time, and is added back in operating cash flow because the expense did not use cash this period.",
      flowPath: [
        { statement: "Income Statement", label: "Expense reduces profit" },
        { statement: "Balance Sheet", label: "Equipment, Net declines" },
        { statement: "Cash Flow Statement", label: "Added back to CFO" }
      ]
    },
    "accounts-receivable": {
      title: "Accounts Receivable",
      intro: "Accounts receivable is a key working-capital account for connecting revenue to cash.",
      what: "Accounts receivable represents sales already recognized as revenue that customers have not yet paid in cash.",
      where: ["Balance sheet", "Income statement via Revenue", "Cash flow statement via working capital adjustment"],
      why: "It helps explain why a company can report strong revenue while still not collecting the same amount of cash in the current period.",
      flow: "Credit sales raise revenue on the income statement and create receivables on the balance sheet. When receivables rise, operating cash flow is lower than revenue because some earnings have not yet turned into cash.",
      flowPath: [
        { statement: "Income Statement", label: "Revenue recorded" },
        { statement: "Balance Sheet", label: "Accounts Receivable grows" },
        { statement: "Cash Flow Statement", label: "Increase reduces CFO" }
      ]
    },
    inventory: {
      title: "Inventory",
      intro: "Inventory links the timing of product purchases to the timing of expense recognition.",
      what: "Inventory is the cost of goods a company holds for sale before those goods are delivered to customers.",
      where: ["Balance sheet", "Income statement via Cost of Goods Sold", "Cash flow statement via working capital adjustment"],
      why: "It shows students that buying goods is not immediately an expense on the income statement. The cost becomes expense only when the goods are sold.",
      flow: "Inventory sits on the balance sheet until products are sold, then flows into cost of goods sold on the income statement. Rising inventory usually uses cash and lowers operating cash flow in the period.",
      flowPath: [
        { statement: "Balance Sheet", label: "Inventory held" },
        { statement: "Income Statement", label: "COGS recognized when sold" },
        { statement: "Cash Flow Statement", label: "Increase reduces CFO" }
      ]
    },
    "accounts-payable": {
      title: "Accounts Payable",
      intro: "Accounts payable is a useful example of how timing differences affect cash flow.",
      what: "Accounts payable is the amount owed to suppliers for goods or services already received but not yet paid for.",
      where: ["Balance sheet", "Income statement through related expenses", "Cash flow statement via working capital adjustment"],
      why: "It helps explain how a company can recognize expense now but delay the related cash payment until later.",
      flow: "When payables increase, the company has recorded expense or inventory activity without paying cash yet. That usually boosts operating cash flow relative to income for the period.",
      flowPath: [
        { statement: "Income Statement", label: "Expense recognized" },
        { statement: "Balance Sheet", label: "Accounts Payable rises" },
        { statement: "Cash Flow Statement", label: "Increase supports CFO" }
      ]
    },
    equipment: {
      title: "Equipment, Net",
      intro: "Equipment, net helps students connect long-term investing decisions to later income statement expense.",
      what: "Equipment, net is the carrying amount of long-lived operating assets after accumulated depreciation has been deducted.",
      where: ["Balance sheet", "Income statement via Depreciation Expense", "Cash flow statement via Capital Expenditures"],
      why: "It shows how companies invest in productive assets and then spread those costs over time instead of expensing them all at once.",
      flow: "Capital expenditures increase equipment on the balance sheet, depreciation gradually reduces it over time, and both effects connect the balance sheet to the income statement and the cash flow statement.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "CapEx outflow" },
        { statement: "Balance Sheet", label: "Equipment, Net increases" },
        { statement: "Income Statement", label: "Depreciation over time" }
      ]
    },
    "capital-expenditures": {
      title: "Capital Expenditures",
      intro: "Capital expenditures show how cash is used to build future operating capacity.",
      what: "Capital expenditures are cash payments to buy or improve long-term assets such as equipment, property, or software.",
      where: ["Cash flow statement investing section", "Balance sheet via Equipment, Net"],
      why: "They are critical because they use cash today but create benefits over future periods, making them a core difference between profit measurement and cash movement.",
      flow: "CapEx appears as an investing cash outflow, increases long-term assets on the balance sheet, and later leads to depreciation expense on the income statement.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Investing outflow" },
        { statement: "Balance Sheet", label: "Equipment, Net added" },
        { statement: "Income Statement", label: "Depreciation later" }
      ]
    },
    "debt-issued": {
      title: "Debt Issued",
      intro: "Debt issued is a straightforward financing flow that students can trace into cash and liabilities.",
      what: "Debt issued represents borrowing cash from lenders in exchange for a future repayment obligation.",
      where: ["Cash flow statement financing section", "Balance sheet via debt and cash"],
      why: "It helps explain how companies can increase cash without earning revenue, and why changes in financing do not appear as operating performance.",
      flow: "When debt is issued, cash increases and liabilities increase on the balance sheet. The cash inflow appears in the financing section of the cash flow statement, not on the income statement.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Financing inflow" },
        { statement: "Balance Sheet", label: "Debt rises" },
        { statement: "Balance Sheet", label: "Cash rises" }
      ]
    },
    "retained-earnings": {
      title: "Retained Earnings",
      intro: "Retained earnings is one of the clearest places to see cumulative performance stored on the balance sheet.",
      what: "Retained earnings is the portion of cumulative profits that has been kept in the business rather than distributed to owners.",
      where: ["Balance sheet", "Linked to income statement net income", "Affected indirectly by cash decisions such as dividends"],
      why: "It explains how current-period performance affects the company’s longer-term equity position.",
      flow: "Net income increases retained earnings, losses reduce it, and dividends can reduce it further. That makes retained earnings the balance sheet account most directly tied to the bottom line of the income statement.",
      flowPath: [
        { statement: "Income Statement", label: "Net Income earned" },
        { statement: "Balance Sheet", label: "Retained Earnings updated" },
        { statement: "Cash Flow Statement", label: "Dividends may reduce cash" }
      ]
    },
    "net-change-in-cash": {
      title: "Net Change in Cash",
      intro: "Net change in cash is the final bridge from all period cash activity to ending cash on the balance sheet.",
      what: "Net change in cash is the total increase or decrease in cash after combining operating, investing, and financing cash flows.",
      where: ["Cash flow statement", "Balance sheet via ending cash"],
      why: "It tells you whether the company ended the period with more or less cash and shows the combined effect of the business’s major activities.",
      flow: "The three sections of the cash flow statement combine into net change in cash, and that change reconciles beginning cash to ending cash on the balance sheet.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "CFO + CFI + CFF" },
        { statement: "Cash Flow Statement", label: "Net Change in Cash" },
        { statement: "Balance Sheet", label: "Ending Cash updated" }
      ]
    },
    "cost-of-goods-sold": {
      title: "Cost of Goods Sold",
      intro: "Cost of goods sold shows the direct cost of producing or purchasing what was sold.",
      what: "It captures the cost assigned to the inventory or services delivered during the period.",
      where: ["Income statement", "Balance sheet via Inventory"],
      why: "It is a core input for gross profit and margin analysis.",
      flow: "Inventory leaves the balance sheet and becomes cost of goods sold on the income statement when goods are sold.",
      flowPath: [
        { statement: "Balance Sheet", label: "Inventory reduced" },
        { statement: "Income Statement", label: "COGS recognized" }
      ]
    },
    "gross-profit": {
      title: "Gross Profit",
      intro: "Gross profit isolates the value left after direct product costs.",
      what: "Gross profit equals revenue minus cost of goods sold.",
      where: ["Income statement"],
      why: "It helps evaluate pricing strength and direct cost control.",
      flow: "Gross profit is an income statement subtotal that shows what remains to cover operating expenses and generate profit.",
      flowPath: [
        { statement: "Income Statement", label: "Revenue" },
        { statement: "Income Statement", label: "Less COGS" },
        { statement: "Income Statement", label: "Gross Profit" }
      ]
    },
    cash: {
      title: "Cash",
      intro: "Cash is the end point for many statement connections.",
      what: "Cash is the most liquid asset on the balance sheet.",
      where: ["Balance sheet", "Cash flow statement"],
      why: "It shows whether the company has immediate liquidity to operate and invest.",
      flow: "The cash flow statement explains the period change, and the balance sheet reports the ending amount.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Net Change in Cash" },
        { statement: "Balance Sheet", label: "Ending Cash" }
      ]
    },
    "net-cash-operating": {
      title: "Net Cash from Operating Activities",
      intro: "This line explains how much cash the core business actually generated.",
      what: "It is the subtotal for cash produced or used by everyday operations.",
      where: ["Cash flow statement"],
      why: "It is often compared against net income to judge earnings quality.",
      flow: "It starts with profit and adjusts for non-cash items and working capital changes.",
      flowPath: [
        { statement: "Income Statement", label: "Net Income" },
        { statement: "Cash Flow Statement", label: "Operating adjustments" },
        { statement: "Cash Flow Statement", label: "Net Cash from Operations" }
      ]
    },
    "changes-in-working-capital": {
      title: "Changes in Working Capital",
      intro: "Working capital adjustments explain why earnings and cash do not move in lockstep.",
      what: "They capture period-to-period changes in operating current assets and liabilities.",
      where: ["Cash flow statement", "Balance sheet via receivables, inventory, payables"],
      why: "They help students see how timing differences influence cash generation.",
      flow: "Receivables, inventory, and payables move on the balance sheet, and those changes appear as operating cash flow adjustments.",
      flowPath: [
        { statement: "Balance Sheet", label: "Working capital accounts move" },
        { statement: "Cash Flow Statement", label: "Operating adjustments" }
      ]
    },
    "selling-expense": {
      title: "Selling Expense",
      intro: "Selling expense captures the cost of generating and supporting sales.",
      what: "It includes marketing, distribution, and other selling-related costs.",
      where: ["Income statement"],
      why: "It reduces operating income and affects profitability.",
      flow: "Selling expense lowers current-period profit, which then affects net income and retained earnings.",
      flowPath: [
        { statement: "Income Statement", label: "Operating expense" },
        { statement: "Income Statement", label: "Lower net income" }
      ]
    },
    "general-and-admin": {
      title: "General and Administrative Expense",
      intro: "G&A covers the cost of running the business outside direct production.",
      what: "It includes overhead such as management, office, and support functions.",
      where: ["Income statement"],
      why: "It matters because it consumes profit even though it is not tied directly to units sold.",
      flow: "G&A reduces operating income, which lowers net income and eventually retained earnings.",
      flowPath: [
        { statement: "Income Statement", label: "Overhead expense" },
        { statement: "Income Statement", label: "Lower net income" }
      ]
    },
    "total-operating-expenses": {
      title: "Total Operating Expenses",
      intro: "This subtotal groups the major recurring costs of running the business.",
      what: "It combines selling, administrative, depreciation, and related operating expenses.",
      where: ["Income statement"],
      why: "It helps explain how much of gross profit is consumed before the company reaches operating income.",
      flow: "This subtotal sits between gross profit and operating income on the income statement.",
      flowPath: [
        { statement: "Income Statement", label: "Gross Profit" },
        { statement: "Income Statement", label: "Less operating expenses" },
        { statement: "Income Statement", label: "Operating Income" }
      ]
    },
    "operating-income": {
      title: "Operating Income",
      intro: "Operating income isolates the profit from core operations.",
      what: "It is profit after operating expenses but before financing and other non-operating items.",
      where: ["Income statement"],
      why: "It helps analysts separate the health of core operations from financing choices.",
      flow: "Operating income is a key subtotal on the way to net income.",
      flowPath: [
        { statement: "Income Statement", label: "Core business profit" },
        { statement: "Income Statement", label: "Flows toward net income" }
      ]
    },
    "interest-expense": {
      title: "Interest Expense",
      intro: "Interest expense reflects the cost of financing, not the cost of core operations.",
      what: "It is the borrowing cost incurred on debt during the period.",
      where: ["Income statement", "Related to debt on the balance sheet"],
      why: "It helps separate operating performance from capital structure decisions.",
      flow: "Debt on the balance sheet can create interest expense on the income statement.",
      flowPath: [
        { statement: "Balance Sheet", label: "Debt outstanding" },
        { statement: "Income Statement", label: "Interest expense" }
      ]
    },
    "current-assets": {
      title: "Current Assets",
      intro: "Current assets are the short-term resources a company expects to use soon.",
      what: "They include cash and other assets expected to turn into cash or be used within one year.",
      where: ["Balance sheet"],
      why: "They matter for liquidity analysis and working capital analysis.",
      flow: "Individual current asset accounts often create operating cash flow adjustments.",
      flowPath: [
        { statement: "Balance Sheet", label: "Short-term resources" },
        { statement: "Cash Flow Statement", label: "Working capital effects" }
      ]
    },
    "total-current-assets": {
      title: "Total Current Assets",
      intro: "This subtotal gathers the company’s short-term resources in one place.",
      what: "It is the sum of cash, receivables, inventory, and other current assets.",
      where: ["Balance sheet"],
      why: "It helps evaluate liquidity and short-term financial flexibility.",
      flow: "This subtotal summarizes working capital-related assets on the balance sheet.",
      flowPath: [
        { statement: "Balance Sheet", label: "Current asset total" }
      ]
    },
    "long-term-assets": {
      title: "Long-Term Assets",
      intro: "Long-term assets represent investments intended to support the business beyond the current year.",
      what: "They are resources with benefits that extend over multiple periods.",
      where: ["Balance sheet"],
      why: "They matter because they often require large upfront cash investment and later create depreciation or amortization.",
      flow: "Long-term assets are usually built through investing cash outflows and then expensed gradually over time.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Investing outflow" },
        { statement: "Balance Sheet", label: "Long-term asset added" },
        { statement: "Income Statement", label: "Depreciation later" }
      ]
    },
    "total-assets": {
      title: "Total Assets",
      intro: "Total assets represents the full resource base controlled by the company.",
      what: "It is the sum of current and long-term assets.",
      where: ["Balance sheet"],
      why: "It frames the size of the company and must always match liabilities plus equity.",
      flow: "Total assets is one side of the accounting equation.",
      flowPath: [
        { statement: "Balance Sheet", label: "Total Assets" },
        { statement: "Balance Sheet", label: "Equals liabilities + equity" }
      ]
    },
    liabilities: {
      title: "Liabilities",
      intro: "Liabilities show how much of the company’s resources are financed by obligations to others.",
      what: "They are amounts the company owes to outside parties.",
      where: ["Balance sheet"],
      why: "They matter for leverage, solvency, and liquidity analysis.",
      flow: "Some liabilities come from operations, while others come from financing activity.",
      flowPath: [
        { statement: "Balance Sheet", label: "Obligations recorded" },
        { statement: "Cash Flow Statement", label: "Operating or financing effects" }
      ]
    },
    "long-term-debt": {
      title: "Long-Term Debt",
      intro: "Long-term debt is a major financing source for many businesses.",
      what: "It is borrowing that is due beyond the next year.",
      where: ["Balance sheet", "Cash flow statement financing section"],
      why: "It affects leverage and can create future interest expense.",
      flow: "New debt raises cash now, appears in financing cash flow, and remains as a liability until repaid.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Debt issued or repaid" },
        { statement: "Balance Sheet", label: "Long-term debt balance" },
        { statement: "Income Statement", label: "Interest expense later" }
      ]
    },
    "total-liabilities": {
      title: "Total Liabilities",
      intro: "This subtotal combines the company’s obligations into one figure.",
      what: "It is the sum of current and long-term liabilities.",
      where: ["Balance sheet"],
      why: "It helps show how much of the business is financed by creditors.",
      flow: "This subtotal is part of the financing side of the accounting equation.",
      flowPath: [
        { statement: "Balance Sheet", label: "Total Liabilities" }
      ]
    },
    "stockholders-equity": {
      title: "Stockholders' Equity",
      intro: "Equity represents the owners’ residual interest in the company.",
      what: "It is what remains after liabilities are subtracted from assets.",
      where: ["Balance sheet"],
      why: "It ties together invested capital and accumulated profits.",
      flow: "Equity changes through earnings, losses, share issuance, and distributions.",
      flowPath: [
        { statement: "Income Statement", label: "Profit affects equity" },
        { statement: "Balance Sheet", label: "Equity reported" }
      ]
    },
    "common-stock": {
      title: "Common Stock",
      intro: "Common stock captures capital directly invested by owners.",
      what: "It records the equity issued in exchange for shareholder investment.",
      where: ["Balance sheet", "Cash flow statement financing section when issued"],
      why: "It helps distinguish owner financing from profits retained in the business.",
      flow: "Issuing shares raises cash and common stock, but it does not create revenue.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Financing inflow" },
        { statement: "Balance Sheet", label: "Common stock rises" }
      ]
    },
    "total-liabilities-equity": {
      title: "Total Liabilities and Equity",
      intro: "This line shows the financing side of the accounting equation.",
      what: "It is the combined total of creditor financing and owner financing.",
      where: ["Balance sheet"],
      why: "It must always equal total assets.",
      flow: "This total confirms the balance sheet remains balanced after all period activity.",
      flowPath: [
        { statement: "Balance Sheet", label: "Liabilities + Equity" },
        { statement: "Balance Sheet", label: "Equals Assets" }
      ]
    },
    "operating-activities": {
      title: "Cash Flows from Operating Activities",
      intro: "This section translates operating performance into cash movement.",
      what: "It groups cash inflows and outflows tied to normal business operations.",
      where: ["Cash flow statement"],
      why: "It helps evaluate whether the core business is producing cash.",
      flow: "Operating cash flow often begins with net income and then adjusts for non-cash items and working capital.",
      flowPath: [
        { statement: "Income Statement", label: "Net Income" },
        { statement: "Cash Flow Statement", label: "Operating section" }
      ]
    },
    "investing-activities": {
      title: "Cash Flows from Investing Activities",
      intro: "This section shows how cash is used for long-term assets and investments.",
      what: "It includes purchases and sales of long-term assets and investment positions.",
      where: ["Cash flow statement"],
      why: "It reveals how much the company is reinvesting for future growth.",
      flow: "Investing cash flows often connect directly to long-term asset balances on the balance sheet.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Investing section" },
        { statement: "Balance Sheet", label: "Long-term assets move" }
      ]
    },
    "asset-sales": {
      title: "Proceeds from Asset Sales",
      intro: "Asset sales show the cash received when long-lived assets are sold.",
      what: "It is the cash inflow from disposing of long-term assets.",
      where: ["Cash flow statement", "Balance sheet via asset reduction"],
      why: "It helps separate one-time investing activity from recurring operations.",
      flow: "Selling an asset brings in cash and reduces the related asset on the balance sheet.",
      flowPath: [
        { statement: "Balance Sheet", label: "Asset reduced" },
        { statement: "Cash Flow Statement", label: "Investing inflow" }
      ]
    },
    "net-cash-investing": {
      title: "Net Cash from Investing Activities",
      intro: "This subtotal shows the net cash effect of investing decisions.",
      what: "It combines investing inflows and outflows into one figure.",
      where: ["Cash flow statement"],
      why: "It helps show whether the business is in a period of heavy reinvestment or asset sales.",
      flow: "This subtotal summarizes purchases and sales of long-term assets before feeding into the total change in cash.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Investing inflows/outflows" },
        { statement: "Cash Flow Statement", label: "Net investing cash flow" }
      ]
    },
    "financing-activities": {
      title: "Cash Flows from Financing Activities",
      intro: "This section explains how the company raises capital and returns it.",
      what: "It includes borrowing, equity issuance, repayment, and owner distributions.",
      where: ["Cash flow statement"],
      why: "It separates funding decisions from operating performance.",
      flow: "Financing cash flows usually connect to debt and equity balances on the balance sheet.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Financing section" },
        { statement: "Balance Sheet", label: "Debt and equity move" }
      ]
    },
    "dividends-paid": {
      title: "Dividends Paid",
      intro: "Dividends paid are a cash return to shareholders, not an operating expense.",
      what: "They are cash distributions made to owners.",
      where: ["Cash flow statement financing section", "Balance sheet via retained earnings and cash"],
      why: "They help explain how profits can leave the business even when the company is profitable.",
      flow: "Dividends reduce cash and often reduce retained earnings, but they do not reduce net income on the income statement.",
      flowPath: [
        { statement: "Balance Sheet", label: "Retained Earnings reduced" },
        { statement: "Cash Flow Statement", label: "Financing outflow" }
      ]
    },
    "net-cash-financing": {
      title: "Net Cash from Financing Activities",
      intro: "This subtotal captures the net cash effect of funding choices.",
      what: "It combines debt, equity, and distribution-related cash flows.",
      where: ["Cash flow statement"],
      why: "It helps show whether cash is being raised from investors and lenders or returned to them.",
      flow: "The subtotal combines financing inflows and outflows before feeding into the total period change in cash.",
      flowPath: [
        { statement: "Cash Flow Statement", label: "Financing inflows/outflows" },
        { statement: "Cash Flow Statement", label: "Net financing cash flow" }
      ]
    }
  };

  const CONNECTIONS = {
    revenue: ["accounts-receivable", "net-income", "net-cash-operating"],
    depreciation: ["equipment", "net-income", "net-cash-operating"],
    "net-income": ["retained-earnings", "net-cash-operating", "net-change-in-cash"],
    "accounts-receivable": ["revenue", "changes-in-working-capital", "net-cash-operating"],
    inventory: ["cost-of-goods-sold", "changes-in-working-capital", "net-cash-operating"],
    "accounts-payable": ["changes-in-working-capital", "net-cash-operating"],
    equipment: ["depreciation", "capital-expenditures"],
    "capital-expenditures": ["equipment", "net-cash-investing", "net-change-in-cash"],
    "debt-issued": ["long-term-debt", "cash", "net-cash-financing", "net-change-in-cash"],
    "retained-earnings": ["net-income", "dividends-paid"],
    "net-change-in-cash": ["cash", "net-cash-operating", "net-cash-investing", "net-cash-financing"],
    cash: ["net-change-in-cash"],
    "changes-in-working-capital": ["accounts-receivable", "inventory", "accounts-payable", "net-cash-operating"],
    "cost-of-goods-sold": ["inventory", "gross-profit"],
    "gross-profit": ["revenue", "cost-of-goods-sold", "operating-income"],
    "operating-income": ["total-operating-expenses", "net-income"],
    "long-term-debt": ["debt-issued", "interest-expense"],
    "dividends-paid": ["retained-earnings", "net-cash-financing"]
  };

  let activeId = null;

  function getConnectedIds(id) {
    const connected = new Set([id]);
    const directMatches = CONNECTIONS[id] || [];

    directMatches.forEach(relatedId => connected.add(relatedId));

    Object.entries(CONNECTIONS).forEach(([sourceId, relatedIds]) => {
      if (relatedIds.includes(id)) {
        connected.add(sourceId);
      }
    });

    return connected;
  }

  function renderWhereTags(items) {
    if (!detailWhere) return;
    detailWhere.innerHTML = items
      .map(item => `<span class="detail-tag">${item}</span>`)
      .join("");
  }

  function renderFlowPath(items) {
    if (!detailFlowPath) return;
    detailFlowPath.innerHTML = items
      .map((item, index) => {
        const arrow = index < items.length - 1
          ? `<span class="detail-flow-arrow" aria-hidden="true">→</span>`
          : "";

        return `
          <span class="detail-flow-chip">
            <strong>${item.statement}</strong>
            <span>${item.label}</span>
          </span>
          ${arrow}
        `;
      })
      .join("");
  }

  function updateDetailPanel(id) {
    if (!hasDetailPanel) return;

    const details = ITEM_DETAILS[id] || {
      title: id,
      intro: "This line helps explain how the statements connect.",
      what: "This line item is part of the statement structure shown on the page.",
      where: ["Statement view"],
      why: "It matters because it helps build the relationship between performance, position, and cash movement.",
      flow: "Use the related highlights to trace how this line connects to other parts of the statements.",
      flowPath: [
        { statement: "Selected Line", label: "Current focus" }
      ]
    };

    detailTitle.textContent = details.title;
    detailIntro.textContent = details.intro;
    detailWhat.textContent = details.what;
    detailWhy.textContent = details.why;
    detailFlow.textContent = details.flow;
    renderWhereTags(details.where);
    renderFlowPath(details.flowPath);
  }

  function resetDetailPanel() {
    if (!hasDetailPanel) return;
    detailTitle.textContent = DEFAULT_PANEL.title;
    detailIntro.textContent = DEFAULT_PANEL.intro;
    detailWhat.textContent = DEFAULT_PANEL.what;
    detailWhy.textContent = DEFAULT_PANEL.why;
    detailFlow.textContent = DEFAULT_PANEL.flow;
    renderWhereTags(DEFAULT_PANEL.where);
    renderFlowPath(DEFAULT_PANEL.flowPath);
  }

  function applyConnectionState(id) {
    const connectedIds = getConnectedIds(id);

    lineItems.forEach(item => {
      const itemId = item.dataset.id;
      const isSelected = itemId === id;
      const isRelated = connectedIds.has(itemId);

      item.classList.toggle("is-selected", isSelected);
      item.classList.toggle("is-related", !isSelected && isRelated);
      item.classList.toggle("is-dimmed", !isRelated);
      item.setAttribute("aria-pressed", isSelected ? "true" : "false");
    });
  }

  function clearConnectionState() {
    activeId = null;
    lineItems.forEach(item => {
      item.classList.remove("is-selected", "is-related", "is-dimmed");
      item.setAttribute("aria-pressed", "false");
    });
    resetDetailPanel();
  }

  lineItems.forEach(item => {
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-pressed", "false");

    const activateItem = event => {
      event.stopPropagation();
      const id = item.dataset.id;
      if (!id) return;

      if (activeId === id) {
        clearConnectionState();
        return;
      }

      activeId = id;
      applyConnectionState(id);
      updateDetailPanel(id);
    };

    item.addEventListener("click", activateItem);
    item.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activateItem(event);
      }
    });
  });

  document.addEventListener("click", clearConnectionState);
  resetDetailPanel();
});
