import { calculateRibs } from "./ribCalculator.js";
import { calculatePanels } from "./panelCalculator.js";

export function calculateLayout(wallWidth, offset = 0) {

  const ribSpacing = 12;
  const panelCoverage = 36;

  const ribs = [];
  const seams = [];

  // ---- RIBS ----

  let rib = 0;

  while (rib <= wallWidth + ribSpacing) {
    ribs.push(rib);
    rib += ribSpacing;
  }

  // ---- PANEL SEAMS ----

  let seam = offset;

  while (seam <= wallWidth) {
    seams.push(seam);
    seam += panelCoverage;
  }

  // ---- PANEL COUNT ----

  const panelCount = seams.length;

  // ---- END PANEL CUT ----

  const lastSeam = seams[seams.length - 1];

  const rippedPanelWidth = wallWidth - lastSeam;

  return {
    ribs,
    seams,
    panelCount,
    rippedPanelWidth
  };

}
