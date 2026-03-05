export function calculatePanels(wall, ribs) {

  const {
    length,
    panelCoverage = 36
  } = wall;

  // number of full panels
  const fullPanels = Math.floor(length / panelCoverage);

  // last seam rib position
  const lastSeam = fullPanels * panelCoverage;

  // end panel width
  let endPanelWidth = length - lastSeam;

  // determine if ripped panel is needed
  const rippedPanel = endPanelWidth > 0;

  // if perfectly divisible, visually we show no end cut
  if (endPanelWidth === 0) {
    endPanelWidth = 0;
  }

  return {
    fullPanels,
    rippedPanel,
    endPanelWidth,
    lastSeam
  };

}
