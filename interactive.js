document.addEventListener("DOMContentLoaded", () => {
  const lineItems = Array.from(document.querySelectorAll(".line-item[data-tooltip]"));
  if (!lineItems.length) return;

  const CONNECTIONS = {
    depreciation: ["equipment", "net-cash-operating"],
    "net-income": ["retained-earnings", "net-cash-operating"],
    inventory: ["cost-of-goods-sold", "changes-in-working-capital"],
    "accounts-receivable": ["revenue", "changes-in-working-capital"],
    cash: ["net-change-in-cash"],
    "debt-issued": ["cash"],
    "capital-expenditures": ["equipment", "cash"]
  };

  const tooltip = document.createElement("div");
  tooltip.className = "interactive-tooltip";
  document.body.appendChild(tooltip);
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
    tooltip.classList.remove("visible");
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
      tooltip.textContent = item.dataset.tooltip || "";
      tooltip.classList.add("visible");
      positionTooltip(event, item);
    });
  });

  document.addEventListener("click", clearConnectionState);
});
