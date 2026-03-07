// layoutEngine.js

export function generateLayout(config) {

  const ribs = calculateRibs(config);
  const panels = calculatePanels(config);

  // seam positions (panel joints)
  const seams = panels.slice(1).map(panel => panel.start);

  // last panel width
  const lastPanelWidth =
    panels.length > 0 ? panels[panels.length - 1].width : 0;

  return {
    wallLength: config.wallLength,
    ribSpacing: config.ribSpacing,
    panelCoverage: config.panelCoverage,
    startOffset: config.startOffset,

    ribs,
    panels,
    seams,
    lastPanelWidth
  };
}


// ---------------------------
// Rib Calculation
// ---------------------------

function calculateRibs({ wallLength, ribSpacing, startOffset }) {

  const ribs = [];
  let position = startOffset;
  let index = 0;

  while (position <= wallLength) {

    ribs.push({
      index,
      position
    });

    position += ribSpacing;
    index++;
  }

  return ribs;
}


// ---------------------------
// Panel Calculation
// ---------------------------

function calculatePanels({ wallLength, panelCoverage }) {

  const panels = [];
  let position = 0;
  let index = 0;

  while (position < wallLength) {

    const width = Math.min(panelCoverage, wallLength - position);

    panels.push({
      index,
      start: position,
      end: position + width,
      width
    });

    position += panelCoverage;
    index++;
  }

  return panels;
}
