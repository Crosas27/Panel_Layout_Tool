import { calculateRibs } from "./core/ribCalculator.js";
import { calculatePanels } from "./core/panelCalculator.js";

export function generateLayout(config) {

  const model = {
    wallLength: config.wallLength,
    ribSpacing: config.ribSpacing,
    panelCoverage: config.panelCoverage,
    offset: config.offset || 0,

    ribs: [],
    panels: [],
    endCut: 0
  };

  model.ribs = calculateRibs(model);
  model.panels = calculatePanels(model);

  const lastPanel = model.panels[model.panels.length - 1];

  model.endCut = model.wallLength - lastPanel.end;

  return model;
}
