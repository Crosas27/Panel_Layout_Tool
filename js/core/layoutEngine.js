// layoutEngine.js
// Main layout orchestrator

import { createLayoutModel } from "./layoutModel.js";
import { calculateRibs } from "./ribCalculator.js";
import { calculatePanels } from "./panelCalculator.js";

export function calculateLayout(wallInput) {

  // 1 — Create base model
  const model = createLayoutModel(wallInput);

  // 2 — Calculate rib positions
  calculateRibs(model);

  // 3 — Calculate panel counts and end cut
  calculatePanels(model);

  // 4 — Establish extents
  if (model.ribs.length > 0) {
    model.firstRib = model.ribs[0];
    model.lastRib = model.ribs[model.ribs.length - 1];
  }

  return model;
}
