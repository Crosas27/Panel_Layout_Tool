import { calculateRibs } from "./ribCalculator.js";
import { calculatePanels } from "./panelCalculator.js";

export function calculateLayout(wall) {

  if (!wall) {
    throw new Error("Wall object is required");
  }

  const ribs = calculateRibs(wall);

  const panels = calculatePanels(wall, ribs);

  return {
    wall,
    ribs,
    panels
  };
}
