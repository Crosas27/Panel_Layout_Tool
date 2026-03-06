import { calculateRibs } from "./core/ribCalculator.js";
import { calculatePanels } from "./core/panelCalculator.js";

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
