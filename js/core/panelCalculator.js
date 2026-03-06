// panelCalculator.js
// Determines panel counts and end cut width based on rib layout

export function calculatePanels(model) {

  const ribs = model.ribs || [];
  const wallLength = model.wallLength;
  const panelCoverage = model.panelCoverage;

  if (!ribs.length || !panelCoverage) {
    model.panelData = {
      fullPanels: 0,
      rippedPanel: false,
      rippedWidth: 0,
      totalPanels: 0
    };
    return;
  }

  // -----------------------------------
  // Full panel count
  // -----------------------------------

  const fullPanels = Math.floor(wallLength / panelCoverage);

  // -----------------------------------
  // Last seam rib
  // -----------------------------------

  const lastSeamPosition = fullPanels * panelCoverage;

  // -----------------------------------
  // End cut width
  // -----------------------------------

  let endCut = wallLength - lastSeamPosition;

  // Fix floating decimals
  endCut = parseFloat(endCut.toFixed(4));

  // -----------------------------------
  // Determine if ripped panel needed
  // -----------------------------------

  const rippedPanel = endCut > 0;

  const totalPanels = rippedPanel
    ? fullPanels + 1
    : fullPanels;

  // -----------------------------------
  // Store results
  // -----------------------------------

  model.panelData = {
    fullPanels: fullPanels,
    rippedPanel: rippedPanel,
    rippedWidth: endCut,
    totalPanels: totalPanels
  };

}
