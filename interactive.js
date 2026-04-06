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

  function moveTooltip(event) {
    const offset = 16;
    tooltip.style.left = `${event.clientX + offset}px`;
    tooltip.style.top = `${event.clientY + offset}px`;
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
  }

  lineItems.forEach(item => {
    item.addEventListener("mouseenter", event => {
      tooltip.textContent = item.dataset.tooltip || "";
      tooltip.classList.add("visible");
      moveTooltip(event);
    });

    item.addEventListener("mousemove", moveTooltip);

    item.addEventListener("mouseleave", () => {
      tooltip.classList.remove("visible");
    });

    item.addEventListener("click", event => {
      event.stopPropagation();

      if (!item.dataset.id) return;

      if (activeId === item.dataset.id) {
        clearConnectionState();
        return;
      }

      activeId = item.dataset.id;
      applyConnectionState(activeId);
    });
  });

  document.addEventListener("click", clearConnectionState);
});
