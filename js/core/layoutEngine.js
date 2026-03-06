import { calculateRibs } from ".js/core/ribCalculator.js";
import { calculatePanels } from ".js/core/panelCalculator.js";

export function generateLayout(config) {

  const { wallLength, ribSpacing, panelCoverage, startOffset } = config;

  const ribs = [];
  const panels = [];

  let position = startOffset;

  while (position <= wallLength) {
    ribs.push(position);
    position += ribSpacing;
  }

  return {
    wallLength,
    ribs,
    panels
  };
}
