export function calculatePanels(model) {

  const panels = [];

  let start = model.offset;

  while (start < model.wallLength) {

    const end = start + model.panelCoverage;

    panels.push({
      start,
      end: Math.min(end, model.wallLength),
      width: Math.min(model.panelCoverage, model.wallLength - start)
    });

    start += model.panelCoverage;
  }

  return panels;
}
