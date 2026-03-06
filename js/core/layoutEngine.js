// layoutEngine.js
// Central orchestration for panel layout calculations

import { createLayoutModel } from "./layoutModel.js";
import { calculateRibs } from "./ribCalculator.js";
import { calculatePanels } from "./panelCalculator.js";

export function generateLayout(config) {

  // --------------------------------------------------
  // 1️⃣ Create base model
  // --------------------------------------------------

  const model = createLayoutModel(config);

  // --------------------------------------------------
  // 2️⃣ Calculate rib positions
  // --------------------------------------------------

  calculateRibs(model);

  // --------------------------------------------------
  // 3️⃣ Calculate panel counts and end cuts
  // --------------------------------------------------

  calculatePanels(model);

  // --------------------------------------------------
  // 4️⃣ Return finished layout model
  // --------------------------------------------------

  return model;

}
