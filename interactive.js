document.addEventListener("DOMContentLoaded", () => {
  const lineItems = Array.from(document.querySelectorAll(".line-item[data-id]"));
  if (!lineItems.length) return;

  const ITEM_DETAILS = {
    revenue: {
      title: "Revenue",
      explanation: "Revenue is the top-line income earned from selling goods or services during the period.",
      flow: "Revenue increases net income on the income statement, which can increase retained earnings on the balance sheet and typically supports operating cash flow."
    },
    "cost-of-goods-sold": {
      title: "Cost of Goods Sold",
      explanation: "Cost of goods sold captures the direct cost of inventory or services delivered to customers.",
      flow: "It reduces gross profit on the income statement, is tied to inventory movement on the balance sheet, and affects operating cash flow through working capital."
    },
    "gross-profit": {
      title: "Gross Profit",
      explanation: "Gross profit is the amount left after subtracting direct production or product costs from revenue.",
      flow: "It is an income statement subtotal that shows how much is available to cover operating expenses before reaching operating income."
    },
    depreciation: {
      title: "Depreciation Expense",
      explanation: "Depreciation allocates the cost of long-lived assets over their useful lives.",
      flow: "It reduces income statement profit, lowers the carrying amount of equipment on the balance sheet over time, and is added back in operating cash flow because it is non-cash."
    },
    "net-income": {
      title: "Net Income",
      explanation: "Net income is the final profit after all revenues and expenses have been recorded.",
      flow: "It closes into retained earnings on the balance sheet and serves as the starting point for the operating section of the cash flow statement."
    },
    cash: {
      title: "Cash",
      explanation: "Cash represents funds immediately available for operating, investing, or financing needs.",
      flow: "Cash appears on the balance sheet and changes based on the net increase or decrease reported on the cash flow statement."
    },
    "accounts-receivable": {
      title: "Accounts Receivable",
      explanation: "Accounts receivable represents amounts customers owe from credit sales already recognized as revenue.",
      flow: "It links revenue on the income statement to operating cash flow because growth in receivables can reduce cash collected in the current period."
    },
    inventory: {
      title: "Inventory",
      explanation: "Inventory includes goods held for sale or for use in production.",
      flow: "Inventory supports cost of goods sold on the income statement and affects operating cash flow when inventory balances rise or fall."
    },
    equipment: {
      title: "Equipment, Net",
      explanation: "Equipment, net reflects long-lived operating assets after accumulated depreciation.",
      flow: "It is reduced by depreciation and increased by capital spending, connecting the balance sheet to both the income statement and investing cash flows."
    },
    "retained-earnings": {
      title: "Retained Earnings",
      explanation: "Retained earnings captures cumulative profits kept in the business rather than distributed to owners.",
      flow: "It is increased by net income and reduced by losses or dividends, linking current-period performance to the balance sheet."
    },
    "net-cash-operating": {
      title: "Cash Flows from Operating Activities",
      explanation: "This line shows the net cash generated or used by the company’s core business operations.",
      flow: "It starts from net income and adjusts for non-cash items and working capital changes to explain how profits convert into cash."
    },
    "changes-in-working-capital": {
      title: "Changes in Working Capital",
      explanation: "These adjustments reflect changes in current operating assets and liabilities such as receivables, inventory, and payables.",
      flow: "They connect balance sheet movements to the operating section of the cash flow statement."
    },
    "capital-expenditures": {
      title: "Capital Expenditures",
      explanation: "Capital expenditures represent cash spent to acquire or improve long-term assets.",
      flow: "They increase assets like equipment on the balance sheet and appear as an outflow in the investing section of the cash flow statement."
    },
    "debt-issued": {
      title: "Debt Issued",
      explanation: "Debt issued is cash raised from borrowing.",
      flow: "It increases liabilities on the balance sheet and appears as an inflow in the financing section of the cash flow statement."
    },
    "net-change-in-cash": {
      title: "Net Change in Cash",
      explanation: "Net change in cash is the combined effect of operating, investing, and financing cash flows during the period.",
      flow: "It bridges the cash flow statement to the ending cash balance reported on the balance sheet."
    },
    "selling-expense": {
      title: "Selling Expense",
      explanation: "Selling expense includes costs tied to marketing, distribution, and selling efforts.",
      flow: "It reduces operating income on the income statement and lowers net income, which then affects retained earnings and operating cash flow."
    },
    "general-and-admin": {
      title: "General and Administrative Expense",
      explanation: "General and administrative expense covers overhead not directly tied to production or sales.",
      flow: "It reduces operating income and ultimately flows into net income, which then affects retained earnings and operating cash flow."
    },
    "total-operating-expenses": {
      title: "Total Operating Expenses",
      explanation: "This subtotal combines the key costs of running the core business.",
      flow: "It is used on the income statement to move from gross profit to operating income."
    },
    "operating-income": {
      title: "Operating Income",
      explanation: "Operating income measures profit from core operations before financing and other non-operating items.",
      flow: "It is a key income statement subtotal on the way to net income, which later connects to retained earnings and operating cash flow."
    },
    "interest-expense": {
      title: "Interest Expense",
      explanation: "Interest expense is the cost of borrowing money.",
      flow: "It reduces net income on the income statement and can relate to debt balances on the balance sheet."
    },
    "current-assets": {
      title: "Current Assets",
      explanation: "Current assets are resources expected to be used or turned into cash within one year.",
      flow: "They include balances like cash, receivables, and inventory that often create working capital adjustments in operating cash flow."
    },
    "total-current-assets": {
      title: "Total Current Assets",
      explanation: "This subtotal combines all short-term asset balances.",
      flow: "It summarizes the liquid and near-liquid resources available on the balance sheet."
    },
    "long-term-assets": {
      title: "Long-Term Assets",
      explanation: "Long-term assets provide benefits beyond the current year.",
      flow: "They connect most directly to depreciation on the income statement and capital expenditures on the cash flow statement."
    },
    "total-assets": {
      title: "Total Assets",
      explanation: "Total assets represent the full economic resources controlled by the company.",
      flow: "This balance sheet total must equal total liabilities and equity."
    },
    liabilities: {
      title: "Liabilities",
      explanation: "Liabilities are obligations the company owes to outside parties.",
      flow: "They appear on the balance sheet and some changes, like new borrowing, connect directly to financing cash flows."
    },
    "accounts-payable": {
      title: "Accounts Payable",
      explanation: "Accounts payable reflects unpaid amounts owed to suppliers.",
      flow: "It sits on the balance sheet and changes in payables affect operating cash flow through working capital."
    },
    "long-term-debt": {
      title: "Long-Term Debt",
      explanation: "Long-term debt represents borrowings due beyond the next year.",
      flow: "It appears on the balance sheet and can increase or decrease through financing cash flows like debt issuance or repayment."
    },
    "total-liabilities": {
      title: "Total Liabilities",
      explanation: "Total liabilities is the combined amount of all obligations owed by the company.",
      flow: "This balance sheet subtotal helps show how much of the company’s assets are financed by creditors."
    },
    "stockholders-equity": {
      title: "Stockholders' Equity",
      explanation: "Stockholders' equity is the owners’ residual claim after liabilities are deducted from assets.",
      flow: "It is influenced by common stock activity, retained earnings, and the company’s profitability over time."
    },
    "common-stock": {
      title: "Common Stock",
      explanation: "Common stock represents capital invested by shareholders in exchange for ownership shares.",
      flow: "It is part of equity on the balance sheet and can increase through financing activities."
    },
    "total-liabilities-equity": {
      title: "Total Liabilities and Equity",
      explanation: "This is the financing side of the accounting equation.",
      flow: "It must always equal total assets on the balance sheet."
    },
    "operating-activities": {
      title: "Cash Flows from Operating Activities",
      explanation: "This section captures cash generated or used by the core business.",
      flow: "It translates income statement performance and working capital changes into actual cash from operations."
    },
    "investing-activities": {
      title: "Cash Flows from Investing Activities",
      explanation: "This section captures cash used for or received from long-term assets and investments.",
      flow: "It links to balance sheet asset changes such as equipment purchases or disposals."
    },
    "asset-sales": {
      title: "Proceeds from Asset Sales",
      explanation: "This line records cash received from selling long-term assets.",
      flow: "It appears in investing cash flows and relates to reductions in long-term assets on the balance sheet."
    },
    "net-cash-investing": {
      title: "Net Cash from Investing Activities",
      explanation: "This subtotal shows the overall cash effect of investing decisions during the period.",
      flow: "It summarizes asset purchases and sales before feeding into the overall net change in cash."
    },
    "financing-activities": {
      title: "Cash Flows from Financing Activities",
      explanation: "This section captures cash flows related to debt, equity, and owner distributions.",
      flow: "It connects to changes in liabilities and equity on the balance sheet."
    },
    "dividends-paid": {
      title: "Dividends Paid",
      explanation: "Dividends paid are cash distributions made to shareholders.",
      flow: "They reduce cash and can reduce retained earnings on the balance sheet."
    },
    "net-cash-financing": {
      title: "Net Cash from Financing Activities",
      explanation: "This subtotal shows the overall cash effect of financing decisions during the period.",
      flow: "It combines debt and equity cash flows before feeding into the period’s total change in cash."
    }
  };

  const CONNECTIONS = {
    depreciation: ["equipment", "net-cash-operating"],
    "net-income": ["retained-earnings", "net-cash-operating"],
    inventory: ["cost-of-goods-sold", "changes-in-working-capital"],
    "accounts-receivable": ["revenue", "changes-in-working-capital"],
    cash: ["net-change-in-cash"],
    "debt-issued": ["cash"],
    "capital-expenditures": ["equipment", "cash"]
  };

  const detailTitle = document.getElementById("detail-title");
  const detailExplanation = document.getElementById("detail-explanation");
  const detailFlow = document.getElementById("detail-flow");
  const hasDetailPanel = Boolean(detailTitle && detailExplanation && detailFlow);

  const tooltip = document.createElement("div");
  tooltip.className = "interactive-tooltip";
  if (!hasDetailPanel) {
    document.body.appendChild(tooltip);
  }
  let activeId = null;

  function positionTooltip(event, item) {
    const offset = 14;
    const itemRect = item.getBoundingClientRect();
    const left = Math.min(
      window.innerWidth - 280,
      Math.max(12, event.clientX + offset)
    );
    const top = Math.min(
      window.innerHeight - 120,
      Math.max(12, itemRect.top + window.scrollY - window.scrollY + offset)
    );

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  }

  function getConnectedIds(id) {
    const connected = new Set([id]);
    const directMatches = CONNECTIONS[id] || [];

    directMatches.forEach(relatedId => {
      connected.add(relatedId);
    });

    Object.entries(CONNECTIONS).forEach(([sourceId, relatedIds]) => {
      if (relatedIds.includes(id)) {
        connected.add(sourceId);
      }
    });

    return connected;
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
    });
  }

  function clearConnectionState() {
    activeId = null;
    lineItems.forEach(item => {
      item.classList.remove("is-selected", "is-related", "is-dimmed");
    });
    if (hasDetailPanel) {
      detailTitle.textContent = "Select a line item";
      detailExplanation.textContent = "Click any line on the statement to see a short explanation and how it connects across the three financial statements.";
      detailFlow.textContent = "Choose a line item to view its statement flow.";
    } else {
      tooltip.classList.remove("visible");
    }
  }

  function showDetails(id, event, item) {
    const details = ITEM_DETAILS[id];
    if (!details) return;

    if (hasDetailPanel) {
      detailTitle.textContent = details.title;
      detailExplanation.textContent = details.explanation;
      detailFlow.textContent = details.flow;
      return;
    }

    tooltip.textContent = details.explanation;
    tooltip.classList.add("visible");
    positionTooltip(event, item);
  }

  lineItems.forEach(item => {
    item.addEventListener("click", event => {
      event.stopPropagation();

      if (!item.dataset.id) return;

      if (activeId === item.dataset.id) {
        clearConnectionState();
        return;
      }

      activeId = item.dataset.id;
      applyConnectionState(activeId);
      showDetails(activeId, event, item);
    });
  });

  document.addEventListener("click", clearConnectionState);
});
