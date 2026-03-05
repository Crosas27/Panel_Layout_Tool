import { calculateRibs } from "./core/ribCalculator.js";
import { renderSvg } from "./render/svgRenderer.js";
import { displayRibs } from "./ui/uiController.js";

let wall = {
  length: 0,
  panelCoverage: 36,
  ribSpacing: 12,
  offset: 0
};

document.addEventListener("DOMContentLoaded", () => {

  const renderBtn = document.getElementById("renderBtn");

  renderBtn.addEventListener("click", () => {

    wall.length = parseFloat(document.getElementById("wallLength").value);
    wall.panelCoverage = parseFloat(document.getElementById("panelCoverage").value);
    wall.ribSpacing = parseFloat(document.getElementById("ribSpacing").value);
    wall.offset = parseFloat(document.getElementById("offset").value);

    const ribs = calculateRibs(wall);

    displayRibs(ribs, wall);
    renderSvg(wall, ribs);

  });

});