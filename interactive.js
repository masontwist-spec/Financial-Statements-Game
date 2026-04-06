document.addEventListener("DOMContentLoaded", () => {
  const lineItems = Array.from(document.querySelectorAll(".line-item[data-tooltip]"));
  if (!lineItems.length) return;

  const tooltip = document.createElement("div");
  tooltip.className = "interactive-tooltip";
  document.body.appendChild(tooltip);

  function moveTooltip(event) {
    const offset = 16;
    tooltip.style.left = `${event.clientX + offset}px`;
    tooltip.style.top = `${event.clientY + offset}px`;
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
  });
});
