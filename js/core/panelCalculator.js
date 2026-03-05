export function calculatePanels(wall, ribs) {

  const panelCoverage = wall.panelCoverage;
  const wallLength = wall.length;

  const fullPanels = Math.floor(wallLength / panelCoverage);

  const lastSeamPosition = fullPanels * panelCoverage;

  const rippedPanelWidth = wallLength - lastSeamPosition;

  const hasRippedPanel = rippedPanelWidth > 0;

  return {
    fullPanels,
    rippedPanelWidth,
    hasRippedPanel,
    totalPanels: fullPanels + (hasRippedPanel ? 1 : 0),
    lastSeamPosition
  };
}
