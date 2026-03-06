// uiController.js
// Handles UI input, runs layout engine, triggers renderers

import { generateLayout } from "../core/layoutEngine.js";
import { renderSvg } from "../renderer/svgRenderer.js";
import { renderRibTable } from "../renderer/ribTableRenderer.js";

export function initUI() {

  const renderBtn = document.getElementById("renderBtn");

  if (!renderBtn) {
    console.warn("Render button not found");
    return;
  }

  renderBtn.addEventListener("click", handleRender);

}


function handleRender() {

  // --------------------------------------------------
  // 1️⃣ Read UI Inputs
  // --------------------------------------------------

  const wallLength = parseFloat(document.getElementById("wallLength").value) || 0;
  const ribSpacing = parseFloat(document.getElementById("ribSpacing").value) || 12;
  const panelCoverage = parseFloat(document.getElementById("panelCoverage").value) || 36;
  const startOffset = parseFloat(document.getElementById("offset").value) || 0;

  // --------------------------------------------------
  // 2️⃣ Build layout config
  // --------------------------------------------------

  const config = {
    wallLength,
    ribSpacing,
    panelCoverage,
    startOffset
  };

  // --------------------------------------------------
  // 3️⃣ Generate layout model
  // --------------------------------------------------

  const model = generateLayout(config);

  console.log("Layout Model:", model);

  // --------------------------------------------------
  // 4️⃣ Render SVG layout
  // --------------------------------------------------

  renderSvg(model);

  // --------------------------------------------------
  // 5️⃣ Render rib table
  // --------------------------------------------------

  renderRibTable(model);

}
