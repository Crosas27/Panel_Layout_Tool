// svgRenderer.js
// Responsible for drawing wall layout visualization

export function renderSvg(model) {

  const svg = document.getElementById("wallSvg");
  if (!svg) return;

  svg.innerHTML = "";

  const wallLength = model.wallLength;
  const ribs = model.ribs;
  const panelCoverage = model.panelCoverage;

  const svgWidth = svg.clientWidth || 900;
  const svgHeight = 220;

  svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

  const scale = svgWidth / wallLength;

  const wallTop = 60;
  const wallHeight = 80;

  // ------------------------------------------------
  // PANEL SHADING
  // ------------------------------------------------

  let panelIndex = 0;

  for (let x = 0; x < wallLength; x += panelCoverage) {

    const width = Math.min(panelCoverage, wallLength - x);

    const rect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    rect.setAttribute("x", x * scale);
    rect.setAttribute("y", wallTop);
    rect.setAttribute("width", width * scale);
    rect.setAttribute("height", wallHeight);

    rect.setAttribute(
      "fill",
      panelIndex % 2 === 0
        ? "rgba(120,140,160,0.15)"
        : "rgba(120,140,160,0.25)"
    );

    svg.appendChild(rect);

    panelIndex++;

  }

  // ------------------------------------------------
  // WALL OUTLINE
  // ------------------------------------------------

  const wallRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );

  wallRect.setAttribute("x", 0);
  wallRect.setAttribute("y", wallTop);
  wallRect.setAttribute("width", wallLength * scale);
  wallRect.setAttribute("height", wallHeight);

  wallRect.setAttribute("stroke", "#90A4AE");
  wallRect.setAttribute("stroke-width", "2");
  wallRect.setAttribute("fill", "none");

  svg.appendChild(wallRect);

  // ------------------------------------------------
  // PANEL SEAMS
  // ------------------------------------------------

  for (let x = panelCoverage; x < wallLength; x += panelCoverage) {

    const seam = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    seam.setAttribute("x1", x * scale);
    seam.setAttribute("x2", x * scale);
    seam.setAttribute("y1", wallTop);
    seam.setAttribute("y2", wallTop + wallHeight);

    seam.setAttribute("stroke", "#78909C");
    seam.setAttribute("stroke-width", "3");
    seam.setAttribute("opacity", "0.6");

    svg.appendChild(seam);

  }

  // ------------------------------------------------
  // RIB LINES
  // ------------------------------------------------

  ribs.forEach((rib, index) => {

    const x = rib.position * scale;

    const ribLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );

    ribLine.setAttribute("x1", x);
    ribLine.setAttribute("x2", x);
    ribLine.setAttribute("y1", wallTop);
    ribLine.setAttribute("y2", wallTop + wallHeight);

    ribLine.setAttribute("stroke", "#2196F3");
    ribLine.setAttribute("stroke-width", "2");

    svg.appendChild(ribLine);

    // ---------------------------------------------
    // Rib numbers
    // ---------------------------------------------

    const label = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );

    label.setAttribute("x", x);
    label.setAttribute("y", wallTop + wallHeight + 20);
    label.setAttribute("text-anchor", "middle");

    label.setAttribute("fill", "#BBDEFB");
    label.setAttribute("font-size", "10");

    label.textContent = `R${index}`;

    svg.appendChild(label);

  });

}
